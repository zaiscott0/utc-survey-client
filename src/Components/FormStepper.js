import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

export default function FormStepper({ steps, currStep }) {
  const [newStep, setNewStep] = useState([]);
  const stepRef = useRef();

  const updateStep = (stepNumber, steps) => {
    return steps.map((step, index) => ({
      ...step,
      highlighted: index === stepNumber,
      selected: index <= stepNumber,
      completed: index < stepNumber,
    }));
  };

  useEffect(() => {
    const stepState = steps.map((step, index) => ({
      description: step,
      completed: false,
      highlighted: index === 0,
      selected: index === 0,
    }));
    stepRef.current = stepState;
    setNewStep(updateStep(currStep - 1, stepRef.current));
  }, [steps, currStep]);

  return (
    <motion.div className='FormContainer'>
      {newStep.map((step, index) => (
        <div key={index} className={`flex items-center ${index !== newStep.length - 1 ? 'w-full' : ''}`}>
          <div className='DisplayContainer'>
            <div className={`formNumber ${step.selected ? 'bg-pmmGrit text-white font-bold border border-blue-600' : ''}`}>
              {step.completed ? (
                <span className='text-white font-bold text-xl'>&#10003;</span>
              ) : (
                index + 1
              )}
            </div>
          </div>
          {index !== newStep.length - 1 && (
            <div className={`formLine ${step.completed ? 'border-pmmGrit' : 'border-gray-300'}`}></div>
          )}
        </div>
      ))}
    </motion.div>
  );
}
