import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, X, User, Upload, Home, Grid3X3, Settings, LogOut, Bell, Heart } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const location = useLocation();
  const { user, logout, isAuthenticated, isAdmin } = useAuth();

  const isActive = (path: string) => location.pathname === path;

  const handleLogout = () => {
    logout();
    setIsProfileOpen(false);
  };

  return (
    <nav className="bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
              <Grid3X3 className="w-7 h-7 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              StudyStack
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            <Link 
              to="/" 
              className={`flex items-center space-x-2 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
                isActive('/') 
                  ? 'text-blue-600 bg-blue-50 shadow-md' 
                  : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
              }`}
            >
              <Home className="w-5 h-5" />
              <span>Home</span>
            </Link>
            <Link 
              to="/projects" 
              className={`flex items-center space-x-2 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
                isActive('/projects') 
                  ? 'text-blue-600 bg-blue-50 shadow-md' 
                  : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
              }`}
            >
              <Search className="w-5 h-5" />
              <span>Browse Projects</span>
            </Link>
            {isAuthenticated && (
              <>
                <Link 
                  to="/upload" 
                  className={`flex items-center space-x-2 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
                    isActive('/upload') 
                      ? 'text-blue-600 bg-blue-50 shadow-md' 
                      : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  <Upload className="w-5 h-5" />
                  <span>Sell Project</span>
                </Link>
                <Link 
                  to="/dashboard" 
                  className={`flex items-center space-x-2 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
                    isActive('/dashboard') 
                      ? 'text-blue-600 bg-blue-50 shadow-md' 
                      : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  <User className="w-5 h-5" />
                  <span>Dashboard</span>
                </Link>
                {isAdmin && (
                  <Link 
                    to="/admin" 
                    className={`flex items-center space-x-2 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
                      isActive('/admin') 
                        ? 'text-blue-600 bg-blue-50 shadow-md' 
                        : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                    }`}
                  >
                    <Settings className="w-5 h-5" />
                    <span>Admin</span>
                  </Link>
                )}
              </>
            )}
          </div>

          {/* Auth Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <button className="relative p-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-200">
                  <Bell className="w-5 h-5" />
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
                </button>
                <button className="relative p-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-200">
                  <Heart className="w-5 h-5" />
                </button>
                <div className="relative">
                  <button
                    onClick={() => setIsProfileOpen(!isProfileOpen)}
                    className="flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-all duration-200 border border-gray-200 hover:border-gray-300"
                  >
                    <img 
                      src={user?.avatar} 
                      alt={user?.name}
                      className="w-8 h-8 rounded-full object-cover ring-2 ring-blue-100"
                    />
                    <div className="text-left">
                      <div className="font-semibold text-gray-900">{user?.name}</div>
                      <div className="text-xs text-blue-600 capitalize">{user?.role}</div>
                    </div>
                  </button>
                  
                  {isProfileOpen && (
                    <div className="absolute right-0 mt-2 w-64 bg-white rounded-2xl shadow-2xl py-2 z-50 border border-gray-100">
                      <div className="px-6 py-4 border-b border-gray-100">
                        <div className="flex items-center space-x-3">
                          <img 
                            src={user?.avatar} 
                            alt={user?.name}
                            className="w-12 h-12 rounded-full object-cover"
                          />
                          <div>
                            <div className="font-semibold text-gray-900">{user?.name}</div>
                            <div className="text-sm text-gray-500">{user?.email}</div>
                            <div className="text-xs text-blue-600 capitalize font-medium">{user?.role}</div>
                          </div>
                        </div>
                      </div>
                      <div className="py-2">
                        <Link
                          to="/dashboard"
                          className="flex items-center px-6 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                          onClick={() => setIsProfileOpen(false)}
                        >
                          <User className="w-4 h-4 mr-3" />
                          Dashboard
                        </Link>
                        {isAdmin && (
                          <Link
                            to="/admin"
                            className="flex items-center px-6 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                            onClick={() => setIsProfileOpen(false)}
                          >
                            <Settings className="w-4 h-4 mr-3" />
                            Admin Panel
                          </Link>
                        )}
                        <button
                          onClick={handleLogout}
                          className="flex items-center w-full px-6 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                        >
                          <LogOut className="w-4 h-4 mr-3" />
                          Logout
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <Link 
                  to="/login" 
                  className="px-6 py-3 text-sm font-semibold text-gray-700 hover:text-blue-600 transition-colors rounded-xl hover:bg-blue-50"
                >
                  Sign In
                </Link>
                <Link 
                  to="/signup" 
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-teal-600 text-white text-sm font-semibold rounded-xl hover:from-blue-700 hover:to-teal-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Join Now
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <button 
            className="lg:hidden p-3 rounded-xl text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-6 border-t border-gray-200 bg-white/95 backdrop-blur-lg">
            <div className="flex flex-col space-y-2">
              <Link 
                to="/" 
                className="flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-semibold text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                <Home className="w-5 h-5" />
                <span>Home</span>
              </Link>
              <Link 
                to="/projects" 
                className="flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-semibold text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                <Search className="w-5 h-5" />
                <span>Browse Projects</span>
              </Link>
              {isAuthenticated && (
                <>
                  <Link 
                    to="/upload" 
                    className="flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-semibold text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Upload className="w-5 h-5" />
                    <span>Sell Project</span>
                  </Link>
                  <Link 
                    to="/dashboard" 
                    className="flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-semibold text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <User className="w-5 h-5" />
                    <span>Dashboard</span>
                  </Link>
                  {isAdmin && (
                    <Link 
                      to="/admin" 
                      className="flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-semibold text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Settings className="w-5 h-5" />
                      <span>Admin</span>
                    </Link>
                  )}
                </>
              )}
              <div className="pt-4 border-t border-gray-200">
                {isAuthenticated ? (
                  <div className="space-y-2">
                    <div className="px-4 py-3 bg-gray-50 rounded-xl">
                      <div className="flex items-center space-x-3">
                        <img 
                          src={user?.avatar} 
                          alt={user?.name}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <div>
                          <div className="font-semibold text-gray-900">{user?.name}</div>
                          <div className="text-sm text-gray-500">{user?.email}</div>
                          <div className="text-xs text-blue-600 capitalize font-medium">{user?.role}</div>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        handleLogout();
                        setIsMenuOpen(false);
                      }}
                      className="flex items-center w-full px-4 py-3 text-sm font-semibold text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-200"
                    >
                      <LogOut className="w-5 h-5 mr-3" />
                      Logout
                    </button>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <Link 
                      to="/login" 
                      className="block px-4 py-3 text-sm font-semibold text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-200"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Sign In
                    </Link>
                    <Link 
                      to="/signup" 
                      className="block px-4 py-3 bg-gradient-to-r from-blue-600 to-teal-600 text-white text-sm font-semibold rounded-xl hover:from-blue-700 hover:to-teal-700 transition-all duration-200 text-center"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Join Now
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Overlay for profile dropdown */}
      {isProfileOpen && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setIsProfileOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;