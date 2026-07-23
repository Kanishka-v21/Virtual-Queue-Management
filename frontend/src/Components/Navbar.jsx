import { Link } from "react-router-dom";


export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-900/90 backdrop-blur-md shadow-lg z-50">
      <div className="max-w-7xl mx-auto h-20 px-20 flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-3xl font-bold text-cyan-400">
          QueueFlow
        </h1>

        {/* Navigation */}
        <ul className="flex items-center gap-10 text-white font-medium">
          <li className="hover:text-cyan-400 cursor-pointer transition duration-300">
            Home
          </li>
          <Link to="/Features">
          <li className="hover:text-cyan-400 cursor-pointer transition duration-300">
            Features
          </li>
          </Link>
          <Link to="/#howitworks">
          <li id ="howitworks" className="hover:text-cyan-400 cursor-pointer transition duration-300">
            How It Works
          </li>
          </Link>

          <Link to="/About">
          <li className="hover:text-cyan-400 cursor-pointer transition duration-300">
            About
          </li>
          </Link>
        </ul>

        {/* Buttons */}
        <div className="flex items-center gap-4 mr-20 ml-20">
          <Link to="/login">
          <button className="px-5 py-2 border border-cyan-400 rounded-lg text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 transition duration-300">
            Login
            </button>
          </Link>

          <Link to="/register">
          <button className="px-5 py-2 rounded-lg bg-cyan-400 text-slate-900 font-semibold hover:bg-cyan-300 transition duration-300">
            Register
            </button>
          </Link>
        </div>

      </div>
    </nav>
  );
}