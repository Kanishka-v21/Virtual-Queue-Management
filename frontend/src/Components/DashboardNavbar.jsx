import { FaBell, FaUserCircle, FaSignOutAlt } from "react-icons/fa";
import "../Pages/Dashboard.css";

export default function DashboardNavbar() {
    return (
        <nav className ="dashboard-navbar">
            <div className="dashboard-logo">
                <h2>Queue<span>Flow</span></h2>
            </div>
            <div className="dashboard-nav-right">
                <div className="notification">
                    <FaBell />
                    <span className="notification-dot"></span>
                </div>
                <div className ="profile">
                    <FaUserCircle className="profile-icon" />
                    <span> Welcome, User</span>
                </div>
                <button className="logout-btn">
                    <FaSignOutAlt />
                    Logout
                </button>
            </div>
        </nav>

    );
}
