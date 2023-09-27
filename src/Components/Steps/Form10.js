import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { StepperContext } from '../../contexts/StepperContext';
import {motion, AnimatePresence} from "framer-motion";


export default function Form10() {
  const {userData, setUserData} = useContext(StepperContext);
  //const [btnSelect, setBtnSelect] = useState(" bg-blue-500");
  //setUserData({...userData, ["xp"]:[]});
  //userData["xp"] = [];


  
  let btnClassName = "user-select-list col-span-3 row-span-2 bg-cover";
  const clickChange = (e) => {
    const {name, value} = e.target;
    
    const selected = userData[name];

    
    if (name in userData && selected.includes(value)){
        //console.log("ALREADY IN LIST");
        console.log("DELETING");
        const valIndex = selected.indexOf(value);
        selected.splice(valIndex, 1);
        setUserData({...userData, [name]:selected})
        //setBtnSelect(" bg-blue-500");        

    }

    else if (name in userData && selected.length > 0){
        console.log("Updating!");
        selected.push(value);
        setUserData({...userData, [name]:selected})
        //setBtnSelect(" bg-blue-200");

    }
    else{
        console.log("ADDING");
        selected.push(value);
        setUserData({...userData, [name]:selected});
        //setBtnSelect(" bg-blue-200");
    }

    console.log(userData);
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

  //console.log(userData)

  return (
    <div className='form-c'>
      <div className='form-box'>

        <motion.div variants={container} animate="visible" initial="hidden" className='form-input'>
          <motion.p variants={item}> Take a look at these common issues. Click on EVERY issue you’ve experienced in your lifetime. 
 </motion.p> <br/>

          {/*<motion.input required variants={item} disabled onChange={handleChange} value={userData["xp"] || ""} name="xp" className='Goal-Focus form-select ' type='text'></motion.input>*/}
          



          <motion.div variants={container} className='select-container justify-items-stretch'>

            <motion.button variants={item} whileHover={{scale:1.1}} whileTap={{scale:0.9}} onClick={clickChange} value="Significance/Purpose" name="xp" className={`${userData["xp"].includes("Significance/Purpose") ?  btnClassName + " bg-blue-200" : btnClassName + " bg-blue-500"}`} > Significance & Purpose </motion.button>
            <motion.button variants={item} whileHover={{scale:1.1}} whileTap={{scale:0.9}} onClick={clickChange} value="Personal/Finances" name="xp" className={`${userData["xp"].includes("Personal/Finances") ?  btnClassName + " bg-blue-200" : btnClassName + " bg-blue-500"}`}> Personal/Financial Loss </motion.button>
            <motion.button variants={item} whileHover={{scale:1.1}} whileTap={{scale:0.9}} onClick={clickChange} value="Divorce" name="xp" className={`${userData["xp"].includes("Divorce") ?  btnClassName + " bg-blue-200" : btnClassName + " bg-blue-500"}`}> Divorce </motion.button>
            <motion.button variants={item} whileHover={{scale:1.1}} whileTap={{scale:0.9}} onClick={clickChange} value="Time-Management" name="xp" className={`${userData["xp"].includes("Time-Management") ?  btnClassName + " bg-blue-200" : btnClassName + " bg-blue-500"}`}> Time Management </motion.button>
            <motion.button variants={item} whileHover={{scale:1.1}} whileTap={{scale:0.9}} onClick={clickChange} value="Physical-Challenge" name="xp" className={`${userData["xp"].includes("Physical-Challenge") ?  btnClassName + " bg-blue-200" : btnClassName + " bg-blue-500"}`}> Physical Challenges </motion.button>
            <motion.button variants={item} whileHover={{scale:1.1}} whileTap={{scale:0.9}} onClick={clickChange} value="Depression" name="xp" className={`${userData["xp"].includes("Depression") ?  btnClassName + " bg-blue-200" : btnClassName + " bg-blue-500"}`}> Depression </motion.button>
            <motion.button variants={item} whileHover={{scale:1.1}} whileTap={{scale:0.9}} onClick={clickChange} value="Bitterness" name="xp" className={`${userData["xp"].includes("Bitterness") ?  btnClassName + " bg-blue-200" : btnClassName + " bg-blue-500"}`}> Anger </motion.button>
            <motion.button variants={item} whileHover={{scale:1.1}} whileTap={{scale:0.9}} onClick={clickChange} value="Substance-Abuse" name="xp" className={`${userData["xp"].includes("Substance-Abuse") ?  btnClassName + " bg-blue-200" : btnClassName + " bg-blue-500"}`}> Substance Abuse </motion.button>

          </motion.div>   
          
        </motion.div>

        

      </div>

    </div>
  )
}
