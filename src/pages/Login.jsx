
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '../components/ui/Toast';
import GradientText from '../components/ui/GradientText';
import ModernButton from '../components/ui/ModernButton';
import GlassContainer from '../components/ui/GlassContainer';
import { Sparkle } from 'lucide-react';

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
    <div className="min-h-screen flex items-center justify-center bg-dark bg-gradient-to-br from-dark to-dark-light text-white py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {/* Glowing circles */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-blue/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-60 h-60 bg-accent-aqua/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '3s' }}></div>
        
        {/* Animated particles/stars */}
        {[...Array(20)].map((_, i) => (
          <div 
            key={i} 
            className="absolute rounded-full bg-white animate-pulse-slow"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 5}s`,
              opacity: Math.random() * 0.7 + 0.3
            }}
          ></div>
        ))}

        {/* Code snippets */}
        <div className="absolute top-10 left-10 font-fira text-accent-blue opacity-30 text-sm">
          import &#123; authenticate &#125; from 'auth';
        </div>
        <div className="absolute bottom-20 right-1/4 font-fira text-accent-yellow opacity-30 text-sm">
          // Secure connection established
        </div>
        <div className="absolute top-1/3 right-10 font-fira text-primary opacity-30 text-sm">
          await login(credentials);
        </div>
      </div>
      
      <div className="max-w-md w-full space-y-8 relative z-10">
        <div className="text-center">
          <h2 className="text-center text-4xl font-bold mb-2">
            <GradientText gradient="rainbow" weight="bold" className="font-montserrat" animate={true}>
              Srinishtha Hub
            </GradientText>
          </h2>
          <div className="flex items-center justify-center gap-2 text-center">
            <Sparkle size={16} className="text-accent-yellow animate-pulse" />
            <p className="text-center text-lg text-gray-300 font-light font-fira">
              Employee Portal
            </p>
            <Sparkle size={16} className="text-accent-yellow animate-pulse" />
          </div>
        </div>

        <GlassContainer 
          blur="xl"
          opacity="medium"
          rounded="xl"
          shine={true}
          className="py-8 px-4 shadow-2xl sm:px-10 transition-all duration-300 border-white/10 bg-dark-lighter/70"
        >
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">
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
                  className="appearance-none block w-full px-4 py-3 bg-dark-light border border-gray-700/50 rounded-lg shadow-sm placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-primary-400/50 focus:border-primary-400/50 transition-all duration-300"
                  placeholder="you@srinishtha.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300">
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
                  className="appearance-none block w-full px-4 py-3 bg-dark-light border border-gray-700/50 rounded-lg shadow-sm placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-primary-400/50 focus:border-primary-400/50 transition-all duration-300"
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
                  className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-700 rounded bg-dark-light"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-300">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-primary-400 hover:text-primary-300 transition-colors shine-effect">
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
                withShine
                variant="glow"
                className="py-3"
              >
                {isLoading ? 'Signing in...' : 'Sign in'}
              </ModernButton>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-700/30"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-dark-lighter text-gray-400">
                  Demo credentials
                </span>
              </div>
            </div>

            <div className="mt-6 text-center text-sm">
              <p className="text-gray-400 font-fira">
                Use any email and password for demo purposes
              </p>
            </div>
          </div>
        </GlassContainer>
        
        {/* Brand ribbon with neon effect */}
        <div className="text-center mt-8 text-sm">
          <p className="text-gray-400 neon-text">© 2025 Srinishtha. All rights reserved.</p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
