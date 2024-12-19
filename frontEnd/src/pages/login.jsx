import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleLoginSignUp = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="bg-oxford_blue min-h-screen flex items-center justify-center">
      <div className="bg-anti-flash_white p-10 rounded-lg shadow-lg w-11/12 md:w-3/4 lg:w-1/2">
        {/* Login/Sign Up Toggle */}
        <div className="flex space-x-6 mb-6 justify-center">
          <button
            onClick={toggleLoginSignUp}
            className={`px-6 py-2 text-lg font-semibold ${isLogin ? 'text-saffron' : 'text-night'} border-b-4 ${
              isLogin ? 'border-saffron' : 'border-night'
            } transition-all duration-300 w-full text-center`}
          >
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
          <button
            onClick={toggleLoginSignUp}
            className={`px-6 py-2 text-lg font-semibold ${!isLogin ? 'text-saffron' : 'text-night'} border-b-4 ${
              !isLogin ? 'border-saffron' : 'border-night'
            } transition-all duration-300 w-full text-center`}
          >
            {isLogin ? 'Sign Up' : 'Login'}
          </button>
        </div>

        <div className="border-b-4 border-saffron mb-6"></div>

        {/* Login or Sign Up Form */}
        <form>
          <div className="mb-6">
            <label htmlFor="email" className="block text-lg text-night mb-2">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-saffron"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-lg text-night mb-2">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-saffron"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center mb-6">
            <button type="submit" className="px-6 py-2 text-white bg-saffron rounded-md hover:bg-saffron-600">
              {isLogin ? 'Login' : 'Sign Up'}
            </button>
          </div>
        </form>

        {/* Link to other page */}
        <div className="text-center">
          {isLogin ? (
            <p className="text-night text-sm">
              Don't have an account?{' '}
              <Link to="/signup" className="text-saffron hover:underline">
                Sign up here.
              </Link>
            </p>
          ) : (
            <p className="text-night text-sm">
              Already have an account?{' '}
              <Link to="/login" className="text-saffron hover:underline">
                Login here.
              </Link>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;