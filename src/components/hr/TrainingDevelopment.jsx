
import React, { useState } from 'react';
import GlassContainer from '../ui/GlassContainer';
import GradientText from '../ui/GradientText';
import ModernButton from '../ui/ModernButton';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Calendar, CheckCircle, Clock, Award, BookOpen } from 'lucide-react';

const courseCategories = [
  { id: 'all', label: 'All Courses' },
  { id: 'tech', label: 'Technical Skills' },
  { id: 'leadership', label: 'Leadership' },
  { id: 'soft', label: 'Soft Skills' },
  { id: 'compliance', label: 'Compliance' },
];

const mockCourses = [
  { 
    id: 1, 
    title: 'Advanced Leadership Skills', 
    category: 'leadership', 
    duration: '8 hours', 
    enrolled: 42, 
    completed: 28,
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&auto=format&fit=crop',
  },
  { 
    id: 2, 
    title: 'React Development Masterclass', 
    category: 'tech', 
    duration: '12 hours', 
    enrolled: 76, 
    completed: 48,
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&auto=format&fit=crop',
  },
  { 
    id: 3, 
    title: 'Effective Communication', 
    category: 'soft', 
    duration: '6 hours', 
    enrolled: 65, 
    completed: 50,
    image: 'https://images.unsplash.com/photo-1573497491765-dccce02b29df?w=600&auto=format&fit=crop',
  },
  { 
    id: 4, 
    title: 'Data Privacy Compliance', 
    category: 'compliance', 
    duration: '4 hours', 
    enrolled: 120, 
    completed: 98,
    image: 'https://images.unsplash.com/photo-1509822929063-6b6cfc9b42f2?w=600&auto=format&fit=crop',
  },
  { 
    id: 5, 
    title: 'Project Management Fundamentals', 
    category: 'leadership', 
    duration: '10 hours', 
    enrolled: 58, 
    completed: 36,
    image: 'https://images.unsplash.com/photo-1572177812156-58036aae439c?w=600&auto=format&fit=crop',
  },
  { 
    id: 6, 
    title: 'Cloud Architecture', 
    category: 'tech', 
    duration: '15 hours', 
    enrolled: 45, 
    completed: 22,
    image: 'https://images.unsplash.com/photo-1560732488-7b5f5b8817f7?w=600&auto=format&fit=crop',
  },
];

const TrainingDevelopment = () => {
  const [activeTab, setActiveTab] = useState('all');

  const filteredCourses = activeTab === 'all' 
    ? mockCourses 
    : mockCourses.filter(course => course.category === activeTab);

  return (
    <GlassContainer className="p-6">
      <div className="flex justify-between items-center mb-6">
        <GradientText as="h2" className="text-2xl font-semibold" gradient="night-owl">
          Training & Development
        </GradientText>
        <ModernButton variant="glow" withGlow>My Learning Dashboard</ModernButton>
      </div>
      
      <Tabs defaultValue="all" className="mb-6">
        <TabsList className="grid grid-cols-2 md:grid-cols-5 gap-2 bg-primary-900/20">
          {courseCategories.map(category => (
            <TabsTrigger 
              key={category.id} 
              value={category.id}
              onClick={() => setActiveTab(category.id)}
              className="data-[state=active]:bg-primary-400 data-[state=active]:text-primary-950"
            >
              {category.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map(course => (
          <div 
            key={course.id} 
            className="bg-primary-900/20 rounded-lg overflow-hidden border border-primary-400/20 shadow-lg hover:shadow-primary-500/20 hover:-translate-y-1 transition-all"
          >
            <div 
              className="h-40 bg-cover bg-center"
              style={{ backgroundImage: `url(${course.image})` }}
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-white mb-2">{course.title}</h3>
              <div className="flex items-center text-xs text-primary-200 mb-3">
                <Clock size={14} className="mr-1" />
                <span>{course.duration}</span>
                <div className="mx-2 h-1 w-1 rounded-full bg-primary-400/50" />
                <BookOpen size={14} className="mr-1" />
                <span>{course.category}</span>
              </div>
              
              <div className="flex items-center justify-between text-xs text-primary-200 mb-3">
                <span>{course.completed} / {course.enrolled} completed</span>
                <span className="text-primary-300">{Math.round(course.completed / course.enrolled * 100)}% completion</span>
              </div>
              
              <div className="mt-4 flex justify-between">
                <ModernButton size="small" variant="outline">View Details</ModernButton>
                <ModernButton size="small" variant="neon" withGlow>Enroll</ModernButton>
              </div>
            </div>
          </div>
        ))}
      </div>
    </GlassContainer>
  );
};

export default TrainingDevelopment;
