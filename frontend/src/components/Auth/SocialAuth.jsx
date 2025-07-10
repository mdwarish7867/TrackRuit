import React from 'react';
import { FaGoogle, FaGithub, FaLinkedin } from 'react-icons/fa';

const SocialAuth = ({ type }) => {
  return (
    <div className="mt-8">
      <div className="relative flex items-center justify-center mb-6">
        <div className="w-full border-t border-gray-700"></div>
        <span className="relative px-4 text-gray-400 bg-darker">Or continue with</span>
      </div>
      
      <div className="grid grid-cols-3 gap-4">
        <button className="flex items-center justify-center p-3 transition-colors glass-card hover:border-primary">
          <FaGoogle className="text-xl text-[#DB4437]" />
        </button>
        <button className="flex items-center justify-center p-3 transition-colors glass-card hover:border-primary">
          <FaGithub className="text-xl text-gray-300" />
        </button>
        <button className="flex items-center justify-center p-3 transition-colors glass-card hover:border-primary">
          <FaLinkedin className="text-xl text-[#0A66C2]" />
        </button>
      </div>
      
      <div className="mt-6 text-center">
        <p className="text-gray-400">
          {type === 'login' 
            ? "Don't have an account? " 
            : "Already have an account? "
          }
          <a 
            href={type === 'login' ? "/register" : "/login"} 
            className="font-medium transition-colors text-primary hover:text-primary-light"
          >
            {type === 'login' ? "Sign up" : "Sign in"}
          </a>
        </p>
      </div>
    </div>
  );
};

export default SocialAuth;