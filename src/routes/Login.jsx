import React, { useState } from "react";
import axios from "../api";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa";

const Login = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onFinish = async (e) => {
    e.preventDefault();

    const userData = { username, password };

    try {
      const response = await axios.post("/auth/login", userData);
      localStorage.setItem("token", response.data.token);
      dispatch({ type: "SET_AUTH", payload: response.data.token });
      navigate("/profile");
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-blue-700">
      <div className="w-full max-w-lg p-10 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Login
        </h2>
        <form onSubmit={onFinish}>
          <div className="mb-6 relative">
            <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl" />
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full pl-10 py-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-800 placeholder-gray-500 focus:outline-none focus:border-blue-500"
              placeholder="Enter your username"
            />
          </div>
          <div className="mb-8 relative">
            <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl" />
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-10 py-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-800 placeholder-gray-500 focus:outline-none focus:border-blue-500"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 px-6 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
