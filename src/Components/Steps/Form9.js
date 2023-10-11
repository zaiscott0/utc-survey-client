import React from 'react';
import { useContext } from 'react';
import { StepperContext } from '../../contexts/StepperContext';
import {motion, AnimatePresence} from "framer-motion";


export default function Form9() {
  const {userData, setUserData} = useContext(StepperContext);
  const handleChange = (e) => {
    const {name, value}  = e.target;
    setUserData({...userData, [name]:value});
    //console.log(userData)
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

        <motion.div variants={container} animate="visible" initial="hidden" className='form-input'>
          <motion.p variants={item}> Take a look at these common issues. Click on the issue that concerns you the MOST today.  </motion.p> <br/>

          <motion.input required variants={item} disabled onChange={handleChange} value={userData["stressor"] || ""} name="stressor" className='Goal-Focus form-select ' type='text'></motion.input>


          <motion.div variants={container} className='select-container justify-items-stretch'>

            <motion.button variants={item} whileHover={{scale:1.1}} whileTap={{scale:0.9}} onClick={clickChange} value="Significance/Purpose" name="stressor" className='user-select col-span-3 row-span-2  bg-cover focus:bg-blue-200 ' > Significance & Purpose </motion.button>
            <motion.button variants={item} whileHover={{scale:1.1}} whileTap={{scale:0.9}} onClick={clickChange} value="Personal/Finances" name="stressor" className='user-select col-span-3 row-span-2  bg-cover focus:bg-blue-200 '> Personal / Financial Loss </motion.button>
            <motion.button variants={item} whileHover={{scale:1.1}} whileTap={{scale:0.9}} onClick={clickChange} value="Divorce" name="stressor" className='user-select col-span-3 row-span-2   bg-cover focus:bg-blue-200 '> Divorce </motion.button>
            <motion.button variants={item} whileHover={{scale:1.1}} whileTap={{scale:0.9}} onClick={clickChange} value="Time-Management" name="stressor" className={` user-select col-span-3 row-span-2 focus:bg-blue-200 `}> Time Management </motion.button>
            <motion.button variants={item} whileHover={{scale:1.1}} whileTap={{scale:0.9}} onClick={clickChange} value="Physical-Challenge" name="stressor" className={` user-select col-span-3 row-span-2 focus:bg-blue-200 `}> Physical Challenges </motion.button>
            <motion.button variants={item} whileHover={{scale:1.1}} whileTap={{scale:0.9}} onClick={clickChange} value="Depression" name="stressor" className={` user-select col-span-3 row-span-2 focus:bg-blue-200 `}> Depression </motion.button>
            <motion.button variants={item} whileHover={{scale:1.1}} whileTap={{scale:0.9}} onClick={clickChange} value="Anger" name="stressor" className={` user-select col-span-3 row-span-2 focus:bg-blue-200 `}> Anger </motion.button>
            <motion.button variants={item} whileHover={{scale:1.1}} whileTap={{scale:0.9}} onClick={clickChange} value="Substance-Abuse" name="stressor" className={` user-select col-span-3 row-span-2 focus:bg-blue-200 `}> Substance Abuse </motion.button>

          </motion.div>   
          
        </motion.div>

        

      </div>

    </div>
  )
}
