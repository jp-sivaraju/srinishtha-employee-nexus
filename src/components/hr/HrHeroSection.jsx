
import React from 'react';
import { Calendar, Users, Award, BookOpen, Sparkles, BarChart2 } from 'lucide-react';
import GradientText from '../ui/GradientText';
import GlassContainer from '../ui/GlassContainer';
import ModernButton from '../ui/ModernButton';

const HrHeroSection = () => {
  return (
    <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-primary-400/90 to-primary-600/90 shadow-xl p-6">
      {/* Abstract background elements */}
      <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-accent-aqua/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/4 -mb-16 w-72 h-72 bg-primary-300/20 rounded-full blur-3xl"></div>
      
      <div className="relative z-10">
        <div className="flex items-center mb-6">
          <div className="p-3 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 shadow-inner">
            <Sparkles className="h-8 w-8 text-white" />
          </div>
          <div className="ml-4">
            <GradientText as="h1" className="text-3xl md:text-4xl font-bold mb-1" gradient="blue-purple">
              HR Management Portal
            </GradientText>
            <p className="text-white text-lg max-w-2xl leading-relaxed">
              Streamlining HR operations and empowering team success through innovative tools and insights.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          <StatsCard 
            icon={<Users className="text-white h-6 w-6" />} 
            label="Total Employees" 
            value="248" 
            color="from-accent-blue/30 to-primary-400/30" 
          />
          
          <StatsCard 
            icon={<Calendar className="text-white h-6 w-6" />} 
            label="Leave Requests" 
            value="12" 
            color="from-primary-300/30 to-primary-500/30" 
          />
          
          <StatsCard 
            icon={<Award className="text-white h-6 w-6" />} 
            label="New Hires (Month)" 
            value="8" 
            color="from-accent-yellow/30 to-accent/30" 
          />
          
          <StatsCard 
            icon={<BarChart2 className="text-white h-6 w-6" />} 
            label="Training Hours" 
            value="156" 
            color="from-accent-aqua/30 to-primary-300/30" 
          />
        </div>

        <div className="flex mt-6 gap-4">
          <ModernButton variant="outline" className="text-white border-white/40 hover:bg-white/10" withShine>
            View Reports
          </ModernButton>
          <ModernButton variant="glow" className="text-white" withGlow>
            New Request
          </ModernButton>
        </div>
      </div>
    </div>
  );
};

// Stats card component for cleaner code
const StatsCard = ({ icon, label, value, color }) => (
  <GlassContainer 
    className={`bg-gradient-to-br ${color} p-4 flex items-center border-white/30`}
    opacity="light"
    blur="lg"
    shine={true}
  >
    <div className="bg-white/20 p-3 rounded-md mr-4 backdrop-blur-sm shadow-inner">
      {icon}
    </div>
    <div>
      <p className="text-sm text-white/80">{label}</p>
      <p className="text-2xl font-bold text-white">{value}</p>
    </div>
  </GlassContainer>
);

export default HrHeroSection;
