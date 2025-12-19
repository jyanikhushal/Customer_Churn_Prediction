# Customer_Churn_Prediction 

## 📌 Overview  
This project predicts **Customer Churn** (whether a customer is likely to leave a service) using machine learning. It combines **Exploratory Data Analysis (EDA)**, **feature engineering**, and **XGBoost modeling** to provide accurate churn predictions.  

The system includes:  
- 📊 **Jupyter Notebooks** for data exploration, preprocessing, and model training.  
- ⚙️ **Backend (FastAPI)** for serving the trained model via REST APIs.  
- 💻 **Frontend (React)** for user interaction and churn prediction visualization.  

---


## 🚀 Features  
- Data preprocessing: handling missing values, categorical encoding, scaling.  
- Exploratory Data Analysis (EDA) with visualizations.  
- ML model: **XGBoost classifier** optimized with hyperparameter tuning.   
- React frontend for input and prediction results.  

---

## ⚙️ Installation & Setup  

### 1️⃣ Clone Repository  
```bash
git clone (https://github.com/jyanikhushal/Customer_Churn_Prediction)
cd Customer_Churn_Prediction
```

### 2️⃣ Backend Setup  
```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```
Backend runs at `http://127.0.0.1:8000`.

### 3️⃣ Frontend Setup  
```bash
cd frontend
npm install
npm start
```
Frontend runs at `http://localhost:3000`.

---

## 📊 Usage  
1. Open the frontend app.  
2. Enter customer details (features).  
3. Submit → Backend API → ML Model → Returns churn probability.  
4. View prediction on UI.  

---

## 🧠 Model Training  
1. Run notebooks inside `notebooks/`.  
2. Preprocessing includes label encoding, scaling, feature engineering.  
3. Model trained with **XGBClassifier**.  
4. Model is saved as `.pkl`
---

## 🛠️ Tech Stack  
- **Machine Learning:** Python, Pandas, NumPy, Scikit-learn, XGBoost  
- **Backend:** FastAPI, Uvicorn  
- **Frontend:** React  
- **Deployment:** Render(Backend) / Vercel(Frontend)  

---

## ✨ Author  
**Jyani Khushal**  
- 💼 Interested in **Data Science, Machine Learning, and Quantitative Finance**  
- 🌐 [LinkedIn](https://www.linkedin.com/in/khushal-jyani-073b20255/) | [GitHub](https://github.com/jyanikhushal)  



