import { useState } from "react";
import { Link  } from "react-router-dom";

function Register() {
    const [name, setName] = useState("");
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        console.log({
            name,
            email,
            password,});
        };
        return(
            <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 flex items-center justify-center px-4">
            <form
                onSubmit={handleSubmit}
                className="bg-white w-full max-w-md p-8 rounded-2xl shadow-xl"
            >
                <h2 className="text-4xl font-bold text-center text-cyan-400 mb-8">
                Create Account
                </h2>

                <p className="text-center text-gray-500 mb-6">
                Join QueueFlow today
                </p>

                <input
                type="text"
                placeholder="Full Name"
                className="w-full border border-gray-300 rounded-lg p-3 mb-4 outline-none focus:ring-2 focus:ring-blue-500"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                />

                <input
                type="email"
                placeholder="Email Address"
                className="w-full border border-gray-300 rounded-lg p-3 mb-4 outline-none focus:ring-2 focus:ring-blue-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                />

                <input
                type="password"
                placeholder="Password"
                className="w-full border border-gray-300 rounded-lg p-3 mb-4 outline-none focus:ring-2 focus:ring-blue-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                />

                <input
                type="password"
                placeholder="Confirm Password"
                className="w-full border border-gray-300 rounded-lg p-3 mb-6 outline-none focus:ring-2 focus:ring-blue-500"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                />

                <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-300"
                >
                Register
                </button>

                <p className="text-center mt-6 text-gray-600">
                Already have an account?{" "}
                <Link
                    to="/login"
                    className="text-blue-600 font-semibold hover:underline"
                >
                    Login
                </Link>
                </p>
            </form>
            </div>
        );
}

export default Register;
    