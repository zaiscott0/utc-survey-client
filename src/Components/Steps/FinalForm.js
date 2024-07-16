import React, { useContext, useState, useEffect } from 'react';
import { StepperContext } from '../../contexts/StepperContext';
import axios from 'axios';
import { motion } from "framer-motion";
import PillarResults from '../PillarResults';

const api = axios.create({
  baseURL: `https://utc-survey-api-1.onrender.com/user`
});

const strategies = {
  "Thoughts/Feelings": [
    "It’s normal for people to not focus on themselves.",
    "Not managing stress can impact your ability to succeed.",
    "Stopping and reflecting can help center you.",
    "Make little things like breathing a practice to ground you."
  ],
  "Fires": [
    "Becoming aware of where you are emotionally is vitally important.",
    "Identify and focus on the positives around you.",
    "Do something! Don’t avoid issues. Address them one step at a time.",
    "Change your approach. Visualize a path of success."
  ],
  "Control": [
    "Take the time to reflect on what you really want.",
    "Reflect on how expectations from others have impacted you.",
    "There is power in dreaming, and imagination.",
    "Live in alignment with your values."
  ],
  "Focus": [
    "Be clear with your goals. Know your conditions & capacity.",
    "Self-care allows you to plan and prepare for your journey",
    "Identify your needs.",
    "Seek support to help."
  ],
  "Help-Me": [
    "Connecting with people is vital to your health",
    "Your team feeds your soul",
    "Tend to your relationships to keep them healthy",
    "Find the balance of agents and guides to support you"
  ],
  "Action-Plan": [
    "Don’t live life on autopilot.",
    "Create a routine to help you with your goals.",
    "Reflect on how bad you want to accomplish your goal.",
    "Commit to your goals and assess them weekly."
  ],
  "Adjusting": [
    "Flexibility is crucial for life fulfillment.",
    "If frustrated, take a moment, breath, and refocus.",
    "Broaden your perspective to see the entire picture.",
    "All obstacles aren’t roadblocks. You can still get to your destination."
  ],
  "Help-Others": [
    "Remember, some people are scared to ask for help.",
    "Living authentically will help others do the same.",
    "Intentionally listen and watch for what people are saying.",
    "Create a safe space and listen without judgment."
  ]
};

const links = {
  "Thoughts/Feelings": "https://learn.pivotalmomentsmedia.com/courses/bepresent",
  "Fires": "https://learn.pivotalmomentsmedia.com/courses/beafirefighter",
  "Control": "https://learn.pivotalmomentsmedia.com/courses/beanauthor",
  "Focus": "https://learn.pivotalmomentsmedia.com/courses/beapilot",
  "Help-Me": "https://learn.pivotalmomentsmedia.com/courses/beamanager",
  "Action-Plan": "https://learn.pivotalmomentsmedia.com/courses/beintentional",
  "Adjusting": "https://learn.pivotalmomentsmedia.com/courses/beagile",
  "Help-Others": "https://learn.pivotalmomentsmedia.com/courses/bealifeguard"
};

const statement2pillar = {
  "Help-Me": "Be a Manager",
  "Action-Plan": "Be a Pilot",
  "Help-Others": "Be a Lifeguard",
  "Thoughts/Feelings": "Be Present",
  "Control": "Be an Author",
  "Focus": "Be Intentional",
  "Fires": "Be a Firefighter",
  "Adjusting": "Be Agile",
};

const containerVariants = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.7,
      staggerChildren: 1.3
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

export default function FinalForm() {
  const [backendData, setBackendData] = useState({});
  const { userData } = useContext(StepperContext);

  useEffect(() => {
    fetch("/api/data")
      .then(response => response.json())
      .then(data => setBackendData(data));
  }, []);

  useEffect(() => {
    const addUser = async () => {
      const res = await api.post("/", userData);
      console.log("HERE IS THE RESPONSE...", res);
    };
    addUser();
  }, [userData]);

  const handleLinkClick = () => {
    const link = links[userData.statement];
    if (link) {
      window.open(link, '_blank');
    } else {
      console.log("error?");
    }
  };

  return (
<div className="form-c">
  <div className="form-box">
    <motion.div 
      className="form-input final-c-bg p-3 max-w-xs mx-auto" 
      animate="visible" 
      initial="hidden" 
      variants={containerVariants}
    >
      <motion.div 
        className="flex flex-col items-center space-y-2 p-3 bg-white rounded-lg "
        variants={containerVariants}
      >
        <motion.img
          variants={itemVariants}
          className="w-12 h-12 rounded-full border-2 border-gray-300"
          src="https://uploads-ssl.webflow.com/65fded56193c91c4ae0eb328/662c1a8c2c50441c8e78a7df_Freddie-Scott-Avatar.jpg"
          alt="Coach Freddie Scott"
        />

<motion.div 
  variants={itemVariants} 
  className="text-gray-700 text-center text-xs leading-tight space-y-3"
>
<p>
  I'm <span className="font-bold text-pmmGold">Freddie Scott</span>, former 
  <span className="font-bold text-pmmGold"> Pro Athlete</span>, 
  <span className="font-bold text-pmmGold"> Transition Coach</span>, and 
  <span className="font-bold text-pmmGold"> Advocate</span> for your success in our community.
</p>
  <p>Based on your responses, I recommend starting with our
  <span className="inline-block bg-pmmGold text-white px-2 py-1 rounded-lg font-bold mx-1">
    {statement2pillar[userData.statement]}
  </span> course.
</p>
  <p>Reflect on these tips for a better course experience.</p>
</motion.div>


      </motion.div>

      <motion.div 
        variants={itemVariants} 
        animate="visible" 
        initial="hidden" 
        className="mt-2 text-xs"
      >
        {strategies[userData.statement] && <PillarResults data={strategies[userData.statement]} />}
      </motion.div>

      <button 
  onClick={handleLinkClick} 
  className="text-xs md:text-sm bg-pmmDark hover:bg-pmmGold text-white font-black py-3 px-4 rounded inline-flex items-center mt-4 mx-2"
>
  Take the Course
</button>


    </motion.div>
  </div>
</div>


  
  );
}
