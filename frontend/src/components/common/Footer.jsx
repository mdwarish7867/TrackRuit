import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="py-10 border-t border-[#1e293b]">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#6366f1] to-[#0ea5e9]">
              TrackRuit
            </h3>
            <p className="mt-2 text-gray-400">Your job search, simplified.</p>
          </div>
          <div className="flex space-x-6">
            <Link to="/about" className="text-gray-400 hover:text-[#6366f1] transition-colors">
              About
            </Link>
            <Link to="/features" className="text-gray-400 hover:text-[#6366f1] transition-colors">
              Features
            </Link>
            <Link to="/pricing" className="text-gray-400 hover:text-[#6366f1] transition-colors">
              Pricing
            </Link>
            <Link to="/blog" className="text-gray-400 hover:text-[#6366f1] transition-colors">
              Blog
            </Link>
            <Link to="/contact" className="text-gray-400 hover:text-[#6366f1] transition-colors">
              Contact
            </Link>
          </div>
        </div>
        <div className="mt-8 text-sm text-center text-gray-500">
          © {new Date().getFullYear()} TrackRuit. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;