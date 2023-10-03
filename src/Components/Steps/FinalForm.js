import React from 'react';
import { useContext, useState, useEffect } from 'react';
import { StepperContext } from '../../contexts/StepperContext';
import axios from 'axios';
import {motion, AnimatePresence} from "framer-motion";
import gif from "../img/thanks2.webp"



export default function FinalForm() {

  // Trying to add backend API HEre
  const [backendData, setBackendData] = useState({});
  useEffect(() => {
    fetch("/api/data").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, [])

  console.log(backendData);

  // let's try adding global user data to database
  const {userData, setUserData} = useContext(StepperContext);
  console.log(userData)
  

  const clickChange = (e) => {
    window.location.reload(false);
    // refresh window

  }
  // lets make a axios endpoint for updating data
  const api = axios.create({
    baseURL: `https://utc-survey-api.onrender.com/user`
  });
  async function addUser () {
    let res = await api.post("/", userData);
    console.log("HERE IS THE RESPONSE...");
    console.log(res)
  }
  useEffect( () => {
    addUser();
  }, [])

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

  

  // ==============================

  
  return (
    <div>
      <div className='form-c'>
      <div className='form-box'>
        <motion.div className='form-input' animate="visible" initial="hidden" variants={container}>

          <span>
            <motion.p variants={item}>
              Thank You, <motion.b variants={item}>{userData['first_name']} </motion.b>
              <br />
            </motion.p>
          </span>
          <span>
            <motion.p variants={item}>
              <br />
              You are not the only one to have struggled with <motion.b variants={item}>{userData['stressor']} </motion.b>
              <br />
              <br />
              Your actions today are playing a pivotal role in creating a better future of support and transparency for your community!
              <br />

            </motion.p>
          </span>
          
          <br />
          <motion.img className='rounded shadow-2x shadow-slate-700 ' variants={item} src={gif} alt='loading...'></motion.img>

          <motion.div variants={container} className=''>
            <br />
            <motion.button variants={item} whileHover={{scale:1.1}} whileTap={{scale:0.9}} onClick={clickChange} value="Personal Goals" name="goal_focus" className='user-select col-span-3 row-span-2  bg-cover focus:bg-blue-200 ' > Done </motion.button>

          </motion.div>   

        </motion.div>

        

      </div>

    </div>
      
    </div>
    
  )
}
