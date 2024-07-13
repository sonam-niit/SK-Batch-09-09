import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Auth from './components/Auth';


const App = () => {
  const [token, setToken] = useState(localStorage.getItem('token') || '');

  const setAuthToken = (token) => {
    localStorage.setItem('token', token);
    setToken(token);
  };

  const isLoggedIn = !!token;

  return (
    <Router>
      <Routes>
        <Route path="/auth" element={<Auth setToken={setAuthToken} />} />
        {/* <Route path="/categories" element={isLoggedIn ? <Category token={token} /> : <Navigate to="/auth" />} />
        <Route path="/products" element={isLoggedIn ? <Product token={token} /> : <Navigate to="/auth" />} /> */}
        <Route path="*" element={<Navigate to="/auth" />} />
      </Routes>
    </Router>
  );
};

export default App