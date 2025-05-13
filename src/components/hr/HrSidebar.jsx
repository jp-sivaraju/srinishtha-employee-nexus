
import React from 'react';
import { FileText, Users, UserPlus, BookOpen, DollarSign, Award, Calendar, ClipboardCheck, User } from 'lucide-react';
import GlassContainer from '../ui/GlassContainer';
import GradientText from '../ui/GradientText';

const HrSidebar = ({ activeTab, setActiveTab }) => {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: <FileText size={18} /> },
    { id: 'directory', label: 'Employee Directory', icon: <Users size={18} /> },
    { id: 'recruitment', label: 'Recruitment', icon: <UserPlus size={18} /> },
    { id: 'training', label: 'Training & Dev', icon: <BookOpen size={18} /> },
    { id: 'compensation', label: 'Compensation', icon: <DollarSign size={18} /> },
    { id: 'performance', label: 'Performance', icon: <Award size={18} /> },
    { id: 'holidays', label: 'Holidays', icon: <Calendar size={18} /> },
    { id: 'attendance', label: 'Attendance', icon: <ClipboardCheck size={18} /> },
    { id: 'onboarding', label: 'Onboarding', icon: <User size={18} /> }
  ];

  return (
    <GlassContainer 
      className="p-4 shadow-lg rounded-xl border border-white/20" 
      blur="md" 
      opacity="medium"
    >
      <GradientText as="h3" className="text-xl font-semibold mb-4" gradient="blue-purple">
        HR Management
      </GradientText>
      <nav>
        <ul className="space-y-1">
          {navItems.map(item => (
            <li key={item.id}>
              <button
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center w-full px-3 py-2.5 rounded-lg transition-all ${
                  activeTab === item.id
                    ? 'bg-primary-500/40 text-white font-medium shadow-md'
                    : 'text-white hover:bg-primary-500/20 hover:text-white'
                }`}
              >
                <span className={`mr-3 ${activeTab === item.id ? 'text-white' : 'text-primary-200'}`}>
                  {item.icon}
                </span>
                <span>{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </GlassContainer>
  );
};

export default HrSidebar;
