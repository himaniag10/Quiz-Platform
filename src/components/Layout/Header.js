// src/components/Layout/Header.js
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();
  
  const isActive = (path) => {
    return location.pathname === path ? 'text-pink-400' : 'text-purple-200';
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md border-b border-purple-500/30">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Brain Blast
            </span>
          </Link>
          
          <nav className="flex space-x-6">
            <Link 
              to="/" 
              className={`${isActive('/')} hover:text-pink-400 transition-colors`}
            >
              Home
            </Link>
            <Link 
              to="/leaderboard" 
              className={`${isActive('/leaderboard')} hover:text-pink-400 transition-colors`}
            >
              Leaderboard
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;