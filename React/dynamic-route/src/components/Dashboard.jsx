import { Link, Outlet } from "react-router-dom";

function Dashboard() {
    return (
        <div className="container mt-3">
            <h3 className="text-center text-bg-warning p-3">Welcome to My Dashboard</h3>
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <Link className="nav-link active"
                     aria-current="page">Active</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to='profile'>
                        Profile</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to='settings'>Settings</Link>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Others</a>
                </li>
            </ul>
            <Outlet />
        </div>
    );
}

export default Dashboard;