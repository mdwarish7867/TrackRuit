import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import ProtectedRoute from '../components/ProtectedRoute';
import { FaSignOutAlt, FaUser, FaChartLine, FaBriefcase, FaBell } from 'react-icons/fa';

const Dashboard = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  // Refresh page if coming from auth flow
  useEffect(() => {
    if (location.state?.fromAuth) {
      window.location.reload();
    }
  }, [location.state]);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-darker">
        {/* Dashboard Header */}
        <header className="flex items-center justify-between p-4 glass-card">
          <div className="flex items-center">
            <div className="flex items-center justify-center w-10 h-10 mr-3 text-white rounded-full bg-gradient-to-r from-primary to-accent">
              <FaUser />
            </div>
            <h1 className="text-2xl font-bold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Dashboard
              </span>
            </h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="relative p-2 text-gray-400 hover:text-white">
              <FaBell className="text-xl" />
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <button 
              onClick={handleLogout}
              className="flex items-center px-4 py-2 text-white transition-colors bg-red-600 rounded-lg hover:bg-red-700"
            >
              <FaSignOutAlt className="mr-2" />
              Logout
            </button>
          </div>
        </header>

        {/* Main Content */}
        <main className="container p-4 mx-auto md:p-6">
          {/* Welcome Banner */}
          <div className="p-6 mb-6 glass-card">
            <h2 className="mb-2 text-2xl font-bold">
              Welcome back, <span className="text-primary">{user?.name}</span>!
            </h2>
            <p className="text-gray-300">
              Here's your job search dashboard. You have 3 pending applications and 2 upcoming interviews.
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 gap-6 mb-6 md:grid-cols-3">
            <div className="p-6 glass-card">
              <div className="flex items-center">
                <div className="p-3 mr-4 rounded-lg bg-primary/10">
                  <FaBriefcase className="text-2xl text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Total Applications</h3>
                  <p className="text-3xl font-bold">24</p>
                </div>
              </div>
            </div>
            
            <div className="p-6 glass-card">
              <div className="flex items-center">
                <div className="p-3 mr-4 rounded-lg bg-green-500/10">
                  <FaChartLine className="text-2xl text-green-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Interview Rate</h3>
                  <p className="text-3xl font-bold">78%</p>
                </div>
              </div>
            </div>
            
            <div className="p-6 glass-card">
              <div className="flex items-center">
                <div className="p-3 mr-4 rounded-lg bg-yellow-500/10">
                  <FaBell className="text-2xl text-yellow-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Upcoming Interviews</h3>
                  <p className="text-3xl font-bold">2</p>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Applications */}
          <div className="p-6 glass-card">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold">Recent Applications</h2>
              <button className="px-4 py-2 btn-primary">View All</button>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="py-3 text-left">Company</th>
                    <th className="py-3 text-left">Position</th>
                    <th className="py-3 text-left">Date</th>
                    <th className="py-3 text-left">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-800 hover:bg-gray-800/50">
                    <td className="py-4">Google</td>
                    <td className="py-4">Software Engineer</td>
                    <td className="py-4">Jun 15, 2023</td>
                    <td className="py-4">
                      <span className="px-2 py-1 text-sm text-yellow-500 rounded-full bg-yellow-500/20">
                        Interview
                      </span>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-800 hover:bg-gray-800/50">
                    <td className="py-4">Microsoft</td>
                    <td className="py-4">Product Manager</td>
                    <td className="py-4">Jun 12, 2023</td>
                    <td className="py-4">
                      <span className="px-2 py-1 text-sm text-green-500 rounded-full bg-green-500/20">
                        Offered
                      </span>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-800 hover:bg-gray-800/50">
                    <td className="py-4">Amazon</td>
                    <td className="py-4">Frontend Developer</td>
                    <td className="py-4">Jun 8, 2023</td>
                    <td className="py-4">
                      <span className="px-2 py-1 text-sm text-blue-500 rounded-full bg-blue-500/20">
                        Applied
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </ProtectedRoute>
  );
};

export default Dashboard;