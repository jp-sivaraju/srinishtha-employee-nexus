
import React from 'react';
import { Link } from 'react-router-dom';
import GlassContainer from '../components/ui/GlassContainer';
import GradientText from '../components/ui/GradientText';
import ModernButton from '../components/ui/ModernButton';

const Index = () => {
  return (
    <div className="min-h-screen bg-dark bg-gradient-to-br from-dark to-dark-light text-white">
      {/* Hero section with code-like elements */}
      <div className="relative overflow-hidden pt-16 pb-20">
        {/* Abstract code-like background elements */}
        <div className="absolute inset-0 opacity-20 z-0">
          <div className="absolute top-10 left-10 font-fira text-accent-blue opacity-50 text-sm">
            import &#123; Srinishtha &#125; from 'employee-portal';
          </div>
          <div className="absolute top-20 left-20 font-fira text-accent-aqua opacity-50 text-sm">
            const App = () =&gt; &#123;
          </div>
          <div className="absolute top-[120px] left-40 font-fira text-primary opacity-50 text-sm">
            return &lt;Portal /&gt;
          </div>
          <div className="absolute top-[150px] left-20 font-fira text-accent-blue opacity-50 text-sm">
            &#125;;
          </div>
          <div className="absolute bottom-20 right-20 font-fira text-accent-yellow opacity-50 text-sm">
            // Employee experience redefined
          </div>
        </div>

        {/* Main hero content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <GradientText gradient="blue-purple" weight="bold" className="font-montserrat">
                Srinishtha Hub
              </GradientText>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Your comprehensive employee portal designed with a developer's precision
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/login">
                <ModernButton 
                  size="large" 
                  withGlow 
                  withAnimation
                  className="bg-gradient-primary shadow-glow-primary"
                >
                  Access Portal
                </ModernButton>
              </Link>
              <Link to="/dashboard">
                <ModernButton 
                  variant="outline" 
                  size="large"
                  className="border-primary-400 text-primary-400 hover:bg-primary-400/10"
                >
                  View Features
                </ModernButton>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Feature section */}
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              title: "HR Resources",
              description: "Access all your HR tools and resources in one place.",
              icon: "// <HR />",
              iconColor: "text-accent-blue",
              gradient: "blue-purple"
            },
            {
              title: "Project Management",
              description: "Stay on top of deadlines and collaborate effectively.",
              icon: "// <Project />",
              iconColor: "text-accent-aqua",
              gradient: "primary"
            },
            {
              title: "Knowledge Base",
              description: "Find answers and share insights with your team.",
              icon: "// <Knowledge />",
              iconColor: "text-accent-yellow",
              gradient: "sunset"
            }
          ].map((item, index) => (
            <GlassContainer 
              key={index} 
              className="transform hover:-translate-y-2 transition-all duration-300"
              opacity="light"
              blur="lg"
              border={true}
              rounded="lg"
              className="border-white/5 backdrop-blur-xl bg-dark-lighter/50"
            >
              <div className="font-fira text-sm mb-4 opacity-70 font-mono">
                <span className={item.iconColor}>{item.icon}</span>
              </div>
              <h3 className="text-xl font-bold mb-2">
                <GradientText gradient={item.gradient} weight="bold">
                  {item.title}
                </GradientText>
              </h3>
              <p className="text-gray-300">
                {item.description}
              </p>
            </GlassContainer>
          ))}
        </div>

        {/* Code-inspired section */}
        <div className="my-20">
          <div className="max-w-3xl mx-auto">
            <GlassContainer
              opacity="medium"
              blur="xl"
              className="border-white/10 bg-dark-lighter/70 p-6"
            >
              <div className="font-fira text-sm text-left">
                <div className="flex items-center gap-2 mb-4 text-neutral">
                  <span className="h-3 w-3 rounded-full bg-accent inline-block"></span>
                  <span className="h-3 w-3 rounded-full bg-accent-yellow inline-block"></span>
                  <span className="h-3 w-3 rounded-full bg-accent-aqua inline-block"></span>
                  <span className="text-gray-400">employee-portal.js</span>
                </div>
                
                <p><span className="text-accent-blue">import</span> <span className="text-accent-aqua">&#123; useState &#125;</span> <span className="text-accent-blue">from</span> <span className="text-primary">'react'</span>;</p>
                <p><span className="text-accent-blue">import</span> <span className="text-accent-aqua">Portal</span> <span className="text-accent-blue">from</span> <span className="text-primary">'./components/Portal'</span>;</p>
                <p></p>
                <p><span className="text-accent-blue">const</span> <span className="text-accent-yellow">EmployeePortal</span> <span className="text-white">=</span> <span className="text-accent-blue">() =&gt;</span> <span className="text-white">&#123;</span></p>
                <p className="ml-4"><span className="text-accent-blue">const</span> <span className="text-white">[</span><span className="text-accent-aqua">user</span><span className="text-white">, </span><span className="text-accent-yellow">setUser</span><span className="text-white">]</span> <span className="text-white">=</span> <span className="text-accent-blue">useState</span><span className="text-white">(</span><span className="text-accent-blue">null</span><span className="text-white">);</span></p>
                <p className="ml-4"><span className="text-accent-blue">return</span> <span className="text-white">(</span></p>
                <p className="ml-8"><span className="text-accent-blue">&lt;</span><span className="text-accent-yellow">div</span> <span className="text-accent-aqua">className</span><span className="text-white">=</span><span className="text-primary">"portal"</span><span className="text-accent-blue">&gt;</span></p>
                <p className="ml-12"><span className="text-accent-blue">&lt;</span><span className="text-accent-yellow">Portal</span> <span className="text-accent-aqua">user</span><span className="text-white">=</span><span className="text-white">&#123;</span><span className="text-accent-aqua">user</span><span className="text-white">&#125;</span> <span className="text-accent-aqua">setUser</span><span className="text-white">=</span><span className="text-white">&#123;</span><span className="text-accent-yellow">setUser</span><span className="text-white">&#125;</span> <span className="text-accent-blue">/&gt;</span></p>
                <p className="ml-8"><span className="text-accent-blue">&lt;/</span><span className="text-accent-yellow">div</span><span className="text-accent-blue">&gt;</span></p>
                <p><span className="text-white">&#125;;</span></p>
                <p></p>
                <p><span className="text-accent-blue">export</span> <span className="text-accent-blue">default</span> <span className="text-accent-yellow">EmployeePortal</span>;</p>
              </div>
            </GlassContainer>
          </div>
        </div>
      </div>
      
      <div className="bg-gradient-to-r from-dark-lighter to-dark-light py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to access your portal?</h2>
          <Link to="/login">
            <ModernButton 
              size="large" 
              className="bg-gradient-primary shadow-glow-primary"
              withGlow 
              withAnimation
            >
              Sign In Now
            </ModernButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
