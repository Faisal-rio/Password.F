import React, { useState } from "react";
import axios from "axios";
import "./ForgotPassword.css"; 

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/forgot-password`, { email });
      setMessage(response.data.message);
    } catch (error) {
      console.error("Error occurred:", error);  // Log error details for debugging
      setMessage(error.response?.data?.message || "An error occurred while processing your request.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="forgot-password-container">
      <div className="image-container"></div>
      <div className="form-container">
        <div className="card shadow-lg p-4">
          <h2 className="text-center mb-4">Forgot Password</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-4">
              <label>Email Address</label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary" disabled={loading}>
              {loading ? "Sending..." : "Submit"}
            </button>
          </form>
          {message && <p className={`message ${message.includes("success") ? "text-success" : "text-danger"}`}>{message}</p>}
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
