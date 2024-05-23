import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { StepperContext } from '../../contexts/StepperContext';
import {motion, AnimatePresence} from "framer-motion";


export default function Form11() {
  const {userData, setUserData} = useContext(StepperContext);
  //const [btnSelect, setBtnSelect] = useState(" bg-pmmGold");
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
        //setBtnSelect(" bg-pmmGold");        

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
          <motion.p variants={item}> Look at these common challenges. Click on <b>EVERY</b> issue you’ve seen someone experience. 
 
 </motion.p> <br/>

          {/*<motion.input required variants={item} disabled onChange={handleChange} value={userData["xp"] || ""} name="xp" className='Goal-Focus form-select ' type='text'></motion.input>*/}
          



          <motion.div variants={container} className='select-container justify-items-stretch'>

            <motion.button variants={item} whileHover={{scale:1.1}} whileTap={{scale:0.9}} onClick={clickChange} value="Significance/Purpose" name="c_xp" className={`${userData["c_xp"].includes("Significance/Purpose") ?  btnClassName + " bg-blue-200" : btnClassName + " bg-pmmGold"}`} > Lack of Purpose </motion.button>
            <motion.button variants={item} whileHover={{scale:1.1}} whileTap={{scale:0.9}} onClick={clickChange} value="Personal/Finances" name="c_xp" className={`${userData["c_xp"].includes("Personal/Finances") ?  btnClassName + " bg-blue-200" : btnClassName + " bg-pmmGold"}`}> Personal / Financial Loss </motion.button>
            <motion.button variants={item} whileHover={{scale:1.1}} whileTap={{scale:0.9}} onClick={clickChange} value="Divorce" name="c_xp" className={`${userData["c_xp"].includes("Divorce") ?  btnClassName + " bg-blue-200" : btnClassName + " bg-pmmGold"}`}> Divorce </motion.button>
            <motion.button variants={item} whileHover={{scale:1.1}} whileTap={{scale:0.9}} onClick={clickChange} value="Time-Management" name="c_xp" className={`${userData["c_xp"].includes("Time-Management") ?  btnClassName + " bg-blue-200" : btnClassName + " bg-pmmGold"}`}> Lack of Time Management </motion.button>
            <motion.button variants={item} whileHover={{scale:1.1}} whileTap={{scale:0.9}} onClick={clickChange} value="Physical-Challenge" name="c_xp" className={`${userData["c_xp"].includes("Physical-Challenge") ?  btnClassName + " bg-blue-200" : btnClassName + " bg-pmmGold"}`}> Physical Challenges </motion.button>
            <motion.button variants={item} whileHover={{scale:1.1}} whileTap={{scale:0.9}} onClick={clickChange} value="Depression" name="c_xp" className={`${userData["c_xp"].includes("Depression") ?  btnClassName + " bg-blue-200" : btnClassName + " bg-pmmGold"}`}> Depression </motion.button>
            <motion.button variants={item} whileHover={{scale:1.1}} whileTap={{scale:0.9}} onClick={clickChange} value="Anger" name="c_xp" className={`${userData["c_xp"].includes("Anger") ?  btnClassName + " bg-blue-200" : btnClassName + " bg-pmmGold"}`}> Anger </motion.button>
            <motion.button variants={item} whileHover={{scale:1.1}} whileTap={{scale:0.9}} onClick={clickChange} value="Substance-Abuse" name="c_xp" className={`${userData["c_xp"].includes("Substance-Abuse") ?  btnClassName + " bg-blue-200" : btnClassName + " bg-pmmGold"}`}> Substance Abuse </motion.button>

          </motion.div>   
          
        </motion.div>

        

      </div>

    </div>
  )
}
