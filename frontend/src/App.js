import React, { useState } from "react";
import "./App.css";
import logo from "./logo1.png"; 

function App() {
  const [form, setForm] = useState({
    creditScore: "",
    geography: "",
    gender: "",
    age: "",
    customerSince: "",
    currentAccount: "",
    numProducts: "",
    upiEnabled: false,
    income: ""
  });

  const [probability, setProbability] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("https://customer-churn-prediction-7d1x.onrender.com/predict", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await response.json();
    setProbability(data.churn_probability);
  };

  // Function to map probability → color
  const getColor = (prob) => {
    if (prob < 0.3) return "#2ecc71"; // green
    if (prob < 0.6) return "#f1c40f"; // yellow
    if (prob < 0.8) return "#e67e22"; // orange
    return "#e74c3c"; // red
  };

  return (
    <div className="container">
      <div className="header">
        <img src={logo} alt="Logo" className="logo" />
        <h2>Customer Churn Prediction</h2>
      </div>

      <form onSubmit={handleSubmit}>
        <label>Credit Score:</label>
        <input
          type="number"
          name="creditScore"
          value={form.creditScore}
          onChange={handleChange}
          required
        />

        <label>Geography:</label>
        <select
          name="geography"
          value={form.geography}
          onChange={handleChange}
          required
        >
          <option value="">Select</option>
          <option value="Delhi">Delhi</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Bengaluru">Bengaluru</option>
        </select>

        <label>Gender:</label>
        <select
          name="gender"
          value={form.gender}
          onChange={handleChange}
          required
        >
          <option value="">Select</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>

        <label>Age:</label>
        <input
          type="number"
          name="age"
          value={form.age}
          onChange={handleChange}
          required
        />

        <label>Customer Since (Years):</label>
        <input
          type="number"
          name="customerSince"
          value={form.customerSince}
          onChange={handleChange}
          required
        />

        <label>Current Account Balance:</label>
        <input
          type="number"
          name="currentAccount"
          value={form.currentAccount}
          onChange={handleChange}
          required
        />

        <label>Number of Products:</label>
        <input
          type="number"
          name="numProducts"
          value={form.numProducts}
          onChange={handleChange}
          required
        />

        <label className="checkbox-label">
          <input
            type="checkbox"
            name="upiEnabled"
            checked={form.upiEnabled}
            onChange={handleChange}
          />
          UPI Enabled
        </label>

        <label>Estimated Yearly Income:</label>
        <input
          type="number"
          name="income"
          value={form.income}
          onChange={handleChange}
          required
        />

        <button type="submit">Predict</button>
      </form>

      {probability !== null && (
        <div className="result">
          <h3>Churn Probability: {(probability * 100).toFixed(2)}%</h3>
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{
                width: `${probability * 100}%`,
                backgroundColor: getColor(probability),
              }}
            ></div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
