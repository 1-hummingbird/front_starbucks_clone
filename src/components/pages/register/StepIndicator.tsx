import React from 'react';

interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

const StepIndicator = ({ currentStep, totalSteps }: StepIndicatorProps) => {
  return (
    <div className="mt-12 flex items-center justify-between px-10">
      {Array.from({ length: totalSteps }, (_, index) => {
        const stepNumber = index + 1;
        const isActive = stepNumber === currentStep;

        return (
          <React.Fragment key={stepNumber}>
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-full border-[3px] ${
                isActive ? 'border-[#006241]' : 'border-gray-400 bg-white'
              }`}
            >
              <span
                className={`text-lg ${isActive ? 'text-[#006241]' : 'text-gray-400'}`}
              >
                {stepNumber}
              </span>
            </div>
            {index < totalSteps - 1 && (
              <div className={'mx-3 h-1 flex-1 bg-gray-400'} />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default StepIndicator;
