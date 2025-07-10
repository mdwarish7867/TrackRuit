import React from 'react';
import { Link } from 'react-router-dom';
import { FaLock } from 'react-icons/fa';
import AuthForm from '../../components/Auth/AuthForm';
import SocialAuth from '../../components/Auth/SocialAuth';

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-darker">
      <div className="absolute top-20 -left-20 w-96 h-96 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#6366f1]/20 to-transparent rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-40 -right-20 w-80 h-80 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#0ea5e9]/20 to-transparent rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="w-full max-w-md mx-auto overflow-hidden glass-card">
        <div className="p-8 sm:p-10">
          <div className="mb-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-primary/10">
              <FaLock className="text-2xl text-primary" />
            </div>
            <h1 className="mb-2 text-3xl font-bold text-white">Welcome Back</h1>
            <p className="text-gray-400">Sign in to continue your job search journey</p>
          </div>
          
          <AuthForm type="login" />
          
          <SocialAuth type="login" />
          
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-400">
              By signing in, you agree to our{" "}
              <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link>{" "}
              and{" "}
              <Link to="/terms" className="text-primary hover:underline">Terms of Service</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;