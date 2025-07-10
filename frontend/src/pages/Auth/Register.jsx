import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserAstronaut } from 'react-icons/fa';
import AuthForm from '../../components/Auth/AuthForm';
import SocialAuth from '../../components/Auth/SocialAuth';

const Register = () => {
  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-darker">
      <div className="absolute top-20 -left-20 w-96 h-96 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#6366f1]/20 to-transparent rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-40 -right-20 w-80 h-80 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#0ea5e9]/20 to-transparent rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="w-full max-w-4xl mx-auto overflow-hidden glass-card">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left Side - Illustration */}
          <div className="relative hidden p-10 lg:block bg-gradient-to-br from-primary to-accent">
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
              <div className="absolute w-64 h-64 bg-white rounded-full top-1/4 left-1/4"></div>
              <div className="absolute w-40 h-40 bg-white rounded-full bottom-1/3 right-1/4"></div>
            </div>
            
            <div className="relative z-10 flex flex-col justify-between h-full">
              <Link to="/" className="flex items-center text-2xl font-bold text-white">
                <FaUserAstronaut className="mr-2" />
                TrackRuit
              </Link>
              
              <div className="py-10 text-center">
                <div className="inline-flex items-center justify-center w-24 h-24 mb-6 rounded-full bg-white/10">
                  <FaUserAstronaut className="text-4xl text-white" />
                </div>
                <h2 className="mb-4 text-3xl font-bold text-white">Join Our Community</h2>
                <p className="max-w-xs mx-auto text-white/80">
                  Start tracking your job applications with powerful AI insights and analytics.
                </p>
              </div>
              
              <div className="grid grid-cols-3 gap-4">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="p-3 text-center rounded-lg glass-card">
                    <div className="mb-1 text-sm text-white">Feature</div>
                    <div className="text-xs text-white/60">Benefit {i+1}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right Side - Form */}
          <div className="p-8 sm:p-10">
            <div className="mb-8 text-center">
              <h1 className="mb-2 text-3xl font-bold text-white">Create an Account</h1>
              <p className="text-gray-400">Get started with your free account today</p>
            </div>
            
            <AuthForm type="register" />
            
            <SocialAuth type="register" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;