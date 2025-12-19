from fastapi import FastAPI
from pydantic import BaseModel
import uvicorn
import joblib
import numpy as np
from fastapi.middleware.cors import CORSMiddleware

# ------------------------------
# Load trained model & encoders
# ------------------------------
model = joblib.load("churn_model.pkl")
encoder = joblib.load("encoder.pkl")  # {"geography": LabelEncoder, "gender": LabelEncoder}

# ------------------------------
# FastAPI app
# ------------------------------
app = FastAPI()

@app.get("/")
def home():
    return {"message": "FastAPI is working 🚀"}

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # or restrict to ["http://localhost:3000"]
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
# Input schema (your fields exactly)
class CustomerData(BaseModel):
    creditScore: float
    geography: str
    gender: str
    age: int
    customerSince: int
    currentAccount: float
    numProducts: int
    upiEnabled: bool
    income: float

# ------------------------------
# Preprocessing
# ------------------------------
def preprocess(data: CustomerData):
    # Convert inputs to list for model
    row = [
        data.creditScore,
        encoder["Geography"].transform([data.geography])[0],
        encoder["Gender"].transform([data.gender])[0],
        data.age,
        data.customerSince,
        data.currentAccount,
        data.numProducts,
        int(data.upiEnabled),
        data.income
    ]
    return np.array([row])

# ------------------------------
# Prediction Endpoint
# ------------------------------
@app.post("/predict")
def predict(data: CustomerData):
    X = preprocess(data)
    prob = model.predict_proba(X)[0][1]   # churn probability
    return {"churn_probability": float(prob)}

# ------------------------------
# Run the app
# ------------------------------
if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
