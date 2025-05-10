
import React from 'react';
import { FileText, Users, User, Check, Calendar, Award, BookOpen, DollarSign } from 'lucide-react';
import GlassContainer from '../ui/GlassContainer';
import GradientText from '../ui/GradientText';

const HrSidebar = ({ activeTab, setActiveTab }) => {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: <FileText size={18} /> },
    { id: 'directory', label: 'Employee Directory', icon: <Users size={18} /> },
    { id: 'recruitment', label: 'Recruitment', icon: <User size={18} /> },
    { id: 'training', label: 'Training & Development', icon: <BookOpen size={18} /> },
    { id: 'compensation', label: 'Compensation', icon: <DollarSign size={18} /> },
    { id: 'performance', label: 'Performance', icon: <Award size={18} /> },
    { id: 'holidays', label: 'Holidays', icon: <Calendar size={18} /> },
    { id: 'attendance', label: 'Attendance', icon: <Check size={18} /> },
    { id: 'onboarding', label: 'Onboarding', icon: <User size={18} /> }
  ];

  return (
    <GlassContainer className="p-4">
      <GradientText as="h3" className="text-xl font-semibold mb-4" gradient="night-owl">
        HR Management
      </GradientText>
      <nav>
        <ul className="space-y-2">
          {navItems.map(item => (
            <li key={item.id}>
              <button
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center w-full px-3 py-2 rounded-md transition-all ${
                  activeTab === item.id
                    ? 'bg-primary-500/20 text-white shadow-sm shadow-primary-500/20'
                    : 'text-primary-300 hover:bg-primary-800/50 hover:text-primary-200'
                }`}
              >
                <span className="mr-3">{item.icon}</span>
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
