
import React, { useState } from 'react';
import { RxCross1 } from "react-icons/rx";

interface LoginProps {
  setShowLogin: (value: boolean) => void;
}

const Login = ({ setShowLogin }: LoginProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); 
    setError("");

    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

   
    console.log("Login Success!");
    setShowLogin(false); 
  };

  return (
    <div 
      className="fixed inset-0 bg-black/60 z-[100] flex justify-center items-center backdrop-blur-sm"
      onClick={() => setShowLogin(false)} 
    >
      <div 
        className="bg-white p-10 rounded-xl shadow-2xl relative w-full max-w-[420px] mx-4"
        onClick={(e) => e.stopPropagation()} 
      >
        <RxCross1 
          className="absolute right-5 top-5 text-xl cursor-pointer text-gray-400 hover:text-black" 
          onClick={() => setShowLogin(false)} 
        />

        <h2 className="text-3xl font-bold text-center mb-2 text-gray-800">Login</h2>
        <p className="text-center text-gray-500 mb-8 text-sm">Welcome back! Please login to continue.</p>

        {error && (
          <p className="bg-red-50 text-red-500 p-3 text-xs rounded mb-5 text-center border border-red-100 font-medium">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="text-sm font-semibold text-gray-600 block mb-1">Email</label>
            <input 
              type="email" 
              placeholder="example@mail.com" 
              className="w-full border border-gray-300 p-3 rounded-lg focus:border-accentDark outline-none transition duration-200"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
          </div>
          <div>
            <label className="text-sm font-semibold text-gray-600 block mb-1">Password</label>
            <input 
              type="password" 
              placeholder="Minimum 6 characters" 
              className="w-full border border-gray-300 p-3 rounded-lg focus:border-accentDark outline-none transition duration-200"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
          </div>
          <button 
            type="submit" 
            className="w-full bg-accentDark hover:bg-accent text-white py-3 rounded-lg font-bold shadow-lg transition-all active:scale-95 mt-4"
          >
            SIGN IN
          </button>
        </form>

        <p className="text-center mt-8 text-sm text-gray-600">
          Don't have an account? <span className="text-accentDark cursor-pointer hover:underline font-bold">Register Now</span>
        </p>
      </div>
    </div>
  );
};

export default Login;