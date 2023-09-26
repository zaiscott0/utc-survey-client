import React from 'react';
import {motion, AnimatePresence} from "framer-motion";


export default function StepperControl({handleClick, currentStep, steps}) {
  //console.log(currentStep);
  return (
    <motion.div className='StepperControlContainer '>
        <motion.button onClick={() => handleClick()} className={`btn-back ${currentStep === 1 ? "cursor-not-allowed opacity-0 " : ""}`}>
          <a href="#_" class="relative inline-flex items-center px-6 py-3 overflow-hidden text-lg font-medium text-blue-500 border-2 border-blue-500 rounded-full hover:text-white group hover:bg-gray-50">
            <span class="absolute left-0 block w-full h-0 transition-all bg-blue-500 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
            <span class="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
            </span>
            <span class="relative">Back</span>
          </a>
        </motion.button>
        <motion.button onClick={() => handleClick("next")} className='btn'> 
          <a href="#_" class="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-write transition duration-300 ease-out border-2 border-blue-500 rounded-full shadow-md group">
          <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-blue-500 group-hover:translate-x-0 ease">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </span>
          <span class="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">{currentStep === steps.length - 1  ? "Confirm" : "Next"} </span>
          <span class="relative invisible"> {currentStep === steps.length - 1  ? "Confirm" : "Next"} </span>
          </a>
          
        </motion.button>
    </motion.div>
  )
}

