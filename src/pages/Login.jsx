
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '../components/ui/Toast';
import GradientText from '../components/ui/GradientText';
import ModernButton from '../components/ui/ModernButton';
import GlassContainer from '../components/ui/GlassContainer';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();
  const { showToast, ToastContainer } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Validate form
    if (!email || !password) {
      showToast('Please enter both email and password', 'error');
      setIsLoading(false);
      return;
    }

    // Simulate login (since this is a frontend-only app)
    setTimeout(() => {
      // In real app, we would validate credentials with backend
      const userData = {
        name: email.split('@')[0],
        email,
        role: 'Admin', // Changed from 'Developer' to 'Admin' to give access to all menu items
        avatar: null
      };
      
      localStorage.setItem('currentUser', JSON.stringify(userData));
      showToast('Login successful!', 'success');
      navigate('/dashboard');
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-400 via-primary-200 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary-300 rounded-full blur-3xl opacity-30 translate-y-1/2 -translate-x-1/2"></div>
        
        {/* Floating circles */}
        <div className="absolute top-1/4 left-1/4 w-12 h-12 rounded-full bg-gradient-to-br from-yellow-300 to-yellow-500 animate-float opacity-50"></div>
        <div className="absolute bottom-1/3 right-1/4 w-8 h-8 rounded-full bg-gradient-to-br from-pink-300 to-pink-500 animate-float opacity-50" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-2/3 left-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-blue-300 to-blue-500 animate-float opacity-40" style={{ animationDelay: '2.8s' }}></div>
      </div>
      
      <div className="max-w-md w-full space-y-8 relative z-10">
        <div className="text-center">
          <h2 className="text-center text-4xl font-bold mb-2">
            <GradientText gradient="blue-purple" weight="bold" className="font-montserrat">
              Welcome to Srinishtha Hub
            </GradientText>
          </h2>
          <p className="text-center text-lg text-gray-600 dark:text-gray-300 font-light">
            Employee Portal
          </p>
        </div>

        <GlassContainer 
          blur="xl"
          opacity="medium"
          rounded="xl"
          className="py-8 px-4 shadow-2xl sm:px-10 transition-all duration-300 hover:shadow-primary-200/50"
        >
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Email address
              </label>
              <div className="mt-1 relative">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none block w-full px-4 py-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500/50 dark:bg-gray-700/40 dark:text-white transition-all duration-300"
                  placeholder="you@srinishtha.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Password
              </label>
              <div className="mt-1 relative">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none block w-full px-4 py-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500/50 dark:bg-gray-700/40 dark:text-white transition-all duration-300"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-primary-600 hover:text-primary-500 dark:text-primary-400 transition-colors">
                  Forgot password?
                </a>
              </div>
            </div>

            <div>
              <ModernButton
                type="submit"
                disabled={isLoading}
                fullWidth
                withGlow
                withAnimation
                className="py-3"
              >
                {isLoading ? 'Signing in...' : 'Sign in'}
              </ModernButton>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300/30 dark:border-gray-600/30"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white/60 dark:bg-gray-800/60 text-gray-500 dark:text-gray-400">
                  Demo credentials
                </span>
              </div>
            </div>

            <div className="mt-6 text-center text-sm">
              <p className="text-gray-600 dark:text-gray-400">
                Use any email and password for demo purposes
              </p>
            </div>
          </div>
        </GlassContainer>
        
        {/* Brand ribbon */}
        <div className="text-center mt-8 text-sm text-gray-500 dark:text-gray-400">
          <p>© 2025 Srinishtha. All rights reserved.</p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
