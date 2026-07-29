import { loginUser } from "../services/authService";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";

function Login() {
     const [email,setEmail] = useState("");
     const [password, setPassword] = useState("");
     const navigate = useNavigate();
     const [loading, setLoading] = useState(false);
     const { login } = useAuth();

   const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    setLoading(true);

    const loggedInUser = await loginUser({
      email,
      password,
    });
    console.log("Logged in user:", loggedInUser);
    login(loggedInUser);

    if (loggedInUser.role === "admin") {
      navigate("/admin");
    } else {
      console.log("Navigating...");
      navigate("/dashboard");
    }
  } catch (error) {
    console.error(error);
    alert("Invalid email or password");
  } finally {
    setLoading(false);
  }
};

        
        return (
         <div className = "min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 flex items-center justify-center px-4">
                <form onSubmit = {handleSubmit}
                className ="bg-white p-8 rounded-xl shadow-lg w-96">
                <h2 className ="text-4xl font-bold text-center text-cyan-400 mb-8">
                    Login
                </h2>

                <input 
                type = "email"
                placeholder = "Email"
                className = "w-full border p-3 rounded-lg mb-4"
                value = {email}
                onChange = {(e) => setEmail(e.target.value)}/>

                <input 
                type = "password"
                placeholder = "password"
                value = {password}
                onChange = {(e) => setPassword(e.target.value)}
                className = "w-full border p-3 rounded-lg mb-6"/>

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 disabled:bg-gray-400"
                >
                    {loading ? "Logging In..." : "Login"}
                </button>
             </form>
         </div>
    );
}
export default Login;
