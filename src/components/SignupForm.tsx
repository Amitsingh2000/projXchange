import React, { useState } from 'react';
import { X } from 'lucide-react';

interface SignupModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSwitchToLogin: () => void;
  onSuccess?: () => void;
}

const SignupForm: React.FC<SignupModalProps> = ({
  isOpen,
  onClose,
  onSwitchToLogin,
  onSuccess,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ name?: string; email?: string; password?: string }>({});

  if (!isOpen) return null;

  const validate = () => {
    const errs: typeof errors = {};
    if (!name.trim()) errs.name = 'Name is required';
    if (!email.trim()) errs.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(email)) errs.email = 'Invalid email';
    if (!password.trim()) errs.password = 'Password is required';
    else if (password.length < 6) errs.password = 'Password must be at least 6 characters';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setTimeout(() => {
      console.log('Signed up!');
      if (onSuccess) onSuccess();
    }, 500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-gray-900/50 to-black/60 backdrop-blur-sm px-2">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl flex flex-col md:flex-row overflow-hidden relative animate-fadeIn">

        {/* Left Panel */}
        <div
          className="md:w-1/2 hidden md:flex flex-col justify-between p-6 text-white bg-cover bg-center relative"
          style={{
            backgroundImage: "url('https://www.shutterstock.com/image-photo/indoor-photo-young-marketing-girl-600nw-2584967495.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black/20 z-0" />
          <div className="z-10">
            <h2 className="text-3xl font-extrabold leading-snug mb-6">
              🚀 Welcome to the Future
            </h2>
            <ul className="space-y-2 text-lg font-medium">
              <li>✅ Learn by Doing</li>
              <li>✅ Collaborate with Peers</li>
              <li>✅ Unlock Your Career</li>
            </ul>
          </div>
          <img
            src="/branding-image.png"
            alt="Brand Visual"
            className="w-full max-h-48 object-contain mt-6 z-10"
          />
        </div>

        {/* Right Form Panel */}
        <div
          className="w-full md:w-1/2 p-8 relative border-t-4 border-transparent bg-white shadow-xl rounded-b-2xl md:rounded-b-none md:rounded-tr-2xl"
          style={{
            borderImage: 'linear-gradient(to right, #2563eb, #14b8a6) 1',
          }}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="mb-6 text-center">
            <h2 className="text-2xl font-bold text-gray-900">Create Your Account</h2>
            <p className="text-sm text-gray-600 mt-2">
              Already have an account?{' '}
              <button
                onClick={onSwitchToLogin}
                className="text-blue-600 font-medium hover:underline"
              >
                Sign In
              </button>
            </p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input
                type="text"
                className={`w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 ${
                  errors.name ? 'border-red-500 focus:ring-red-400' : 'focus:ring-blue-600 focus:border-teal-500'
                }`}
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="John Doe"
              />
              {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                className={`w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 ${
                  errors.email ? 'border-red-500 focus:ring-red-400' : 'focus:ring-blue-600 focus:border-teal-500'
                }`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
              />
              {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input
                type="password"
                className={`w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 ${
                  errors.password ? 'border-red-500 focus:ring-red-400' : 'focus:ring-blue-600 focus:border-teal-500'
                }`}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
              />
              {errors.password && <p className="text-sm text-red-500 mt-1">{errors.password}</p>}
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white font-semibold rounded-lg transition"
            >
              Sign Up
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-grow h-px bg-gradient-to-r from-blue-600 to-teal-600" />
            <span className="px-3 text-sm text-gray-500">or</span>
            <div className="flex-grow h-px bg-gradient-to-r from-blue-600 to-teal-600" />
          </div>

          {/* OAuth Buttons */}
          <div className="flex flex-col gap-3">
            <button className="flex items-center justify-center gap-2 border border-gray-300 rounded-lg py-2 hover:bg-gray-100 transition">
              <img src="/google-icon.svg" alt="Google" className="w-5 h-5" />
              <span>Continue with Google</span>
            </button>
            <button className="flex items-center justify-center gap-2 border border-gray-300 rounded-lg py-2 hover:bg-gray-100 transition">
              <span>📧</span> Continue with email
            </button>
          </div>

          <p className="text-xs text-gray-500 text-center mt-6">
            By signing up, you agree to our{' '}
            <a href="#" className="text-blue-500 underline">
              Terms
            </a>{' '}
            and{' '}
            <a href="#" className="text-blue-500 underline">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
