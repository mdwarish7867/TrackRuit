import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="flex items-center justify-between p-4 glass-card">
      <Link to="/" className="text-xl font-bold">
        TrackRuit
      </Link>
      
      <div className="flex items-center gap-4">
        {user ? (
          <>
            <span className="text-gray-300">Hi, {user.name}</span>
            <Link to="/dashboard" className="btn-secondary">
              Dashboard
            </Link>
            <button onClick={logout} className="btn-primary">
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="btn-secondary">
              Login
            </Link>
            <Link to="/register" className="btn-primary">
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;