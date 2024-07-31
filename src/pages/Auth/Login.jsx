import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/authContext';
import { login as loginUser, fetchUserProfile } from '../../api/auth';
import logo from '../../assets/logo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
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
    <div className="flex items-center justify-center min-h-screen bg-gray-600">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg ring-1 ring-gray-200">
        <div className="flex justify-center mb-6">
          <img src={logo} alt="Logo" className="w-28 h-28" />
        </div>
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-12">
          <b>Admin</b> Login
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="relative mb-12">
            <input
              type="email"
              name="email"
              id="email"
              className="peer w-full border-b-2 border-gray-300 py-2 px-3 rounded-md focus:border-indigo-500 focus:ring-0 outline-none placeholder-transparent"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label
              htmlFor="email"
              className="absolute left-3 -top-3 transform -translate-y-1/2 text-gray-500 transition-all duration-300 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:-translate-y-1/2 peer-focus:-top-5 peer-focus:text-indigo-600 peer-focus:text-xs"
            >
              Email Address
            </label>
          </div>
          <div className="relative mb-6">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              id="password"
              className="peer w-full border-b-2 border-gray-300 py-2 px-3 rounded-md focus:border-indigo-500 focus:ring-0 outline-none placeholder-transparent"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label
              htmlFor="password"
              className="absolute left-3 -top-3 transform -translate-y-1/2 text-gray-500 transition-all duration-300 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:-translate-y-1/2 peer-focus:-top-5 peer-focus:text-indigo-600 peer-focus:text-xs"
            >
              Password
            </label>
            <button
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 focus:outline-none"
              onClick={() => setShowPassword(!showPassword)}
            >
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
            </button>
          </div>
          {error && <p className="text-sm text-red-600 mb-4">{error}</p>}
          <button
            type="submit"
            className="w-full py-3 px-4 bg-red-600 text-white rounded-md shadow-md hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
