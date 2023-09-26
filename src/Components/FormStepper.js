import React, {useEffect, useState, useRef} from 'react'
import {motion} from "framer-motion";



export default function FormStepper({ steps, currStep}) {
  const [newStep, setNewStep] = useState([])
  const stepRef = useRef();
  const updateStep = (stepNumber, steps) =>{
    const newSteps = [...steps];
    let count = 0;

    while (count < newStep.length){
      // current step
      if (count === stepNumber){
        newSteps[count] = {
          ...newSteps[count],
          highlighted: true,
          selected: true,
          completed: true
        };
        count++;
      }
      // step completed
      else if (count < stepNumber){
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: true,
          completed: true
        };
        count++;
      }
      // step pending
      else{
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: false,
          completed: false
        };
        count++;
      }
    }
    return newSteps;
  }
  useEffect(() => {

    const stepState = steps.map((step, index) => 
    Object.assign({},{
      description: step,
      completed: false,
      highlighted: index === 0 ? true : false,
      selected: index === 0 ? true : false
    })
    );
    stepRef.current = stepState;
    const current = updateStep(currStep - 1, stepRef.current);
    setNewStep(current)

  }, [steps, currStep]);

  const displaySteps = newStep.map((step,index) => {
    return (
      <div key={index} className=
      {
        index !== newStep.length - 1 ? 'w-full flex items-center' : "flex items-center"
      }>
      <div className='DisplayContainer'>
          <div className={`formNumber ${step.selected ? "bg-blue-600 text-white  font-bold border border-blue-600" : ""}`}>
            {/* DISPLAY FORM # */} {step.completed ? (
              <span className='text-white font-bold text-xl'>&#10003;</span>
            ):( index + 1)}
            </div>
  
          </div>
        <div className={`formLine ${step.completed ? "border-blue-600" : "border-gray-300"}`}>{/* DISPLAY LINE */}</div>
    </div>
    )
  });
  
  return (
    <motion.div className='FormContainer'>
      {displaySteps}

      
    </motion.div>
  )
}
