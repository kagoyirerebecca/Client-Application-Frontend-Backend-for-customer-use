"use client";

import { useState } from "react";
import { useRouter } from "next/router";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Add login API call
    router.push("/dashboard"); // Redirect after login
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
      
      {/* Title above the form */}
      <h1 className="text-5xl font-extrabold text-brandGreen mb-10">Credit Jambo</h1>
      
      {/* Centered login form */}
      <form
        onSubmit={handleLogin}
        className="bg-white w-96 p-10 rounded-xl shadow-xl flex flex-col space-y-6"
      >
        <h2 className="text-2xl font-bold text-gray-800 text-center">Admin Login</h2>
        <p className="text-gray-500 text-center text-sm">
          Enter your credentials to access your dashboard
        </p>

        {/* Inputs */}
        <div className="flex flex-col space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brandGreen transition"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brandGreen transition"
            required
          />
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="w-full py-3 rounded-lg bg-brandGreen text-white font-semibold shadow-md hover:bg-green-700 transition"
        >
          Sign In
        </button>

        <p className="text-gray-400 text-center text-sm">
          © 2025 Credit Jambo Ltd
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
