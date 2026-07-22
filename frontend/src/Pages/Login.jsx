import { useState } from "react";

function Login() {
     const [email,setEmail] = useState("");
     const [password, setPassword] = useState("");
     const handleSubmit = (e) => {
        e.preventDefault();

        console.log({email, password,});};
        
        return (
         <div className = "min-h-screen bg-graidient-to-br from-slate-950 via-slate-900 to-slate-800 flex items-center justify-center px-4">
                <form onSubmit = {handleSubmit}
                className ="bg-white p-8 rounded-x1 shadow-1g w-96">
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
                type = "Password"
                palceholder = "password"
                value = {password}
                onChange = {(e) => setPassword(e.target.value)}
                className = "w-full border p-3 rounded-lg mb-6"/>

                <button
                type = "Submit"
                className = "w-full bg-blue-600 text-white py-3 rounded-lg hover: bg-blue-700"> 
                 Submit</button>
             </form>
         </div>
    );
}
export default Login;
