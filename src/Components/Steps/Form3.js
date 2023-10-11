import React from 'react';
import { useContext } from 'react';
import { StepperContext } from '../../contexts/StepperContext';
import {motion, AnimatePresence} from "framer-motion";


export default function Form3() {
    const {userData, setUserData} = useContext(StepperContext);
    const handleChange = (e) => {
        const {name, value}  = e.target;
        setUserData({...userData, [name]:value});
    }
    // Framer Motion
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
          <span>
          <p>
                I am a...
                <select onChange={handleChange} value={userData["gender"] || ""} name="gender" className='Goal-Focus form-select' id="">
                    <option hidden value=""></option>
                    <option disabled value="">I am a:</option>
                    <option>Male</option>
                    <option> Female</option>
                    <option>Other</option>
                    <option>Prefer Not to Say</option>
              </select>
            </p>
            <br></br>
            <motion.p variants={item}>
              I am
              <input onChange={handleChange} value={userData["age"] || ""} name='age' className=' p-1 px-2 appearance-none outline-none w-1/3 text-gray-800 form-select ' max={100} min={0} type="number" />
              years old
            </motion.p>
            <br></br>
            <p>
                and a 
                <select onChange={handleChange} value={userData["age_group"] || ""} name="age_group" className='Goal-Focus form-select' id="">
                    <option hidden value=""></option>
                    <option disabled value="">I am a:</option>
                    <option>Middle School Student</option>
                    <option> High School Guardian</option>
                    <option>Parent/Guardian</option>
                    <option>Teacher</option>
                    <option>Administrator</option>
              </select>
            </p>
            <br/>
          </span>
        </motion.div>

        

      </div>

    </div>
  )
}
