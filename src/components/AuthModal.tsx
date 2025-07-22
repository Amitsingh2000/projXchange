// components/AuthModal.tsx
import React, { useState } from 'react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import { X } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 relative animate-fadeIn">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition"
        >
          <X className="w-5 h-5" />
        </button>

        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          {isLogin ? 'Welcome Back 👋' : 'Create an Account'}
        </h2>

        {isLogin ? (
          <LoginForm
            isOpen={isOpen}
            onClose={onClose}
            onSwitchToSignup={() => setIsLogin(false)}
            onSuccess={onClose}
          />
        ) : (
          <SignupForm
            isOpen={isOpen}
            onClose={onClose}
            onSwitchToLogin={() => setIsLogin(true)}
            onSuccess={onClose}
          />
        )}
      </div>
    </div>
  );
};

export default AuthModal;
