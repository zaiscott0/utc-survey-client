import React from 'react';
import { useContext, useState, useEffect } from 'react';
import { StepperContext } from '../../contexts/StepperContext';
import axios from 'axios';
import {motion, AnimatePresence} from "framer-motion";
import gif from "../img/thanks2.webp"
import PillarResults from '../PillarResults';




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
    baseURL: `https://utc-survey-api-1.onrender.com/user`
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
        delayChildren: 0.7,
        staggerChildren: 1.3
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
// <motion.img className='rounded shadow-2x shadow-slate-700 ' variants={item} src={gif} alt='loading...'></motion.img>

  

  // ==============================
  // COACHING STRATS
  const strategies = {
    "present": [
      "It’s normal for people to not focus on themselves.",
      "Not managing stress can impact your ability to succeed.",
      "Stopping and reflecting can help center you.",
      "Make little things like breathing a practice to ground you."
    ],
    "firefighter": [
      "Becoming aware of where you are emotionally is vitally important.",
      "Identify and focus on the positives around you.",
      "Do something! Don’t avoid issues. Address them one step at a time.",
      "Change your approach. Visualize a path of success."

    ],
    "author": [
      "Take the time to reflect on what you really want.",
      "Reflect on how expectations from others have impacted you.",
      "There is power in dreaming, and imagination.",
      "Live in alignment with your values."
    ],
    "pilot": [
      "Be clear with your goals. Know your conditions & capacity.",
      "Self-care allows you to plan and prepare for your journey",
      "Identify your needs.",
      "Seek support to help."
    ],
    "manager": [
      "Connecting with people is vital to your health",
      "Your team feeds your soul",
      "Tend to your relationships to keep them healthy",
      "Find the balance of agents and guides to support you"
    ],
    "intentional": [
      "Don’t live life on autopilot.",
      "Create a routine to help you with your goals.",
      "Reflect on how bad you want to accomplish your goal.",
      "Commit to your goals and assess them weekly."
    ],
    "agile": [
      "Flexibility is crucial for life fulfillment.",
      "If frustrated, take a moment, breath, and refocus..",
      "Broaden your perspective to see the entire picture.",
      "All obstacles aren’t roadblocks. You can still get to your destination."
    ],
    "lifeguard": [
      "Remember, some people are scared to ask for help.",
      "Living authentically will help others do the same.",
      "Intentionally listen and watch for what people are saying.",
      "Create a safe space and listen without judgment."
    ]
  }
  const img = {
    //"present": "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYWxnZHk4eWhxbmxvZjNnYXJncGprdHVsOWdmYjQ4bmQxZGdoa2k5NCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/CQDmX4bCoJTNK/giphy.gif",
    "present": "https://uploads-ssl.webflow.com/65fded56193c91c4ae0eb328/662c1a8c2c50441c8e78a7df_Freddie-Scott-Avatar.jpg",

    //"firefighter": "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeXEyaW5nODZ0Mmlqc3pzdjlnMDJjaHh2amo2M3IxOXNtMGhha3VvbCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26tn7yIk7g5kOF45y/giphy.gif",
    "firefighter": "https://uploads-ssl.webflow.com/65fded56193c91c4ae0eb328/662c1a8c2c50441c8e78a7df_Freddie-Scott-Avatar.jpg",

    //"author": "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdmZxd2Iyd296dXhnZHByeTh3d3J3ZHkwYjVzbnpqZDNtNmlqa3JubyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/t0dI6qVoQAjKvCVzrO/giphy.gif",
    "author": "https://uploads-ssl.webflow.com/65fded56193c91c4ae0eb328/662c1a8c2c50441c8e78a7df_Freddie-Scott-Avatar.jpg",

    //"pilot": "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMGRtbWY4a2xocTlmdzZ4andpbHlyNnluMTNvajQ3MzNtbmc2b3hxaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/gCoX5QvIA7w9CXVj2Z/giphy.gif",
    "pilot": "https://uploads-ssl.webflow.com/65fded56193c91c4ae0eb328/662c1a8c2c50441c8e78a7df_Freddie-Scott-Avatar.jpg",

    //"manager": "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ2M5enZha2ltMTR4bGxibTdlbHFoajkxYnJ0Z2doaGo4aHFraTN3diZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/6Z7gomLMqPxyDjf4Jr/giphy.gif",
    "manager": "https://uploads-ssl.webflow.com/65fded56193c91c4ae0eb328/662c1a8c2c50441c8e78a7df_Freddie-Scott-Avatar.jpg",

    //"intentional": "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZTBhanl3YTIyMGJyZW51bmNxYTd6NzRnMWYzaWR5Y2htaW52dG5sYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xT1XGQdAzkVXNEnMGI/giphy.gif",
    "intentional": "https://uploads-ssl.webflow.com/65fded56193c91c4ae0eb328/662c1a8c2c50441c8e78a7df_Freddie-Scott-Avatar.jpg",

    //"agile": "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcnFrZWZ5cXU1MW85ZXB0OTd3cm9vd2R6aTZhdTluNjMzbmplcTY3eCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Tes2L7WzZyEOi8et1k/giphy.gif",
    "agile": "https://uploads-ssl.webflow.com/65fded56193c91c4ae0eb328/662c1a8c2c50441c8e78a7df_Freddie-Scott-Avatar.jpg",

    //"lifeguard": "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbzNxZnFpc2NlbTlraXNrZXVtYmNnYzd2cDdjMmVsYTFybDR0ZHEyaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/QFeYV3QIVEzEVjdzXa/giphy.gif"
    "lifeguard": "https://uploads-ssl.webflow.com/65fded56193c91c4ae0eb328/662c1a8c2c50441c8e78a7df_Freddie-Scott-Avatar.jpg"

  }

  const links = {
    "present": "https://learn.pivotalmomentsmedia.com/courses/bepresent",
    "firefighter": "https://learn.pivotalmomentsmedia.com/courses/beafirefighter",
    "author": "https://learn.pivotalmomentsmedia.com/courses/beanauthor",
    "pilot":" https://learn.pivotalmomentsmedia.com/courses/beapilot",
    "manager": "https://learn.pivotalmomentsmedia.com/courses/beamanager",
    "intentional": "https://learn.pivotalmomentsmedia.com/courses/beintentional",
    "agile": "https://learn.pivotalmomentsmedia.com/courses/beagile",
    "lifeguard": "https://learn.pivotalmomentsmedia.com/courses/bealifeguard"
  }

  const LinkHandler = () => {
    if ((userData["statement"] === 'Thoughts/Feelings')) {
      // Open the external URL in a new tab
      window.open(links.present, '_blank');
    }
    else if ((userData["statement"] === 'Fires')){
      // Open the external URL in a new tab
      window.open(links.firefighter, '_blank');
    }
    else if ((userData["statement"] === 'Control')){
      // Open the external URL in a new tab
      window.open(links.author, '_blank');
    }
    else if (userData["statement"] === 'Focus') {
      // Open the external URL in a new tab
      window.open(links.intentional, '_blank');
    }
    else if (userData["statement"] === 'Help-Me') {
      // Open the external URL in a new tab
      window.open(links.manager, '_blank');
    }
    else if (userData["statement"] === 'Action-Plan') {
      // Open the external URL in a new tab
      window.open(links.pilot, '_blank');
    }
    else if (userData["statement"] === 'Adjusting') {
      // Open the external URL in a new tab
      window.open(links.agile, '_blank');
    }
    else if (userData["statement"] === 'Help-Others') {
      // Open the external URL in a new tab
      window.open(links.lifeguard, '_blank');
    }
    else {
      console.log("error?");
    }


  };

  // quick fix for response encoding
  const statement2pillar = {
    "Help-Me" : "Be a Manager",
    "Action-Plan" : "Be a Pilot",
    "Help-Others" : "Be a Lifeguard",
    "Thoughts/Feelings" : "Be Present",
    "Control" : "Be a Author",
    "Focus" : "Be Intentional",
    "Fires" : "Be a Firefighter",
    "Adjusting" : "Be Agile",
  }
  
  return (
    <div>
      <div className='form-c'>
      <div className='form-box'>
        <motion.div className='form-input' animate="visible" initial="hidden" variants={container}>
          <span className="font-black text-2xl mb-5">
            <motion.p variants={item} className="flex items-center mb-2 mt-3">
              Welcome to LiveProsperous<motion.b variants={item} className="ml-1">{userData['first_name']}</motion.b>
            </motion.p>
          </span>

                   {/* Add the image here */}
                    <motion.img
                    variants={item}
                    className="w-1/2 sm:w-1/3 md:w-1/3 lg:w-1/4 xl:w-1/5 border border-gray-300 rounded-md flex flex-col justify-center items-center mx-auto mb-8"
                    src="https://uploads-ssl.webflow.com/65fded56193c91c4ae0eb328/662c1a8c2c50441c8e78a7df_Freddie-Scott-Avatar.jpg"
                    alt="Coach Freddie Scott"
                />
         
          <span className="text-black-400 font-light max-w-[800px] mx-auto">
            <motion.p variants={item} className="mb-4 text-1xl">
              I'm Freddie Scott, former pro athelete, Transition Coach, and advocate for your success in our community. Based on your responses I want you to start with our    
              <motion.b variants={item} className=" font-black pl-1">
              {
                statement2pillar[userData['statement']]
              } </motion.b>course. Before you dive in, reflect on the points below to get the most out of this course.

              <br/>

            </motion.p>

            <motion.p variants={item} className="mb-5 text-1xl">
            </motion.p>
          </span>
          <span>
            <motion.div variants={item} animate="visible" initial="hidden" className="mb-5 text-1xl">
                {(userData["statement"] === 'Thoughts/Feelings') ? <motion.p varients={item}><PillarResults data={strategies.present} img={img.present} /></motion.p>  : ""}
                {(userData["statement"] === 'Fires') ? <motion.p varients={item}><PillarResults data={strategies.firefighter} img={img.firefighter}/></motion.p>  : ""}
                {(userData["statement"] === 'Control') ? <motion.p varients={item}><PillarResults data={strategies.author} img={img.author}/></motion.p>  : ""}
                {(userData["statement"] === 'Focus') ? <motion.p varients={item}><PillarResults data={strategies.intentional} img={img.intentional}/></motion.p>  : ""}
                {(userData["statement"] === 'Help-Me') ? <motion.p varients={item}><PillarResults data={strategies.manager} img={img.manager}/></motion.p>  : ""}
                {(userData["statement"] === 'Action-Plan') ? <motion.p varients={item}><PillarResults data={strategies.pilot} img={img.pilot}/></motion.p>  : ""}
                {(userData["statement"] === 'Adjusting') ? <motion.p varients={item}><PillarResults data={strategies.agile} img={img.agile}/></motion.p>  : ""}
                {(userData["statement"] === 'Help-Others') ? <motion.p varients={item}><PillarResults data={strategies.lifeguard} img={img.lifeguard}/></motion.p>  : ""}
            </motion.div>
          </span>

          <span class="leading-10 font-black text-2xl mb-3 mt-4">Ready to: <motion.b variants={item} className="recommend-course font-black text-1xl">
              {
                statement2pillar[userData['statement']]
              }?</motion.b>
          </span>
          
          <button onClick={LinkHandler} className=" text-1xl bg-pmmEvry1 hover:bg-pmmGold text-white font-black py-3 px-5 rounded inline-flex items-center mb-8">Take the Course</button>
        </motion.div>
        
            
      </div>

    </div>
      
    </div>
    
  )
}
