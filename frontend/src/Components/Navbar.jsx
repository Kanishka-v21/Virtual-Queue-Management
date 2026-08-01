import { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useAuth } from "../Context/AuthContext";

export default function Navbar() {

    const { user, logout } = useAuth();

    const navigate = useNavigate();

    const [menuOpen, setMenuOpen] = useState(false);

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {

        const handleScroll = () => {

            setScrolled(window.scrollY > 25);

        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);

    }, []);

    const closeMenu = () => setMenuOpen(false);

    const handleLogout = () => {

        logout();

        navigate("/login");

    };

    const navLinkStyle = ({ isActive }) =>
        `relative transition-all duration-300 text-[16px] font-medium after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:bg-cyan-400 after:transition-all after:duration-300 ${
            isActive
                ? "text-cyan-400 after:w-full"
                : "text-slate-300 hover:text-cyan-400 after:w-0 hover:after:w-full"
        }`;

    return (

        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                scrolled
                    ? "bg-slate-950/90 backdrop-blur-xl shadow-2xl border-b border-slate-800"
                    : "bg-transparent"
            }`}
        >

            <div className="max-w-7xl mx-auto h-20 px-6 lg:px-10 flex items-center justify-between">

                <Link
                    to="/"
                    className="text-4xl font-black tracking-tight text-cyan-400 hover:scale-105 transition duration-300"
                >
                    QueueFlow
                </Link>

                <div className="hidden md:flex items-center gap-10">

                    <NavLink
                        to="/"
                        className={navLinkStyle}
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/features"
                        className={navLinkStyle}
                    >
                        Features
                    </NavLink>

                    <NavLink
                        to="/about"
                        className={navLinkStyle}
                    >
                        About
                    </NavLink>

                </div>

                <div className="hidden md:flex items-center gap-4">

                    {user ? (

                        <>

                            <button

                                onClick={() => navigate("/dashboard")}

                                className="px-6 py-2.5 rounded-xl bg-cyan-500 text-black font-semibold hover:bg-cyan-400 hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-cyan-500/20"

                            >

                                Dashboard

                            </button>

                            <button

                                onClick={handleLogout}

                                className="px-6 py-2.5 rounded-xl border border-red-500 text-red-400 hover:bg-red-500 hover:text-white hover:-translate-y-1 transition-all duration-300"

                            >

                                Logout

                            </button>

                        </>

                    ) : (

                        <>

                            <Link to="/login">

                                <button className="px-6 py-2.5 rounded-xl border border-cyan-500 text-cyan-400 font-medium hover:bg-cyan-500 hover:text-black transition-all duration-300">

                                    Login

                                </button>

                            </Link>

                            <Link to="/register">

                                <button className="px-6 py-2.5 rounded-xl bg-cyan-500 text-black font-semibold hover:bg-cyan-400 hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-cyan-500/20">

                                    Register

                                </button>

                            </Link>

                        </>

                    )}

                </div>

                <button

                    onClick={() => setMenuOpen(!menuOpen)}

                    className="md:hidden text-white"

                >

                    {menuOpen ? <X size={30}/> : <Menu size={30}/>}

                </button>

            </div>

            {menuOpen && (

                <div className="md:hidden bg-slate-950/95 backdrop-blur-xl border-t border-slate-800">

                    <div className="px-6 py-8 flex flex-col gap-6">

                        <NavLink
                            to="/"
                            onClick={closeMenu}
                            className={navLinkStyle}
                        >
                            Home
                        </NavLink>

                        <NavLink
                            to="/features"
                            onClick={closeMenu}
                            className={navLinkStyle}
                        >
                            Features
                        </NavLink>

                        <NavLink
                            to="/about"
                            onClick={closeMenu}
                            className={navLinkStyle}
                        >
                            About
                        </NavLink>

                        {user ? (

                            <>

                                <button

                                    onClick={() => {

                                        navigate("/dashboard");

                                        closeMenu();

                                    }}

                                    className="bg-cyan-500 text-black rounded-xl py-3 font-semibold hover:bg-cyan-400 transition"

                                >

                                    Dashboard

                                </button>

                                <button

                                    onClick={() => {

                                        handleLogout();

                                        closeMenu();

                                    }}

                                    className="border border-red-500 rounded-xl py-3 text-red-400 hover:bg-red-500 hover:text-white transition"

                                >

                                    Logout

                                </button>

                            </>

                        ) : (

                            <>

                                <Link
                                    to="/login"
                                    onClick={closeMenu}
                                >

                                    <button className="w-full border border-cyan-500 rounded-xl py-3 text-cyan-400 font-medium hover:bg-cyan-500 hover:text-black transition">

                                        Login

                                    </button>

                                </Link>

                                <Link
                                    to="/register"
                                    onClick={closeMenu}
                                >

                                    <button className="w-full bg-cyan-500 rounded-xl py-3 text-black font-semibold hover:bg-cyan-400 transition">

                                        Register

                                    </button>

                                </Link>

                            </>

                        )}

                    </div>

                </div>

            )}

        </nav>

    );

}