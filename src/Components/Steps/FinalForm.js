import React from 'react';
import { useContext, useState, useEffect } from 'react';
import { StepperContext } from '../../contexts/StepperContext';
import axios from 'axios';
import {motion, AnimatePresence} from "framer-motion";



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
  // lets make a axios endpoint for updating data
  const api = axios.create({
    baseURL: `http://localhost:3001/user/`
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

  // COACHING STRATS
  const strategies = {
    "sig": [
      "1. Ask what fulfills their needs consciously or subconsciously?",
      "2. Get a new game plan, explore",
      "3. Develop inspiring goals",
      "4. Overcome limitations of self belief",
      "5. Assist them with revamping their support system",
      "6. Commit to learning new skills and gaining new knowledge",
      "7. Brainstorm ideas about how they can reinvent themselves"

    ],
    "finL": [
      "1. Accept the fact that this loss has really happened. Denial is a strong and protective mechanism.",
      "2. Suggest they take advantage of the resources the League, Trust, PA that are available",
      "3. Help them available the situation and determine their priorities",

    ],
    "divorce": [
      "1. Assist the Coaches with understanding he has a new identity; and there may be people in his life that he needs to get reacquainted with.",
      "2. Listen well. Don’t interject. Don’t compare your situation or another situation.",
      "3. Help create a support and financial network",
      "4. Check in with them regularly. Take the initiative to reach out",
      "5. Bucket Your Frustration Exercise"
    ],
    "time": [
      "1. Develop a routine - find balance",
      "2. Find a support system - consider a life coach",
      "3. Take time to do something you love or volunteer",
      "4. Learn to prioritize and eliminate things that waste your time",
      "5. Allow time to heal."
    ],
    "physical": [
      "1. Be empathetic. Let the Coaches know you understand what they are going through",
      "2. Help the Coaches deal with their new reality",
      "3. Work on their self-esteem; make them feel important/valued",
      "4. Do not allow the player to isolate himself from everyone."
    ],
    "depression": [
      "1. Communicate concern with an unconditional positive regard, non-judgemental and genuine attitude",
      "2. Develop procedures and systems that encourage genuine self-disclosure",
      "3. Help them to redefine their community.",
      "4. Ask that they consider: What are their relationships worth?"
    ],
    "bitter": [
      "1. Self awareness - Help the person become more aware of what they are feeling and thinking",
      "2. Self control - players should learn to think before they act",
      "3. Analyze - determine other options they have to deal with the triggers and the situation",
      "4. Take constructive action - the goal is to stop the attack, to remedy the situation"
    ],
    "substance": [
      "1. Seek outside help. You can’t do it alone. Contact a professional alcohol or drug treatment program.",
      "2. Communicate a non-judgmental, non-confrontational approach that attempts to meet the person where they may be in terms of their readiness to change a behavior",
      "3. Communicate that change takes time and is often painful and that change is possible. Remind them that there are people who want to help"
    ]
  }
  return (
    <div>
      <div className='form-c'>
      <div className='form-box'>
        <motion.div className='form-input' animate="visible" initial="hidden" variants={container}>

          <span>
            <motion.p variants={item}>
              Hello, <motion.b variants={item}>{userData['first_name']} </motion.b>
              <br />
            </motion.p>
          </span>
          <span>
            <motion.p variants={item}>
              You said your mental health is, <motion.b variants={item}>{userData['goal_importance']} </motion.b>
              <br/>
              Most people have seen people struggle with these common issues. You are not the only one to have dealt with <motion.b variants={item}>{userData['stressor']} </motion.b>
              <br />
              <br />
              Here are some coaching strategies to help you with <motion.b variants={item}>{userData['stressor']} </motion.b> today. 

              <br />
              <br />
            </motion.p>
          </span>
          <span>

            <motion.div variants={container} animate="visible" initial="hidden">
              {(userData["stressor"] === 'Significance/Purpose') ? ( strategies.sig?.map((user,i) => ( <motion.p varients={item} key={i}>{user}</motion.p> )) ) : ""}
              {(userData["stressor"] === 'Personal/Finances') ? ( strategies.finL?.map((user,i) => ( <motion.p varients={item} key={i}>{user}</motion.p> )) ): ""}
              {(userData["stressor"] === 'Divorce') ? ( strategies.divorce?.map((user,i) => ( <motion.p varients={item} key={i}>{user}</motion.p> )) ) : ""}
              {(userData["stressor"] === 'Time-Management') ? ( strategies.time?.map((user,i) => ( <motion.p varients={item} key={i}>{user}</motion.p> )) ) : ""}
              {(userData["stressor"] === 'Physical-Challenge') ? ( strategies.physical?.map((user,i) => ( <motion.p varients={item} key={i}>{user}</motion.p> )) ) : ""}
              {(userData["stressor"] === 'depression') ? ( strategies.depression?.map((user,i) => ( <motion.p varients={item} key={i}> {user}</motion.p> )) ) : ""}
              {(userData["stressor"] === 'Bitterness') ? ( strategies.bitter?.map((user,i) => ( <motion.p varients={item} key={i}>{user}</motion.p> )) ) : ""}
              {(userData["stressor"] === 'Substance-Abuse') ? ( strategies.substance?.map((user,i) => ( <motion.p varients={item} key={i}>{user}</motion.p> )) ) : ""}

            </motion.div>
            
          </span>
          <br />
          <p>ALSO, here is also a link to <b>JOIN A COMMUNITY</b> of people working on similar goals! </p>

          <motion.div variants={container} className=''>
            <br />
            <motion.button variants={item} whileHover={{scale:1.1}} whileTap={{scale:0.9}} onClick={clickChange} value="Personal Goals" name="goal_focus" className='user-select col-span-3 row-span-2  bg-cover focus:bg-blue-200 ' > JOIN NOW!!! </motion.button>

          </motion.div>   

        </motion.div>

        

      </div>

    </div>
      
    </div>
    
  )
}
