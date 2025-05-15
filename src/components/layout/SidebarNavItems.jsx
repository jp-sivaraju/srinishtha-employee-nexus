
import React from 'react';
import { 
  Home,
  Users,
  Folder,
  HelpCircle, 
  Book,
  Image,
  DollarSign,
  Plane,
  BarChart2,
  Target,
  Calendar,
  Clock,
  UserPlus,
  Award,
  BookOpen
} from 'lucide-react';

// Define navigation items with role permissions
export const navigationItems = [
  { 
    name: 'Dashboard',
    path: '/dashboard',
    icon: Home,
    allowedRoles: ['Admin', 'HR', 'Manager', 'Developer', 'Intern', 'Finance', 'Assessor']
  },
  { 
    name: 'HR Zone',
    path: '/hr-zone',
    icon: Users, 
    allowedRoles: ['Admin', 'HR', 'Manager']
  },
  { 
    name: 'IT Helpdesk',
    path: '/it-helpdesk',
    icon: HelpCircle,
    allowedRoles: ['Admin', 'HR', 'Manager', 'Developer', 'Intern', 'Finance', 'Assessor'] 
  },
  { 
    name: 'Projects & Tasks',
    path: '/projects',
    icon: Folder,
    allowedRoles: ['Admin', 'Manager', 'Developer', 'Intern', 'Assessor'] 
  },
  { 
    name: 'Performance Tracker',
    path: '/performance',
    icon: BarChart2,
    allowedRoles: ['Admin', 'HR', 'Manager', 'Assessor'] 
  },
  {
    name: 'PMO / Execution',
    path: '/pmo',
    icon: Target,
    allowedRoles: ['Admin', 'Manager', 'Assessor']
  },
  { 
    name: 'Knowledge Base',
    path: '/knowledge-base',
    icon: Book,
    allowedRoles: ['Admin', 'HR', 'Manager', 'Developer', 'Intern', 'Finance', 'Assessor'] 
  },
  { 
    name: 'Brand Assets',
    path: '/brand-assets',
    icon: Image,
    allowedRoles: ['Admin', 'HR', 'Manager', 'Developer'] 
  },
  { 
    name: 'Finance Tools',
    path: '/finance',
    icon: DollarSign,
    allowedRoles: ['Admin', 'HR', 'Manager', 'Finance'] 
  },
  { 
    name: 'Regional & Travel',
    path: '/regional',
    icon: Plane,
    allowedRoles: ['Admin', 'HR', 'Manager', 'Developer', 'Intern', 'Finance', 'Assessor'] 
  }
];
