import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import bgi1 from "../assets/bg1.jpg";

function SignUp() {
  const [name, setName] = useState("");
  const [firstname, setFirstname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5001/api/signup", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ name, firstname, email, password }),
      });
      const data = await response.json();
      if (response.ok) {
        console.log(data);

        navigate("/");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div
        className="flex items-center justify-center min-h-screen "
        style={{
          backgroundImage: `url(${bgi1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-white/ backdrop-blur-lg p-8 rounded-2xl shadow-2xl w-[90%] max-w-md transition-transform hover:scale-[1.02]">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Create Account
          </h1>
          <form onSubmit={handleSignUp} className="space-y-5">
            <div className="flex">
              <div className="pr-2">
                <label className="block text-gray-700 mb-2 font-medium ">
                  Nom
                </label>
                <div className="flex items-center border rounded-xl px-3 py-2 bg-gray-50 focus-within:ring-2 focus-within:ring-blue-500">
                  <input
                    type="text"
                    placeholder="Nom"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full bg-transparent outline-none text-gray-800"
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 mb-2 font-medium ">
                  Prenom
                </label>
                <div className="flex items-center border rounded-xl px-3 py-2 bg-gray-50 focus-within:ring-2 focus-within:ring-blue-500">
                  <input
                    type="text"
                    placeholder="Prenom"
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                    required
                    className="w-full bg-transparent outline-none text-gray-800"
                  />
                </div>
              </div>
            </div>
            <div>
              <label className="block text-gray-700 mb-2 font-medium ">
                Email
              </label>
              <div className="flex items-center border rounded-xl px-3 py-2 bg-gray-50 focus-within:ring-2 focus-within:ring-blue-500">
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full bg-transparent outline-none text-gray-800"
                />
              </div>
            </div>
            <div>
              <label className="block text-gray-700 mb-2 font-medium ">
                Password
              </label>
              <div className="flex items-center border rounded-xl px-3 py-2 bg-gray-50 focus-within:ring-2 focus-within:ring-blue-500">
                <input
                  type="password"
                  placeholder="***********"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full bg-transparent outline-none text-gray-800"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-xl shadow-md transition-all"
            >
              S'inscrire
            </button>
          </form>
          <Link
            to={"/"}
            className="flex justify-center items-center pt-4 font-semibold "
          >
            Se Connecter a mon compte
          </Link>
        </div>
      </div>
    </>
  );
}

export default SignUp;
