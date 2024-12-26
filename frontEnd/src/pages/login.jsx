import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = ({ setUser }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const switchToLogin = () => setIsLogin(true);
  const switchToSignUp = () => setIsLogin(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isLogin) {
        // Login Request
        try {
          const response = await axios.post("http://localhost:5000/login", formData);
          console.log("Login successful:", response.data);
        } catch (error) {
          console.error("Login failed:", error.response?.data || error.message);
        }
        //!const response = await axios.post("http://localhost:5000/login", formData);
        setUser(response.data); // Pass user data to parent component
        alert("Login successful!");
        navigate("/userHome");
      } else {
        // Sign Up Request
        await axios.post("http://localhost:5000/signup", {
          ...formData,
          name: "New User", // Placeholder for user name, update if required
        });
        alert("Sign up successful! Please login.");
        setIsLogin(true); // Switch to login after successful signup
      }
    } catch (error) {
      alert(error.response?.data?.message || "An error occurred. Please try again.");
    }
  };

  return (
    <div className="bg-oxford_blue min-h-screen flex items-center justify-center">
      <div className="bg-anti-flash_white p-10 rounded-lg shadow-lg w-11/12 md:w-3/4 lg:w-1/2">
        {/* Login/Sign Up Toggle */}
        <div className="flex space-x-6 mb-6 justify-center">
          <button
            onClick={switchToLogin}
            className={`px-6 py-2 text-lg font-semibold ${isLogin ? "text-saffron" : "text-night"} border-b-4 ${
              isLogin ? "border-saffron" : "border-night"
            } transition-all duration-300 w-full text-center`}
          >
            Login
          </button>
          <button
            onClick={switchToSignUp}
            className={`px-6 py-2 text-lg font-semibold ${!isLogin ? "text-saffron" : "text-night"} border-b-4 ${
              !isLogin ? "border-saffron" : "border-night"
            } transition-all duration-300 w-full text-center`}
          >
            Sign Up
          </button>
        </div>

        <div className="border-b-4 border-saffron mb-6"></div>

        {/* Login or Sign Up Form */}
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="email" className="block text-lg text-night mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-saffron"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-lg text-night mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-saffron"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center mb-6">
            <button type="submit" className="px-6 py-2 text-white bg-saffron rounded-md hover:bg-saffron-600">
              {isLogin ? "Login" : "Sign Up"}
            </button>
          </div>
        </form>

        {/* Link to other page */}
        <div className="text-center">
          {isLogin ? (
            <p className="text-night text-sm">
              Don't have an account?{" "}
              <span className="text-saffron hover:underline cursor-pointer" onClick={switchToSignUp}>
                Sign up here.
              </span>
            </p>
          ) : (
            <p className="text-night text-sm">
              Already have an account?{" "}
              <span className="text-saffron hover:underline cursor-pointer" onClick={switchToLogin}>
                Login here.
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
