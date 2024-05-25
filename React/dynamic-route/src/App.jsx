import { BrowserRouter as Router, Routes,Route } from "react-router-dom"
import Products from "./components/products"
import Header from "./components/header"
import Details from "./components/details"
import Dashboard from "./components/Dashboard"
import Profile from "./components/Profile"
import Settings from "./components/Settings"
import Login from "./components/Login"

function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/details/:pid" element={<Details />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} >
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
