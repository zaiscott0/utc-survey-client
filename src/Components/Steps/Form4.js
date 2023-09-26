import React from 'react';
import { useContext } from 'react';
import { StepperContext } from '../../contexts/StepperContext';
import {motion, AnimatePresence} from "framer-motion";


export default function Form4() {
  const {userData, setUserData} = useContext(StepperContext);
  const handleChange = (e) => {
    const {name, value}  = e.target;
    setUserData({...userData, [name]:value});
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
        <motion.div variants={container} initial="hidden" animate="visible" className='form-input'>
          
          <motion.p variants={item}>
          When you look in your community, how do you think most people feel that are around you?...🤔
          </motion.p>
          <motion.input required variants={item} disabled onChange={handleChange} value={userData["future_feeling"] || ""} name="future_feeling" className=' form-select ' type='text'></motion.input>

          <motion.div variants={container} className='select-container justify-items-stretch'>

            <motion.button variants={item} whileHover={{scale:1.1}} whileTap={{scale:0.9}} onClick={clickChange} value="Worried" name="future_feeling" className='user-select col-span-3 row-span-2  bg-cover focus:bg-blue-200 ' > Worried 😟 </motion.button>
            <motion.button variants={item} whileHover={{scale:1.1}} whileTap={{scale:0.9}} onClick={clickChange} value="Uncertain" name="future_feeling" className='user-select col-span-3 row-span-2  bg-cover focus:bg-blue-200 ' > Uncertain 🫣 </motion.button>
            <motion.button variants={item} whileHover={{scale:1.1}} whileTap={{scale:0.9}} onClick={clickChange} value="Confident" name="future_feeling" className='user-select col-span-3 row-span-2  bg-cover focus:bg-blue-200 ' > Confident 😁 </motion.button>
            <motion.button variants={item} whileHover={{scale:1.1}} whileTap={{scale:0.9}} onClick={clickChange} value="Frustrated" name="future_feeling" className='user-select col-span-3 row-span-2  bg-cover focus:bg-blue-200 ' > Frustrated 😖 </motion.button>
             
          </motion.div>   
          
          
        </motion.div>

        

      </div>

    </div>
  )
}
