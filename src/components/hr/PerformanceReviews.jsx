
import React from 'react';
import GlassContainer from '../ui/GlassContainer';
import GradientText from '../ui/GradientText';
import Modernbutton from '../ui/Modernbutton';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../ui/collapsible';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '../ui/table';
import { ChevronDown, Star, Calendar } from 'lucide-react';

const mockReviews = [
  { 
    id: 1, 
    type: 'Annual Review', 
    date: '2025-03-15', 
    status: 'Completed', 
    overallRating: 4.5,
    manager: 'Jennifer Lopez',
    details: {
      strengths: [
        'Exceptional problem-solving skills',
        'Great team collaboration',
        'Consistent high-quality deliverables'
      ],
      improvements: [
        'Could delegate more effectively',
        'Consider taking on more leadership opportunities'
      ],
      goals: [
        'Complete Advanced Leadership program by Q3',
        'Mentor two junior team members',
        'Improve project delivery time by 15%'
      ]
    }
  },
  { 
    id: 2, 
    type: 'Mid-Year Check-in', 
    date: '2024-09-10', 
    status: 'Completed', 
    overallRating: 4.2,
    manager: 'Jennifer Lopez',
    details: {
      strengths: [
        'Excellent technical expertise',
        'Strong communication skills',
        'Initiative in problem-solving'
      ],
      improvements: [
        'Work on time management',
        'More proactive updates on project status'
      ],
      goals: [
        'Complete technical certification by year-end',
        'Improve documentation processes',
        'Take lead on at least one major feature'
      ]
    }
  },
  { 
    id: 3, 
    type: 'Quarterly Check-in', 
    date: '2025-06-15', 
    status: 'Scheduled', 
    overallRating: null,
    manager: 'Jennifer Lopez',
    details: null
  }
];

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  
  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, i) => (
        <div key={i} className="text-yellow-400">
          {i < fullStars ? (
            <Star size={16} fill="currentColor" />
          ) : i === fullStars && hasHalfStar ? (
            <Star size={16} fill="currentColor" className="opacity-60" />
          ) : (
            <Star size={16} className="opacity-30" />
          )}
        </div>
      ))}
      <span className="ml-2 text-white">{rating?.toFixed(1) || '-'}</span>
    </div>
  );
};

const PerformanceReviews = () => {
  return (
    <GlassContainer className="p-6">
      <div className="flex justify-between items-center mb-6">
        <GradientText as="h2" className="text-2xl font-semibold" gradient="night-owl">
          Performance Reviews
        </GradientText>
        <div className="flex gap-2">
          <Modernbutton variant="outline" iconLeft={<Calendar size={16} />}>
            View Calendar
          </Modernbutton>
          <Modernbutton variant="glow" withGlow>
            Request Feedback
          </Modernbutton>
        </div>
      </div>
      
      <div className="space-y-4">
        {mockReviews.map((review) => (
          <Collapsible key={review.id}>
            <div className="bg-primary-900/20 rounded-lg border border-primary-400/20 overflow-hidden">
              <CollapsibleTrigger className="flex items-center justify-between w-full p-4 text-left">
                <div className="flex items-center">
                  <div className={`w-3 h-3 rounded-full mr-3 ${
                    review.status === 'Completed' ? 'bg-green-400' : 'bg-amber-400'
                  }`} />
                  <div>
                    <h3 className="text-white font-medium">{review.type}</h3>
                    <p className="text-xs text-primary-300">
                      {new Date(review.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  {review.status === 'Completed' && (
                    <div className="mr-4">
                      <StarRating rating={review.overallRating} />
                    </div>
                  )}
                  <span className={`px-2 py-1 text-xs rounded-full mr-4 ${
                    review.status === 'Completed' 
                      ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' 
                      : 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300'
                  }`}>
                    {review.status}
                  </span>
                  <ChevronDown size={20} className="text-primary-400" />
                </div>
              </CollapsibleTrigger>
              
              <CollapsibleContent>
                {review.details ? (
                  <div className="p-4 bg-primary-950/30 border-t border-primary-700/30">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-primary-200 font-medium mb-2">Strengths</h4>
                        <ul className="list-disc list-inside space-y-1 text-sm text-white">
                          {review.details.strengths.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                        
                        <h4 className="text-primary-200 font-medium mt-4 mb-2">Areas for Improvement</h4>
                        <ul className="list-disc list-inside space-y-1 text-sm text-white">
                          {review.details.improvements.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-primary-200 font-medium mb-2">Goals for Next Period</h4>
                        <ul className="list-disc list-inside space-y-1 text-sm text-white">
                          {review.details.goals.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                        
                        <div className="mt-4">
                          <h4 className="text-primary-200 font-medium mb-2">Manager</h4>
                          <p className="text-sm text-white">{review.manager}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6 flex justify-end">
                      <Modernbutton variant="outline" size="small" className="mr-2">
                        Download PDF
                      </Modernbutton>
                      <Modernbutton variant="glow" size="small" withGlow>
                        Discuss with Manager
                      </Modernbutton>
                    </div>
                  </div>
                ) : (
                  <div className="p-4 bg-primary-950/30 border-t border-primary-700/30 text-center">
                    <p className="text-primary-300">This review is scheduled but not yet completed.</p>
                    <Modernbutton variant="outline" size="small" className="mt-3">
                      Add Self-Assessment
                    </Modernbutton>
                  </div>
                )}
              </CollapsibleContent>
            </div>
          </Collapsible>
        ))}
      </div>
    </GlassContainer>
  );
};

export default PerformanceReviews;
