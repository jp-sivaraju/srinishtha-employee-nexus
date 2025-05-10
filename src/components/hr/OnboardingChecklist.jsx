
import React from 'react';
import GlassContainer from '../ui/GlassContainer';
import GradientText from '../ui/GradientText';
import { Check } from 'lucide-react';
import { Progress } from '../ui/progress';

const OnboardingChecklist = () => {
  const onBoardingSteps = [
    { id: 1, title: 'Complete HR Documentation', completed: true },
    { id: 2, title: 'IT Equipment Setup', completed: true },
    { id: 3, title: 'Team Introduction', completed: true },
    { id: 4, title: 'Training Sessions', completed: false },
    { id: 5, title: 'First Project Assignment', completed: false }
  ];

  // Calculate completion percentage
  const completedSteps = onBoardingSteps.filter(step => step.completed).length;
  const completionPercentage = (completedSteps / onBoardingSteps.length) * 100;

  return (
    <GlassContainer className="p-6">
      <GradientText as="h2" className="text-2xl font-semibold mb-6" gradient="night-owl">
        New Hire Onboarding Checklist
      </GradientText>
      <div className="space-y-6">
        <div className="relative">
          <div className="mb-2">
            <Progress value={completionPercentage} className="h-2" />
          </div>
          <div className="mt-2 text-right text-sm text-primary-300">
            {completedSteps} of {onBoardingSteps.length} completed ({completionPercentage}%)
          </div>
        </div>
        
        <ul className="space-y-4">
          {onBoardingSteps.map((step) => (
            <li key={step.id} className="flex items-start">
              <div className={`h-5 w-5 rounded-full mr-3 flex-shrink-0 mt-0.5 ${
                step.completed ? 'bg-primary-500' : 'bg-primary-800'
              }`}>
                {step.completed && (
                  <Check className="h-5 w-5 text-white" />
                )}
              </div>
              <div className="flex-1">
                <p className={`text-sm font-medium ${
                  step.completed 
                    ? 'text-primary-200 line-through' 
                    : 'text-white'
                }`}>
                  {step.title}
                </p>
                {!step.completed && (
                  <button className="mt-1 text-xs text-primary-400 hover:underline">
                    Mark as complete
                  </button>
                )}
              </div>
            </li>
          ))}
        </ul>
        
        <div className="pt-4 border-t border-primary-700">
          <h4 className="font-medium text-primary-200 mb-2">Notes</h4>
          <p className="text-sm text-primary-300">
            The training sessions are scheduled for next week. Your team manager will provide more details soon.
          </p>
        </div>
      </div>
    </GlassContainer>
  );
};

export default OnboardingChecklist;
