import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../services/authService";
import { useAuth } from "../context/AuthContext";

function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("user");

    const navigate = useNavigate();
    const { login } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await registerUser({
                name,
                email,
                password,
                role,
            });

            localStorage.setItem("token", response.token);
            login(response.user);

            alert("Registration Successful!");

            navigate("/dashboard");
        } catch (error) {
            console.error(error);

            alert(
                error.response?.data?.message ||
                "Registration Failed"
            );
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 flex items-center justify-center px-4">
            <form
                onSubmit={handleSubmit}
                className="bg-white w-full max-w-md p-8 rounded-2xl shadow-xl"
            >
                <h2 className="text-4xl font-bold text-center text-cyan-500 mb-2">
                    Create Account
                </h2>

                <p className="text-center text-gray-500 mb-8">
                    Join QueueFlow today
                </p>

                <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full border border-gray-300 rounded-lg p-3 mb-4 outline-none focus:ring-2 focus:ring-cyan-500"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />

                <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full border border-gray-300 rounded-lg p-3 mb-4 outline-none focus:ring-2 focus:ring-cyan-500"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <input
                    type="password"
                    placeholder="Password"
                    className="w-full border border-gray-300 rounded-lg p-3 mb-6 outline-none focus:ring-2 focus:ring-cyan-500"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <select
                    className="w-full border border-gray-300 rounded-lg p-3 mb-4 outline-none focus:ring-2 focus:ring-cyan-500"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                >
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                </select>

                <button
                    type="submit"
                    className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 rounded-lg transition duration-300"
                >
                    Register
                </button>

                <p className="text-center mt-6 text-gray-600">
                    Already have an account?{" "}
                    <Link
                        to="/login"
                        className="text-cyan-600 font-semibold hover:underline"
                    >
                        Login
                    </Link>
                </p>
            </form>
        </div>
    );
}

export default Register;