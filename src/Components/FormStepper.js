import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import './FormStepper.css';

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

  const getDisplayedSteps = () => {
    const start = Math.max(0, currStep - 2); // Ensure start is not less than 0
    const end = Math.min(start + 3, steps.length); // Ensure end does not exceed steps length
    return newStep.slice(start, end);
  };

  const displayedSteps = getDisplayedSteps();

  return (
    <motion.div className='form-stepper-container'>
      {displayedSteps.map((step, index) => (
        <div key={index} className={`step-wrapper ${index !== displayedSteps.length - 1 ? 'flex-grow' : ''}`}>
          <div className={`step-number ${step.selected ? 'step-number-selected' : ''}`}>
            {step.completed ? (
              <span className='checkmark'>&#10003;</span>
            ) : (
              newStep.indexOf(step) + 1 // Display the correct step number
            )}
          </div>
          {index !== displayedSteps.length - 1 && (
            <div className={`step-line ${step.completed ? 'step-line-completed' : ''}`}></div>
          )}
        </div>
      ))}
    </motion.div>
  );
}
