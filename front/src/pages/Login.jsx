import React from "react";
import '../index.css';
import { useState , useContext } from "react";
import {UserContext} from "../hooks/userContext"
import { useNavigate } from "react-router-dom";
import {Lock,Mail } from 'lucide-react'
import { Link } from "react-router-dom";
function Login() {
   const navigate = useNavigate();
  const {setUser} = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("clicke");
    
    try{

      const response = await fetch("http://localhost:5001/api/login",{
        method : "POST",
        headers : {"content-type": "application/json"},
        body : JSON.stringify({email, password })
      });
      console.log("reponse recu:",response );
      
      const data = await response.json();

      if (response.ok) {
        if (data.user && data.role) {
          const userData = { ...data.user, role: data.role };
          console.log(userData);
          
          setUser(userData);
          localStorage.setItem("user", JSON.stringify(userData));
           if(data.role === "users")
           {
             navigate("/utilisateurs");
            }else(data.role === "admin")
            {
             navigate("/admin");

           }
        } else {
          console.error("Réponse serveur invalide :", data);
          alert("Erreur interne : utilisateur ou rôle manquant.");
        }
      } else {
        alert(data.message || "Email ou mot de passe incorrect");
      }
    } catch(error)
    {
      console.error("erreur de connexion : ", error);
      alert("Erreur serveur ou réseau");
    }

  };
  

    return (
        <>
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-yellow-400 to-green-400">
            <div className="bg-white/90 backdrop-blur-lg p-8 rounded-2xl shadow-2xl w-[90%] max-w-md transition-transform hover:scale-[1.02]">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Connexion</h1>
                <form onSubmit={handleLogin} className="space-y-5">
                    <div>
                        <label className="block text-gray-700 mb-2 font-medium ">Email</label>
                        <div className="flex items-center border rounded-xl px-3 py-2 bg-gray-50 focus-within:ring-2 focus-within:ring-blue-500">
                            <Mail className="mr-2 text-gray-500 w-5 h-5" />
                            <input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} required className="w-full bg-transparent outline-none text-gray-800"/>
                        </div>
                    </div>
                    <div>
                        <label className="block text-gray-700 mb-2 font-medium ">Password</label>
                        <div className="flex items-center border rounded-xl px-3 py-2 bg-gray-50 focus-within:ring-2 focus-within:ring-blue-500">
                            <Lock className="mr-2 text-gray-500 w-5 h-5"/>
                            <input type="password" placeholder="***********" value={password} onChange={(e)=>setPassword(e.target.value)} required className="w-full bg-transparent outline-none text-gray-800"/>
                        </div>
                    </div>
                    <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-xl shadow-md transition-all">Se connecter</button>
                </form>
                <Link to={"/signup"} className="flex items-center justify-center pt-4">Vous n'avez pas de compte ?</Link>
            </div>
        </div>
        </>
    )
}

export default Login ;