import { ToastContainer } from "react-toastify"
import Register from "./components/register";
import UsersList from "./components/UsersList";
import UserDetail from "./components/UserDetail";
import { useState } from "react";
import Login from "./components/Login";

function App() {
  const [selected,setSelected]=useState(null);
  return (
    <div className="container">
        <h2 className="text-center">Sample App</h2>
        <Login />
        <UsersList setSelected={setSelected}/>
        <div className="row">
            <div className="col"><Register /></div>
            <div className="col">{selected && <UserDetail selected={selected}/>}</div>
        </div>
        <ToastContainer />
    </div>
  )
}

export default App
