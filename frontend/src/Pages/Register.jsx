import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../Services/authService";
import { useAuth } from "../Context/AuthContext";
import {
    successToast,
    errorToast
} from "../utils/toast";

import {
    User,
    Mail,
    Lock,
    Shield,
    UserPlus
} from "lucide-react";

function Register() {

    const [name, setName] = useState("");

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const [role, setRole] = useState("user");

    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const { login } = useAuth();

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            setLoading(true);

            const response = await registerUser({

                name,

                email,

                password,

                role

            });

            localStorage.setItem("token", response.token);

            login(response.user);

            successToast("Account created successfully.");

            navigate("/dashboard");

        } catch (error) {

            console.error(error);

            errorToast(

                error.response?.data?.message ||

                "Registration Failed"

            );

        } finally {

            setLoading(false);

        }

    };

    return (

        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 flex items-center justify-center px-6">

            <div className="w-full max-w-6xl grid lg:grid-cols-2 rounded-3xl overflow-hidden shadow-2xl">

                <div className="hidden lg:flex flex-col justify-center bg-cyan-500 p-14">

                    <h1 className="text-5xl font-black text-slate-900 leading-tight">

                        Join QueueFlow

                    </h1>

                    <p className="mt-8 text-lg leading-8 text-slate-800">

                        Create your account and experience a smarter way of
                        managing queues with live tracking, digital tokens,
                        and real-time updates.

                    </p>

                    <div className="mt-10 bg-white/20 backdrop-blur rounded-2xl p-6">

                        <p className="text-xl font-bold text-slate-900">

                            Fast • Secure • Reliable

                        </p>

                        <p className="mt-3 text-slate-800">

                            Built using the MERN Stack

                        </p>

                    </div>

                </div>

                <div className="bg-white p-10 lg:p-14">

                    <h2 className="text-5xl font-extrabold text-slate-900">

                        Create Account

                    </h2>

                    <p className="text-slate-500 text-lg mt-3">

                        Register to start managing your queues.

                    </p>

                    <form
                        onSubmit={handleSubmit}
                        className="mt-10 space-y-6"
                    >

                        <div>

                            <label className="text-sm font-semibold text-slate-700">

                                Full Name

                            </label>

                            <div className="relative mt-2">

                                <User
                                    size={20}
                                    className="absolute left-4 top-4 text-slate-400"
                                />

                                <input

                                    type="text"

                                    required

                                    placeholder="Enter your full name"

                                    value={name}

                                    onChange={(e)=>setName(e.target.value)}

                                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-300 outline-none transition"

                                />

                            </div>

                        </div>

                        <div>

                            <label className="text-sm font-semibold text-slate-700">

                                Email Address

                            </label>

                            <div className="relative mt-2">

                                <Mail
                                    size={20}
                                    className="absolute left-4 top-4 text-slate-400"
                                />

                                <input

                                    type="email"

                                    required

                                    placeholder="Enter your email"

                                    value={email}

                                    onChange={(e)=>setEmail(e.target.value)}

                                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-300 outline-none transition"

                                />

                            </div>

                        </div>

                        <div>

                            <label className="text-sm font-semibold text-slate-700">

                                Password

                            </label>

                            <div className="relative mt-2">

                                <Lock
                                    size={20}
                                    className="absolute left-4 top-4 text-slate-400"
                                />

                                <input

                                    type="password"

                                    required

                                    placeholder="Create a password"

                                    value={password}

                                    onChange={(e)=>setPassword(e.target.value)}

                                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-300 outline-none transition"

                                />

                            </div>

                        </div>

                        <div>

                            <label className="text-sm font-semibold text-slate-700">

                                Account Type

                            </label>

                            <div className="relative mt-2">

                                <Shield
                                    size={20}
                                    className="absolute left-4 top-4 text-slate-400"
                                />

                                <select

                                    value={role}

                                    onChange={(e)=>setRole(e.target.value)}

                                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-300 outline-none transition"

                                >

                                    <option value="user">

                                        User

                                    </option>

                                    <option value="admin">

                                        Admin

                                    </option>

                                </select>

                            </div>

                        </div>

                        <button

                            type="submit"

                            disabled={loading}

                            className="w-full bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold py-3 rounded-xl transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-cyan-500/30 flex justify-center items-center gap-2"

                        >

                            <UserPlus size={20}/>

                            {

                                loading

                                ?

                                "Creating Account..."

                                :

                                "Register"

                            }

                        </button>

                    </form>

                    <p className="text-center mt-8 text-slate-500">

                        Already have an account?

                        <Link

                            to="/login"

                            className="ml-2 text-cyan-600 font-semibold hover:underline"

                        >

                            Login

                        </Link>

                    </p>

                </div>

            </div>

        </div>

    );

}

export default Register;