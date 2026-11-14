import React, { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    address: "",
    address2: "",
    city: "",
    province: "",
    postalCode: "",
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData({ ...formData });
  };

  return (
    <div className="container">
      <h1>Data Entry Form</h1>

      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label>Address</label>
          <input
            type="text"
            name="address"
            placeholder="1234 Main St"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Address 2</label>
          <input
            type="text"
            name="address2"
            placeholder="Apartment, studio, or floor"
            value={formData.address2}
            onChange={handleChange}
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Province</label>
            <select
              name="province"
              value={formData.province}
              onChange={handleChange}
              required
            >
              <option value="">Choose...</option>
              <option>Alberta</option>
              <option>British Columbia</option>
              <option>Manitoba</option>
              <option>New Brunswick</option>
              <option>Newfoundland and Labrador</option>
              <option>Nova Scotia</option>
              <option>Ontario</option>
              <option>Prince Edward Island</option>
              <option>Quebec</option>
              <option>Saskatchewan</option>
            </select>
          </div>

          <div className="form-group">
            <label>Postal Code</label>
            <input
              type="text"
              name="postalCode"
              value={formData.postalCode}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <button type="submit">Submit</button>
      </form>

      {submittedData && (
        <div className="results">
          <h2>Submitted Information</h2>
          <p>
            <strong>Email:</strong> {submittedData.email}
          </p>
          <p>
            <strong>Full Name:</strong> {submittedData.name}
          </p>
          <p>
            <strong>Address:</strong> {submittedData.address}
          </p>
          {submittedData.address2 && (
            <p>
              <strong>Address 2:</strong> {submittedData.address2}
            </p>
          )}
          <p>
            <strong>City:</strong> {submittedData.city}
          </p>
          <p>
            <strong>Province:</strong> {submittedData.province}
          </p>
          <p>
            <strong>Postal Code:</strong> {submittedData.postalCode}
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
