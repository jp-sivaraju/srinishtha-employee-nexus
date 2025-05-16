
import React from 'react';
import { FileText, Users, UserPlus, BookOpen, DollarSign, Award, Calendar, ClipboardCheck, User, Clock } from 'lucide-react';

const HrHeroSection = ({ activeTab, setActiveTab }) => {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: <FileText size={18} /> },
    { id: 'directory', label: 'Employee Directory', icon: <Users size={18} /> },
    { id: 'recruitment', label: 'Recruitment', icon: <UserPlus size={18} /> },
    { id: 'training', label: 'Training & Dev', icon: <BookOpen size={18} /> },
    { id: 'compensation', label: 'Compensation', icon: <DollarSign size={18} /> },
    { id: 'performance', label: 'Performance', icon: <Award size={18} /> },
    { id: 'leave', label: 'Nexus Leave', icon: <Clock size={18} /> }, // Add new leave management tab
    { id: 'holidays', label: 'Holidays', icon: <Calendar size={18} /> },
    { id: 'attendance', label: 'Attendance', icon: <ClipboardCheck size={18} /> },
    { id: 'onboarding', label: 'Onboarding', icon: <User size={18} /> }
  ];

  return (
    <div className="relative overflow-hidden rounded-xl shadow-xl mb-6">
      {/* Background with deep black */}
      <div className="absolute inset-0 bg-[#1C2526]"></div>
      
      {/* Background patterns */}
      <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>
      
      {/* Content */}
      <div className="relative px-6 py-8 md:px-8 md:py-10">
        <div className="mb-6 text-center">
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">HR Management</h1>
          <p className="text-white/80 max-w-2xl mx-auto">
            Manage employee information, recruitment, training, compensation, and more.
          </p>
        </div>

        {/* Navigation menu - horizontal tabs */}
        <div className="flex flex-wrap justify-center gap-2 mt-6">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`
                flex items-center px-4 py-2.5 rounded-lg transition-colors
                ${activeTab === item.id
                  ? 'bg-[#6B48FF] text-white font-medium shadow-lg shadow-[#6B48FF]/20'
                  : 'bg-white/10 hover:bg-[#A78BFA]/20 text-white/80 hover:text-white'}
              `}
            >
              <span className="mr-2">{item.icon}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HrHeroSection;
