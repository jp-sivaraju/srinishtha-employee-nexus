
import React from 'react';
import { Calendar, Users, Award, BookOpen } from 'lucide-react';
import GradientText from '../ui/GradientText';

const HrHeroSection = () => {
  return (
    <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-primary-900/80 to-primary-800/80 backdrop-blur-sm border border-primary-700/50 p-6 mb-6">
      <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
      
      <div className="relative z-10">
        <div className="max-w-4xl">
          <GradientText as="h1" className="text-3xl md:text-4xl font-bold mb-2" gradient="blue-purple">
            HR Management Portal
          </GradientText>
          <p className="text-primary-100 text-lg mb-6 max-w-2xl">
            Comprehensive human resource management system designed to streamline HR operations, enhance employee experience, and drive organizational growth.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
          <div className="bg-primary-900/20 p-4 rounded-lg border border-primary-400/20 shadow-lg flex items-center backdrop-blur-sm">
            <div className="bg-primary-400/30 p-3 rounded-md mr-4">
              <Users className="text-primary-100 h-6 w-6" />
            </div>
            <div>
              <p className="text-sm text-primary-300">Total Employees</p>
              <p className="text-2xl font-bold text-white">248</p>
            </div>
          </div>
          
          <div className="bg-primary-900/20 p-4 rounded-lg border border-primary-400/20 shadow-lg flex items-center backdrop-blur-sm">
            <div className="bg-primary-400/30 p-3 rounded-md mr-4">
              <Calendar className="text-primary-100 h-6 w-6" />
            </div>
            <div>
              <p className="text-sm text-primary-300">Leave Requests</p>
              <p className="text-2xl font-bold text-white">12</p>
            </div>
          </div>
          
          <div className="bg-primary-900/20 p-4 rounded-lg border border-primary-400/20 shadow-lg flex items-center backdrop-blur-sm">
            <div className="bg-primary-400/30 p-3 rounded-md mr-4">
              <Award className="text-primary-100 h-6 w-6" />
            </div>
            <div>
              <p className="text-sm text-primary-300">New Hires (Month)</p>
              <p className="text-2xl font-bold text-white">8</p>
            </div>
          </div>
          
          <div className="bg-primary-900/20 p-4 rounded-lg border border-primary-400/20 shadow-lg flex items-center backdrop-blur-sm">
            <div className="bg-primary-400/30 p-3 rounded-md mr-4">
              <BookOpen className="text-primary-100 h-6 w-6" />
            </div>
            <div>
              <p className="text-sm text-primary-300">Training Hours</p>
              <p className="text-2xl font-bold text-white">156</p>
            </div>
          </div>
        </div>

        {/* Animated accent elements */}
        <div className="absolute top-0 right-0 -mt-8 -mr-8 w-40 h-40 bg-primary-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 -mb-16 w-60 h-60 bg-accent-blue/10 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
};

export default HrHeroSection;
