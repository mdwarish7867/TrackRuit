import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext'; // Import useAuth
import { register, login } from '../../services/authService';

const AuthForm = ({ type }) => {
  const navigate = useNavigate();
  const { login: authLogin } = useAuth(); // Get login function from AuthContext
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    remember: false
  });
  
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    if (name === 'password') {
      calculatePasswordStrength(value);
    }
  };
  
  const calculatePasswordStrength = (password) => {
    let strength = 0;
    if (password.length > 5) strength += 1;
    if (/[A-Z]/.test(password)) strength += 1;
    if (/[0-9]/.test(password)) strength += 1;
    if (/[^A-Za-z0-9]/.test(password)) strength += 1;
    setPasswordStrength(strength);
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    // Validate passwords match for registration
    if (type === 'register' && formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      setIsLoading(false);
      return;
    }
    
    try {
      let response;
      if (type === 'register') {
        response = await register({
          name: formData.name,
          email: formData.email,
          password: formData.password
        });
      } else {
        response = await login({
          email: formData.email,
          password: formData.password
        });
      }
      
      // Save token to localStorage
      localStorage.setItem('token', response.token);
      
      // Update auth context with user data
      authLogin(response.token, response.data);
      
      // Redirect to dashboard with state to trigger refresh
      navigate('/dashboard', { state: { fromAuth: true } });
      
    } catch (err) {
      setError(err);
      console.error('AuthForm Error:', {
        type,
        formData,
        error: err
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="p-3 mb-4 text-center text-red-300 rounded-lg bg-red-500/20">
          {error}
        </div>
      )}
      
      {type === 'register' && (
        <div>
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-300">
            Full Name
          </label>
          <div className="relative">
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 text-white transition-all border border-gray-700 rounded-lg outline-none bg-darker focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="John Doe"
              required
              disabled={isLoading}
            />
          </div>
        </div>
      )}
      
      <div>
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-300">
          Email Address
        </label>
        <div className="relative">
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 text-white transition-all border border-gray-700 rounded-lg outline-none bg-darker focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="you@example.com"
            required
            disabled={isLoading}
          />
        </div>
      </div>
      
      <div>
        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-300">
          Password
        </label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-3 pr-10 text-white transition-all border border-gray-700 rounded-lg outline-none bg-darker focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="••••••••"
            required
            disabled={isLoading}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute text-gray-400 transform -translate-y-1/2 right-3 top-1/2 hover:text-gray-200"
            disabled={isLoading}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
        
        {type === 'register' && (
          <div className="mt-3">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs text-gray-400">Password strength</span>
              <span className="text-xs text-gray-400">
                {passwordStrength === 0 ? 'Weak' : 
                 passwordStrength === 1 ? 'Fair' : 
                 passwordStrength === 2 ? 'Good' : 
                 passwordStrength === 3 ? 'Strong' : 'Very Strong'}
              </span>
            </div>
            <div className="w-full h-2 bg-gray-800 rounded-full">
              <div 
                className={`h-2 rounded-full transition-all duration-500 ${
                  passwordStrength === 0 ? 'w-1/4 bg-red-500' : 
                  passwordStrength === 1 ? 'w-2/4 bg-orange-500' : 
                  passwordStrength === 2 ? 'w-3/4 bg-yellow-500' : 
                  passwordStrength >= 3 ? 'w-full bg-green-500' : ''
                }`}
              ></div>
            </div>
            <div className="mt-2 text-xs text-gray-500">
              {passwordStrength < 3 && "Include uppercase, numbers & symbols"}
            </div>
          </div>
        )}
      </div>
      
      {type === 'register' && (
        <div>
          <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-gray-300">
            Confirm Password
          </label>
          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-4 py-3 pr-10 text-white transition-all border border-gray-700 rounded-lg outline-none bg-darker focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="••••••••"
              required
              disabled={isLoading}
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute text-gray-400 transform -translate-y-1/2 right-3 top-1/2 hover:text-gray-200"
              disabled={isLoading}
            >
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        </div>
      )}
      
      <div className="flex items-center justify-between">
        {type === 'login' ? (
          <div className="flex items-center">
            <input
              id="remember"
              name="remember"
              type="checkbox"
              checked={formData.remember}
              onChange={handleChange}
              className="w-4 h-4 border-gray-700 rounded text-primary focus:ring-primary"
              disabled={isLoading}
            />
            <label htmlFor="remember" className="block ml-2 text-sm text-gray-300">
              Remember me
            </label>
          </div>
        ) : (
          <div className="flex items-center">
            <input
              id="terms"
              name="terms"
              type="checkbox"
              required
              className="w-4 h-4 border-gray-700 rounded text-primary focus:ring-primary"
              disabled={isLoading}
            />
            <label htmlFor="terms" className="block ml-2 text-sm text-gray-300">
              I agree to the <a href="#" className="text-primary hover:underline">terms and conditions</a>
            </label>
          </div>
        )}
        
        {type === 'login' && (
          <div className="text-sm">
            <a href="#" className="transition-colors text-primary hover:text-primary-light">
              Forgot password?
            </a>
          </div>
        )}
      </div>
      
      <button
        type="submit"
        disabled={isLoading}
        className="flex items-center justify-center w-full px-4 py-3 btn-primary disabled:opacity-75 disabled:cursor-not-allowed"
      >
        {isLoading ? (
          <span className="flex items-center">
            <svg className="w-5 h-5 mr-3 -ml-1 text-white animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Processing...
          </span>
        ) : type === 'login' ? "Sign in" : "Create account"}
      </button>
    </form>
  );
};

export default AuthForm;