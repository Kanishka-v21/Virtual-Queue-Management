import { useState } from "react";
import {
    Bell,
    Moon,
    Shield,
    LogOut,
    User,
    ChevronRight
} from "lucide-react";

import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import DashboardNavbar from "../Components/DashboardNavbar";

export default function Settings() {

    const navigate = useNavigate();

    const { logout, user } = useAuth();

    const [notifications, setNotifications] = useState(true);

    const [darkMode, setDarkMode] = useState(true);

    const handleLogout = () => {

        const confirmLogout = window.confirm(
            "Are you sure you want to logout?"
        );

        if (!confirmLogout) return;

        logout();

        navigate("/login");

    };

    return (

        <div className="min-h-screen bg-slate-950 text-white">

            <DashboardNavbar />

            <div className="max-w-5xl mx-auto pt-28 px-6">

                <h1 className="text-5xl font-bold">

                    Settings

                </h1>

                <p className="text-slate-400 mt-2">

                    Manage your account preferences.

                </p>

                <div className="grid md:grid-cols-2 gap-8 mt-10">

                    <div className="bg-slate-900 rounded-2xl p-8">

                        <h2 className="text-2xl font-bold text-cyan-400">

                            Account

                        </h2>

                        <div className="space-y-6 mt-8">

                            <button

                                onClick={() => navigate("/profile")}

                                className="w-full flex justify-between items-center bg-slate-800 hover:bg-slate-700 transition rounded-xl p-5"

                            >

                                <div className="flex items-center gap-4">

                                    <User />

                                    <div>

                                        <h3 className="font-semibold">

                                            Profile

                                        </h3>

                                        <p className="text-sm text-slate-400">

                                            {user?.name}

                                        </p>

                                    </div>

                                </div>

                                <ChevronRight />

                            </button>

                            <div className="flex justify-between items-center bg-slate-800 rounded-xl p-5">

                                <div className="flex items-center gap-4">

                                    <Bell />

                                    <div>

                                        <h3>

                                            Notifications

                                        </h3>

                                        <p className="text-sm text-slate-400">

                                            Receive queue updates

                                        </p>

                                    </div>

                                </div>

                                <input

                                    type="checkbox"

                                    checked={notifications}

                                    onChange={() =>

                                        setNotifications(!notifications)

                                    }

                                />

                            </div>

                            <div className="flex justify-between items-center bg-slate-800 rounded-xl p-5">

                                <div className="flex items-center gap-4">

                                    <Moon />

                                    <div>

                                        <h3>

                                            Dark Mode

                                        </h3>

                                        <p className="text-sm text-slate-400">

                                            Theme preference

                                        </p>

                                    </div>

                                </div>

                                <input

                                    type="checkbox"

                                    checked={darkMode}

                                    onChange={() =>

                                        setDarkMode(!darkMode)

                                    }

                                />

                            </div>

                            <div className="flex items-center gap-4 bg-slate-800 rounded-xl p-5">

                                <Shield />

                                <div>

                                    <h3>

                                        Security

                                    </h3>

                                    <p className="text-sm text-slate-400">

                                        Passwords are securely encrypted.

                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                    <div className="bg-slate-900 rounded-2xl p-8 flex flex-col justify-between">

                        <div>

                            <h2 className="text-2xl font-bold text-red-400">

                                Logout

                            </h2>

                            <p className="text-slate-400 mt-3 leading-7">

                                Logging out removes your authentication token
                                from this device. You can log in again anytime.

                            </p>

                        </div>

                        <button

                            onClick={handleLogout}

                            className="mt-10 bg-red-600 hover:bg-red-700 transition py-4 rounded-xl font-bold flex items-center justify-center gap-3"

                        >

                            <LogOut />

                            Logout

                        </button>

                    </div>

                </div>

            </div>

        </div>

    );

}