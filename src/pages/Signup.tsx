import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, User, Eye, EyeOff, Grid3X3, Shield, CheckCircle, Star, Award } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'student'
  });
  
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match!');
      setIsLoading(false);
      return;
    }
    
    try {
      const success = await signup(formData.name, formData.email, formData.password, formData.role);
      if (success) {
        navigate('/');
      } else {
        setError('Email already exists. Please use a different email.');
      }
    } catch (err) {
      setError('Signup failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-teal-700 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-br from-green-400 to-blue-500 rounded-full opacity-20 animate-pulse delay-1000"></div>

      <div className="max-w-md w-full space-y-8 relative z-10">
        {/* Header */}
        <div className="text-center">
          <Link to="/" className="flex items-center justify-center space-x-3 mb-8">
            <div className="w-16 h-16 bg-white/10 backdrop-blur-lg rounded-2xl flex items-center justify-center border border-white/20">
              <Grid3X3 className="w-9 h-9 text-white" />
            </div>
            <span className="text-3xl font-bold text-white">StudyStack</span>
          </Link>
          <h2 className="text-4xl font-bold text-white mb-4">
            Join StudyStack
          </h2>
          <p className="text-xl text-blue-100">
            Create your account and start your journey
          </p>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20 text-center">
            <Award className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
            <p className="text-white text-sm font-semibold">Quality Projects</p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20 text-center">
            <Shield className="w-8 h-8 text-green-400 mx-auto mb-2" />
            <p className="text-white text-sm font-semibold">Secure Platform</p>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white/10 backdrop-blur-lg py-10 px-8 shadow-2xl rounded-2xl border border-white/20">
          {error && (
            <div className="mb-6 p-4 bg-red-500/20 border border-red-400/30 text-red-100 rounded-xl backdrop-blur-sm">
              {error}
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-bold text-white mb-3">
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-300 w-5 h-5" />
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full pl-12 pr-4 py-4 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent bg-white/10 backdrop-blur-sm text-white placeholder-gray-300"
                  placeholder="Enter your full name"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-bold text-white mb-3">
                Email address
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-300 w-5 h-5" />
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full pl-12 pr-4 py-4 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent bg-white/10 backdrop-blur-sm text-white placeholder-gray-300"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div>
              <label htmlFor="role" className="block text-sm font-bold text-white mb-3">
                I am a
              </label>
              <select
                id="role"
                name="role"
                value={formData.role}
                onChange={handleInputChange}
                className="w-full px-4 py-4 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent bg-white/10 backdrop-blur-sm text-white"
              >
                <option value="student" className="text-gray-900">Student (Buyer/Seller)</option>
                <option value="admin" className="text-gray-900">Administrator</option>
              </select>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-bold text-white mb-3">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-300 w-5 h-5" />
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full pl-12 pr-14 py-4 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent bg-white/10 backdrop-blur-sm text-white placeholder-gray-300"
                  placeholder="Create a password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-300 hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-bold text-white mb-3">
                Confirm Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-300 w-5 h-5" />
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  required
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className="w-full pl-12 pr-14 py-4 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent bg-white/10 backdrop-blur-sm text-white placeholder-gray-300"
                  placeholder="Confirm your password"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-300 hover:text-white transition-colors"
                >
                  {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div className="flex items-start">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                required
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mt-1"
              />
              <label htmlFor="terms" className="ml-3 block text-sm text-blue-100">
                I agree to the{' '}
                <a href="#" className="text-white hover:text-yellow-300 font-semibold transition-colors">
                  Terms of Service
                </a>{' '}
                and{' '}
                <a href="#" className="text-white hover:text-yellow-300 font-semibold transition-colors">
                  Privacy Policy
                </a>
              </label>
            </div>

            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-white text-blue-900 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-xl hover:shadow-2xl transform hover:scale-105"
              >
                {isLoading ? 'Creating Account...' : 'Create Account'}
              </button>
            </div>
          </form>
        </div>

        {/* Footer */}
        <div className="text-center">
          <p className="text-lg text-blue-100">
            Already have an account?{' '}
            <Link to="/login" className="text-white hover:text-yellow-300 font-bold transition-colors">
              Sign in
            </Link>
          </p>
        </div>

        {/* Trust Indicators */}
        <div className="flex items-center justify-center gap-8 text-sm text-blue-200">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4" />
            <span>Secure Signup</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4" />
            <span>Instant Access</span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4" />
            <span>Join 10k+ Students</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;