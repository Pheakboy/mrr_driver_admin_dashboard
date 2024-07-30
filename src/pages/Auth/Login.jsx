// src/pages/Auth/Login.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/authContext';
import { login as loginUser, fetchUserProfile } from '../../api/auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      console.log('Attempting to log in...');
      const token = await loginUser(email, password);
      console.log('Token received:', token);

      const user = await fetchUserProfile(token);
      console.log('User profile received:', user);

      login(token, user); // Store token and user in context
      navigate('/dashboard', { replace: true }); // Use replace to prevent going back to login
    } catch (err) {
      console.error('Login error:', err);
      setError(err.message);
    }
  };

  return (
    <div className="relative mx-auto w-full max-w-md bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10">
      <div className="flex justify-center items-center w-16 h-16 rounded-full">
        <img src="" alt="Logo" />
      </div>
      <div className="w-full">
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-gray-900">
            <b>Admin</b> Login
          </h1>
        </div>
        <div className="mt-5">
          <form onSubmit={handleSubmit}>
            <div className="relative mt-6">
              <input
                type="email"
                name="email"
                id="email"
                className="peer mt-1 w-full border-b-2 border-gray-300 focus:border-indigo-600 outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label
                htmlFor="email"
                className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-gray-500 transition-all peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:opacity-50 peer-focus:-translate-y-1/2 peer-focus:scale-75 peer-focus:text-indigo-600"
              >
                Email Address
              </label>
            </div>
            <div className="relative mt-6">
              <input
                type="password"
                name="password"
                id="password"
                className="peer mt-1 w-full border-b-2 border-gray-300 focus:border-indigo-600 outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <label
                htmlFor="password"
                className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-gray-500 transition-all peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:opacity-50 peer-focus:-translate-y-1/2 peer-focus:scale-75 peer-focus:text-indigo-600"
              >
                Password
              </label>
            </div>
            {error && <p className="mt-4 text-sm text-red-600">{error}</p>}
            <div className="my-6">
              <button
                type="submit"
                className="w-full rounded-md bg-green-400 px-3 py-4 text-black hover:bg-green-300"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
