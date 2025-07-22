import React, { useState } from 'react';
import { X } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSwitchToSignup: () => void;
  onSuccess: () => void;
}

const LoginForm: React.FC<LoginModalProps> = ({
  isOpen,
  onClose,
  onSwitchToSignup,
  onSuccess,
}) => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!email || !password) {
      setErrorMsg('Please enter both email and password.');
      return;
    }

    setLoading(true);
    const success = await login(email, password);
    setLoading(false);

    if (success) {
      onSuccess();
      navigate('/dashboard');
    } else {
      setErrorMsg('Invalid email or password.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-gray-900/50 to-black/60 backdrop-blur-sm px-2">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl flex flex-col md:flex-row overflow-hidden relative animate-fadeIn">

        {/* Left Panel with Image */}
        <div
          className="md:w-1/2 hidden md:flex flex-col justify-between p-6 text-white bg-cover bg-center relative"
          style={{
            backgroundImage:
              "url('https://www.shutterstock.com/image-photo/indoor-photo-young-marketing-girl-600nw-2584967495.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black/20 z-0" />
          <div className="z-10">
            <h2 className="text-3xl font-extrabold leading-snug mb-6">
              🚀 Success starts here
            </h2>
            <ul className="space-y-2 text-lg font-medium">
              <li>✅ Learn by Building</li>
              <li>✅ Access Real Projects</li>
              <li>✅ Connect with Talent</li>
            </ul>
          </div>
          <img
            src="/logo-light.png"
            alt="Logo"
            className="w-full max-h-48 object-contain mt-6 z-10"
          />
        </div>

        {/* Right Form with Gradient Border */}
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
            <h2 className="text-2xl font-bold text-gray-900">Sign in to your account</h2>
            <p className="text-sm text-gray-600 mt-2">
              Don’t have an account?{' '}
              <button
                onClick={onSwitchToSignup}
                className="text-blue-600 font-medium hover:underline"
              >
                Join here
              </button>
            </p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-teal-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-teal-500"
              />
            </div>

            {errorMsg && (
              <div className="text-red-500 text-sm">{errorMsg}</div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-2 bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white font-semibold rounded-lg transition flex items-center justify-center"
            >
              {loading ? (
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8H4z"
                  ></path>
                </svg>
              ) : (
                'Sign In'
              )}
            </button>
          </form>

          {/* Divider with Gradient */}
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
            By signing in, you agree to our{' '}
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

export default LoginForm;
