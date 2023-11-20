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
          <motion.p variants={item}> Look at these statements. Click on the statement that's <b>MOST</b> important to <b>YOU</b> now.  </motion.p> <br/>

          <motion.input required variants={item} disabled onChange={handleChange} value={userData["statement"] || ""} name="statement" className='Goal-Focus form-select ' type='text'></motion.input>


          <motion.div variants={container} className='select-container justify-items-stretch'>

            <motion.button variants={item} whileHover={{scale:1.1}} whileTap={{scale:0.9}} onClick={clickChange} value="Thoughts/Feelings" name="statement" className='user-select col-span-3 row-span-2  bg-cover focus:bg-blue-200 ' > I need help with my thoughts and feelings. </motion.button>
            <motion.button variants={item} whileHover={{scale:1.1}} whileTap={{scale:0.9}} onClick={clickChange} value="Fires" name="statement" className='user-select col-span-3 row-span-2  bg-cover focus:bg-blue-200 '> I need help with the fires in my life.  </motion.button>
            <motion.button variants={item} whileHover={{scale:1.1}} whileTap={{scale:0.9}} onClick={clickChange} value="Control" name="statement" className='user-select col-span-3 row-span-2   bg-cover focus:bg-blue-200 '> I need to take control of my story. </motion.button>
            <motion.button variants={item} whileHover={{scale:1.1}} whileTap={{scale:0.9}} onClick={clickChange} value="Focus" name="statement" className={` user-select col-span-3 row-span-2 focus:bg-blue-200 `}> I need to focus on my goals. </motion.button>
            <motion.button variants={item} whileHover={{scale:1.1}} whileTap={{scale:0.9}} onClick={clickChange} value="Help-Me" name="statement" className={` user-select col-span-3 row-span-2 focus:bg-blue-200 `}> I want people to help me.  </motion.button>
            <motion.button variants={item} whileHover={{scale:1.1}} whileTap={{scale:0.9}} onClick={clickChange} value="Action-Plan" name="statement" className={` user-select col-span-3 row-span-2 focus:bg-blue-200 `}> I need an action plan.  </motion.button>
            <motion.button variants={item} whileHover={{scale:1.1}} whileTap={{scale:0.9}} onClick={clickChange} value="Adjusting" name="statement" className={` user-select col-span-3 row-span-2 focus:bg-blue-200 `}> I struggle with adjusting my plans.  </motion.button>
            <motion.button variants={item} whileHover={{scale:1.1}} whileTap={{scale:0.9}} onClick={clickChange} value="Help-Others" name="statement" className={` user-select col-span-3 row-span-2 focus:bg-blue-200 `}> I want to learn to help others.  </motion.button>

          </motion.div>   
          
        </motion.div>

        

      </div>

    </div>
  )
}
