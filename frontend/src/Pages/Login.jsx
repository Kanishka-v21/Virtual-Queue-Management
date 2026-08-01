import { useState } from "react";
import { loginUser } from "../Services/authService";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import { Mail, Lock, LogIn } from "lucide-react";
import { errorToast } from "../utils/toast";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const { login } = useAuth();

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            setLoading(true);

            const loggedInUser = await loginUser({

                email,

                password,

            });

            login(loggedInUser);

            if (loggedInUser.role === "admin") {

                navigate("/admin");

            } else {

                navigate("/dashboard");

            }

        } catch (error) {

            console.error(error);

            errorToast("Invalid email or password");

        } finally {

            setLoading(false);

        }

    };

    return (

        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 flex items-center justify-center px-6">

            <div className="w-full max-w-5xl grid lg:grid-cols-2 rounded-3xl overflow-hidden shadow-2xl">

                <div className="hidden lg:flex flex-col justify-center bg-cyan-500 p-14">

                    <h1 className="text-5xl font-black text-slate-900 leading-tight">

                        Welcome Back

                    </h1>

                    <p className="mt-8 text-lg leading-8 text-slate-800">

                        Access your dashboard, monitor your queue status,
                        receive live updates and manage your appointments
                        effortlessly with QueueFlow.

                    </p>

                    <div className="mt-10">

                        <div className="bg-white/20 backdrop-blur rounded-2xl p-6">

                            <p className="text-lg font-semibold text-slate-900">

                                Smart Queue Management

                            </p>

                            <p className="mt-3 text-slate-800">

                                Faster • Digital • Secure

                            </p>

                        </div>

                    </div>

                </div>

                <div className="bg-white p-10 lg:p-14">

                    <h2 className="text-5xl font-bold text-slate-900">

                        Login

                    </h2>

                    <p className="text-slate-500 mt-3 text-lg">

                        Sign in to continue to your account.

                    </p>

                    <form
                        onSubmit={handleSubmit}
                        className="mt-10 space-y-6"
                    >

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

                                    placeholder="Enter your email"

                                    value={email}

                                    onChange={(e) =>
                                        setEmail(e.target.value)
                                    }

                                    required

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

                                    placeholder="Enter your password"

                                    value={password}

                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }

                                    required

                                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-300 outline-none transition"

                                />

                            </div>

                        </div>

                        <button

                            type="submit"

                            disabled={loading}

                            className="w-full bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold py-3 rounded-xl transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-cyan-500/30 flex justify-center items-center gap-2"

                        >

                            <LogIn size={20}/>

                            {

                                loading

                                    ?

                                    "Logging In..."

                                    :

                                    "Login"

                            }

                        </button>

                    </form>

                    <p className="text-center text-slate-500 mt-8">

                        Don't have an account?

                        <Link
                            to="/register"
                            className="text-cyan-600 font-semibold ml-2 hover:underline"
                        >

                            Register

                        </Link>

                    </p>

                </div>

            </div>

        </div>

    );

}

export default Login;

        
        