
import React from 'react';
import { Users, Award, BarChart2, Calendar } from 'lucide-react';
import GradientText from '../ui/GradientText';
import GlassContainer from '../ui/GlassContainer';
import ModernButton from '../ui/ModernButton';

const HrHeroSection = () => {
  return (
    <div className="relative overflow-hidden rounded-xl shadow-xl">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-700 to-primary-400"></div>
      
      {/* Background patterns */}
      <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-accent-aqua/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/4 -mb-16 w-72 h-72 bg-primary-300/20 rounded-full blur-3xl"></div>
      
      {/* Content */}
      <div className="relative z-10 p-6 md:p-8">
        <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8">
          <div className="p-4 bg-white/15 backdrop-blur-md rounded-2xl border border-white/20 shadow-inner">
            <Users className="h-10 w-10 text-white" />
          </div>
          
          <div>
            <GradientText as="h1" className="text-3xl md:text-4xl font-bold mb-2" gradient="blue-purple" weight="bold">
              HR Management Center
            </GradientText>
            <p className="text-white/90 text-lg max-w-2xl leading-relaxed">
              Streamlining human resource operations and empowering team success
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          <StatsCard 
            icon={<Users className="text-white h-6 w-6" />} 
            label="Total Employees" 
            value="248" 
            color="from-accent-blue/40 to-primary-400/40" 
          />
          
          <StatsCard 
            icon={<Calendar className="text-white h-6 w-6" />} 
            label="Leave Requests" 
            value="12" 
            color="from-primary-300/40 to-primary-500/40" 
          />
          
          <StatsCard 
            icon={<Award className="text-white h-6 w-6" />} 
            label="New Hires (Month)" 
            value="8" 
            color="from-accent-yellow/40 to-accent/40" 
          />
          
          <StatsCard 
            icon={<BarChart2 className="text-white h-6 w-6" />} 
            label="Training Hours" 
            value="156" 
            color="from-accent-aqua/40 to-primary-300/40" 
          />
        </div>

        <div className="flex flex-wrap gap-4 mt-8">
          <ModernButton variant="outline" className="text-white border-white/40 hover:bg-white/20" withShine>
            Generate Reports
          </ModernButton>
          <ModernButton variant="glow" className="text-white" withGlow>
            Create Request
          </ModernButton>
        </div>
      </div>
    </div>
  );
};

// Stats card component with improved design
const StatsCard = ({ icon, label, value, color }) => (
  <GlassContainer 
    className={`bg-gradient-to-br ${color} p-4 flex items-center border-white/30`}
    opacity="light"
    blur="lg"
    shine={true}
  >
    <div className="bg-white/20 p-3 rounded-lg mr-4 backdrop-blur-sm shadow-inner">
      {icon}
    </div>
    <div>
      <p className="text-sm text-white/80">{label}</p>
      <p className="text-2xl font-bold text-white">{value}</p>
    </div>
  </GlassContainer>
);

export default HrHeroSection;
