
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '../hooks/use-toast';


import { Input } from '../components/ui/input';
import { Checkbox } from '../components/ui/checkbox';
import { Button } from '../components/ui/button';
import { Sparkle, Leaf } from 'lucide-react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();
  const { showToast} = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Validate form
    if (!email || !password) {
      showToast('Please enter both email and password', 'error');
      setIsLoading(false);
      return;
    }

    // Simulate login
    setTimeout(() => {
      const userData = {
        name: email.split('@')[0],
        email,
        role: 'Admin',
        avatar: null
      };
      
      localStorage.setItem('currentUser', JSON.stringify(userData));
      // showToast('Login successful!', 'success');
      navigate('/hr-zone');
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Nature-inspired background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-800 to-purple-900 overflow-hidden">
        {/* Animated gradients that mimic aurora lights */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute -top-[40%] -left-[10%] w-[80%] h-[80%] rounded-full bg-gradient-to-r from-violet-600 to-purple-300 blur-3xl animate-float"></div>
          <div className="absolute -bottom-[30%] -right-[10%] w-[70%] h-[70%] rounded-full bg-gradient-to-r from-indigo-500 to-blue-300 blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-[20%] right-[5%] w-[40%] h-[40%] rounded-full bg-gradient-to-r from-fuchsia-500 to-pink-300 blur-3xl animate-float" style={{animationDelay: '3s'}}></div>
        </div>
        
        {/* Organic shapes mimicking leaves and natural elements */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <div 
              key={i} 
              className="absolute opacity-20"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                transform: `rotate(${Math.random() * 360}deg) scale(${0.5 + Math.random()})`,
              }}
            >
              <Leaf 
                color="white"
                size={Math.random() * 30 + 10}
                className="animate-float"
                style={{
                  animationDuration: `${5 + Math.random() * 10}s`,
                  animationDelay: `${Math.random() * 5}s`
                }}
              />
            </div>
          ))}
        </div>
        
        {/* Twinkling stars/particles */}
        {[...Array(50)].map((_, i) => (
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
      </div>
      
      <div className="w-full max-w-md mx-auto p-6 relative z-10">
        {/* Logo/Brand */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2 tracking-tight">
            <span className="bg-gradient-to-r from-violet-200 via-white to-violet-100 bg-clip-text text-transparent">
              Srinishtha Hub
            </span>
          </h1>
          <div className="flex items-center justify-center gap-2">
            <Sparkle size={16} className="text-violet-300" />
            <p className="text-violet-100 text-lg">Employee Portal</p>
            <Sparkle size={16} className="text-violet-300" />
          </div>
        </div>
        
        {/* Login Form */}
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl rounded-2xl overflow-hidden">
          {/* Background glow effect */}
          <div className="absolute inset-0 -z-10 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-indigo-600/20 blur-xl"></div>
          </div>
          
          <div className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-violet-100 mb-1">
                  Email address
                </label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@srinishtha.com"
                  className="w-full bg-white/10 border-white/20 placeholder-violet-300/50 text-white focus:border-violet-400 focus:ring-violet-400"
                />
              </div>
              
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-violet-100 mb-1">
                  Password
                </label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-white/10 border-white/20 placeholder-violet-300/50 text-white focus:border-violet-400 focus:ring-violet-400"
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Checkbox
                    id="remember-me"
                    checked={rememberMe}
                    onCheckedChange={setRememberMe}
                    className="h-4 w-4 text-violet-500 border-violet-300"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-violet-100">
                    Remember me
                  </label>
                </div>
                
                <a href="#" className="text-sm text-violet-300 hover:text-white transition-colors">
                  Forgot password?
                </a>
              </div>
              
              <div>
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-2 px-4 bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-300 shadow-lg hover:shadow-purple-500/30 border-0"
                >
                  {isLoading ? 'Signing in...' : 'Sign in'}
                </Button>
              </div>
            </form>
            
            {/* Divider */}
            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-white/10"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-purple-900/30 text-violet-200 backdrop-blur-sm">
                    Demo credentials
                  </span>
                </div>
              </div>
              
              <div className="mt-4 text-center">
                <p className="text-violet-200 text-sm">
                  Use any email and password for demo purposes
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-violet-300 text-sm">
            © 2025 Srinishtha. All rights reserved.
          </p>
        </div>
      </div>
      
    </div>
  );
};

export default Login;
