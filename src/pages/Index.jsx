
import React from 'react';
import { Link } from 'react-router-dom';
import GlassContainer from '../components/ui/GlassContainer';
import GradientText from '../components/ui/GradientText';
import { HeroSection } from '../components/ui/HeroSection';
import ModernButton from '../components/ui/ModernButton';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-100 via-white to-primary-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700">
      <HeroSection />
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <GradientText gradient="blue-purple" weight="bold">Welcome to Srinishtha Hub</GradientText>
            </h2>
            <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
              Your comprehensive employee portal designed to streamline communication, 
              resource access, and organizational efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/login">
                <ModernButton size="large" withGlow withAnimation>
                  Get Started
                </ModernButton>
              </Link>
              <Link to="/dashboard">
                <ModernButton variant="outline" size="large">
                  Explore Features
                </ModernButton>
              </Link>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
              alt="Digital Workplace" 
              className="rounded-xl shadow-xl transform hover:-rotate-3 hover:scale-105 transition-all duration-300"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              title: "HR Resources",
              description: "Access all your HR tools and resources in one place.",
              image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
              gradient: "sunset"
            },
            {
              title: "Project Management",
              description: "Stay on top of deadlines and collaborate effectively.",
              image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
              gradient: "primary"
            },
            {
              title: "Knowledge Base",
              description: "Find answers and share insights with your team.",
              image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
              gradient: "blue-purple"
            }
          ].map((item, index) => (
            <GlassContainer 
              key={index} 
              className="transform hover:-translate-y-2 transition-all duration-300"
              opacity="light"
              blur="lg"
            >
              <div className="aspect-w-16 aspect-h-9 mb-4 overflow-hidden rounded-lg">
                <img 
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">
                <GradientText gradient={item.gradient} weight="bold">
                  {item.title}
                </GradientText>
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                {item.description}
              </p>
            </GlassContainer>
          ))}
        </div>
      </div>
      
      <div className="bg-gradient-to-r from-primary-500 to-primary-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to get started?</h2>
          <Link to="/login">
            <ModernButton size="large" variant="secondary" withGlow withAnimation>
              Sign In Now
            </ModernButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
