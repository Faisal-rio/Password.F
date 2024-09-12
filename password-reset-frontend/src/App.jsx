// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ForgotPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPassword';

function App() {
  return (
    <Router>
      <Routes>
        {/* Redirect root path "/" to the Forgot Password page */}
        <Route path="/" element={<Navigate to="/forgot-password" />} />

        {/* Forgot Password Route */}
        <Route path="/forgot-password" element={<ForgotPassword />} />
        
        {/* Reset Password Route */}
        <Route path="/reset-password/:token" element={<ResetPassword />} />
        
        {/* Add other frontend routes here */}
      </Routes>
    </Router>
  );
}

export default App;
