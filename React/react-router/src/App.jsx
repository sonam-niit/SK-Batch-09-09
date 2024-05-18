import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import AddSales from "./components/AddSales";
import Top5Sales from "./components/Top5";
import Revenue from "./components/Revenue";
import { Container } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import Dashboard from "./components/dashboard";
import { useState } from "react";

function App() {
  const [login,setLogin]=useState(null);
  return (
    <BrowserRouter>
      <div>
        <Header login={login} setLogin={setLogin} />
      </div>
      <Container className="mt-3">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login setLogin={setLogin} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/addsale" element={<AddSales />} />
          <Route path="/top5" element={<Top5Sales />} />
          <Route path="/revenue" element={<Revenue />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Container>
      <ToastContainer />
    </BrowserRouter>
  )
}

export default App
