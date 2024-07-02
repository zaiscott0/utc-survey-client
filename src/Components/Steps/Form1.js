import React, { useState, useEffect } from 'react';
import { useContext } from 'react';
import { StepperContext } from '../../contexts/StepperContext';
import {motion, AnimatePresence} from "framer-motion";

export default function Form1() {
  const {userData, setUserData} = useContext(StepperContext);
  const handleChange = (e) => {
    const {name, value}  = e.target;
    setUserData({...userData, [name]:value});
    //console.log(userData);
  }

  const clickChange = (e) => {
    const {name, value} = e.target;
    //console.log(name, value)
    setUserData({...userData,[name]:value})
  }

  // FRAMER MOTION
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }
    
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }

  }

  return (
    <div className='form-c'>
      <div className='form-box'>
        <motion.div className='form-input' animate="visible" initial="hidden" variants={container}>
          
          <span>
            <motion.p variants={item}>
              My name is... 
              <motion.input required variants={item} onChange={handleChange} value={userData["first_name"] || ""} name='first_name' placeholder='John' className=' p-1 px-2 form-select appearance-none outline-none w-1/4 text-gray-800' type="text" />
              <br />
              <br />
            </motion.p>
          </span>
          <span>
        
            <motion.p variants={item}>
             and the issue that matters the most in my life right now is my...
             <br/>
             <br/>
              
                
          
            </motion.p>

            
            
          </span>
          <br />
          <motion.div variants={container} className='select-container justify-items-stretch'>

            <motion.button variants={item} whileHover={{scale:1.1}} whileTap={{scale:0.9}} onClick={clickChange} value="Personal Goals" name="goal_focus" className='user-select col-span-3 row-span-2  bg-cover focus:bg-blue-200 ' > Personal Goals </motion.button>
            <motion.button variants={item} whileHover={{scale:1.1}} whileTap={{scale:0.9}} onClick={clickChange} value="Relationship Goals" name="goal_focus" className='user-select col-span-3 row-span-2  bg-cover focus:bg-blue-200 '> Relationships </motion.button>
            <motion.button variants={item} whileHover={{scale:1.1}} whileTap={{scale:0.9}} onClick={clickChange} value="Academic Goals" name="goal_focus" className='user-select col-span-3 row-span-2   bg-cover focus:bg-blue-200 '> Academic Goals </motion.button>
            <motion.button variants={item} whileHover={{scale:1.1}} whileTap={{scale:0.9}} onClick={clickChange} value="Athletic Goals" name="goal_focus" className={` user-select col-span-3 row-span-2 focus:bg-blue-200 `}> Athletic Goals </motion.button>
            <motion.button whileHover={{scale:1.1}} whileTap={{scale:0.9}} onClick={clickChange} value="Career Goals" name="goal_focus" className={` col-start-2 user-select col-span-4 row-span-2 focus:bg-blue-200 `}> Career Goals </motion.button>


          </motion.div>   

        </motion.div>

        

      </div>

    </div>
  )
}
