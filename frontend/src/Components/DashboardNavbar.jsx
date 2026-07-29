import { FaBell, FaUserCircle, FaSignOutAlt } from "react-icons/fa";
import "../Pages/Dashboard.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function DashboardNavbar() {
    const navigate = useNavigate();
    const { logout } = useAuth();
    const { user } = useAuth();
    const handleProfile = () => {
        navigate("/profile");
    };

    const handleLogout = () => {
            logout();
            navigate("/login");
    }
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
                    <span></span>
                </div>
                
                <button
                    onClick={handleProfile}
                    className="bg-cyan-600 text-white px-5 py-2 rounded-lg hover:bg-cyan-700 transition">
                    Profile
                </button>

                <button
                onClick={handleLogout}
                className="w-full bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700">
                Logout
            </button>
            {
            user?.role === "admin" && (
                <button
                    onClick={() => navigate("/admin")}
                    className="bg-purple-600 text-white px-5 py-2 rounded-lg hover:bg-purple-700"
                >
                    Admin Panel
                </button>
    )
}
            </div>
        </nav>
    );
}
