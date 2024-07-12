import React, { useContext } from 'react';
import { StepperContext } from '../../contexts/StepperContext';
import { motion } from 'framer-motion';

export default function Form9() {
  const { userData, setUserData } = useContext(StepperContext);

  const clickChange = (e) => {
    const { name, value } = e.target;
    const selected = userData[name] || [];

    if (selected.includes(value)) {
      const updatedSelected = selected.filter((item) => item !== value);
      setUserData({ ...userData, [name]: updatedSelected });
    } else {
      const updatedSelected = [...selected, value];
      setUserData({ ...userData, [name]: updatedSelected });
    }
  };

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const buttonOptions = [
    { value: "Thoughts/Feelings", label: "I need help with my thoughts and feelings." },
    { value: "Fires", label: "I need help with the fires in my life." },
    { value: "Control", label: "I need to take control of my story." },
    { value: "Focus", label: "I need to focus on my goals." },
    { value: "Help-Me", label: "I want people to help me. " },
    { value: "Action-Plan", label: "I need an action plan." },
    { value: "Adjusting", label: "I struggle with adjusting my plans." },
    { value: "Help-Others", label: "I want to learn to help others." },
  ];

  const btnClassName = "option-button";

  return (
    <div className="form-container">
      <div className="form-box">
        <motion.div
          className="form-content"
          animate="visible"
          initial="hidden"
          variants={container}
        >
          <motion.p variants={item} className="question-text">
          Look at these statements. Click on the statement that's <b>MOST</b> important to <b>YOU</b> now. 
          </motion.p>
          <motion.div
            variants={container}
            className="button-container"
          >
            {buttonOptions.map((goal, index) => (
              <motion.button
                key={index}
                variants={item}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={clickChange}
                value={goal.value}
                name="statement"
                className="option-button"
              >
                {goal.label}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
