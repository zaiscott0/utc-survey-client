import React from 'react';
import { motion } from 'framer-motion';

import { useContext, useState, useEffect } from 'react';
import { StepperContext } from '../../contexts/StepperContext';
import axios from 'axios';
import Modal from './finalreccModal';

const RecommendationPage = ({ recommendations, userName }) => {

  // Trying to add backend API Here
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
  console.log("\n\nUSERDATA: ", userData, "\n\n");
  
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

  // Filter the xp list to exclude the stressor
  const filteredXp = userData.xp.filter(item => item !== userData.stressor);

  // Select the first two elements from the filtered list
  const selectedXp = filteredXp.slice(0, 2);

  // Animation variants for list items
  const listItemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.3 }
    })
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

  const pmmCourse = statement2pillar[userData.statement];

  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const links = {
    "Thoughts/Feelings": "https://learn.pivotalmomentsmedia.com/courses/bepresent",
    "Fires": "https://learn.pivotalmomentsmedia.com/courses/beafirefighter",
    "Control": "https://learn.pivotalmomentsmedia.com/courses/beanauthor",
    "Action-Plan":" https://learn.pivotalmomentsmedia.com/courses/beapilot",
    "Help-Me": "https://learn.pivotalmomentsmedia.com/courses/beamanager",
    "Focus": "https://learn.pivotalmomentsmedia.com/courses/beintentional",
    "Adjusting": "https://learn.pivotalmomentsmedia.com/courses/beagile",
    "Help-Others": "https://learn.pivotalmomentsmedia.com/courses/bealifeguard"
  }

  const openNewTab = (url) => {
    window.open(url, '_blank');
  };
  

  return (
    <div className="flex flex-col h-full bg-white text-white justify-between">
      <div className="flex flex-col items-center justify-center flex-grow">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="bg-gray-800 rounded-lg p-5 text-center w-full max-w-md shadow-md"
        >
          <h1 className="text-2xl mb-5">Unlock Your Potential with Our Transformative Courses!</h1>
          <p>Our course, <b className='text-pmmGrit'>{pmmCourse}</b>, is tailor-made for driven individuals like <b className='text-pmmGrit'>you</b>, eager to grow and succeed with their...</p>
          <p></p>
          <ul className="mb-5">
            <motion.li
              className="text-lg my-2 flex items-center"
              initial="hidden"
              animate="visible"
              custom={0}
              variants={listItemVariants}
            >
              
              <span role="img" aria-label="check" className="text-green-500">✔️</span> {userData.statement}
            </motion.li>
            <motion.li
              className="text-lg my-2 flex items-center"
              initial="hidden"
              animate="visible"
              custom={1}
              variants={listItemVariants}
            >
              <span role="img" aria-label="check" className="text-green-500">✔️</span> {userData.stressor}
            </motion.li>
            {selectedXp.map((item, index) => (
              <motion.li
                key={index}
                className="text-lg my-2 flex items-center"
                initial="hidden"
                animate="visible"
                custom={index + 2}
                variants={listItemVariants}
              >
                <span role="img" aria-label="check" className="text-green-500">✔️</span> {item}
              </motion.li>
            ))}
          </ul>
          <div className="flex flex-col gap-4">
            
          <div
        className="bg-black text-white rounded-lg py-2 px-5 text-lg border border-yellow-500 flex justify-between items-center cursor-pointer"
        onClick={handleShowModal}
      >
        <span>7 Day Free Trial</span>
        <span className="text-gray-400">See Course Benefits</span>
      </div>

      <Modal show={showModal} onClose={handleCloseModal} />
            <div className="bg-black text-white rounded-lg py-2 px-5 text-lg flex justify-between items-center">
              <span>Yearly Access</span>
              <span className="bg-red-500 text-white rounded-full py-1 px-3">SAVE 88%</span>
            </div>
          </div>
          <button
          className="bg-[#DFB140] text-black rounded-full py-2 px-5 text-lg mt-5 hover:bg-yellow-600"
          onClick={() => openNewTab(links[userData.statement])}
        >
          Try Now
        </button>
        </motion.div>
      </div>
    </div>
  );
};

export default RecommendationPage;
