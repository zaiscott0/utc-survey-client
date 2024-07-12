import React, { useContext } from 'react';
import { StepperContext } from '../../contexts/StepperContext';
import { motion } from 'framer-motion';

export default function Form11() {
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
    { value: "Significance/Purpose", label: "Lack of Purpose" },
    { value: "Personal/Finances", label: "Personal / Financial Loss" },
    { value: "Divorce", label: "Divorce" },
    { value: "Time-Management", label: "Lack of Time Management" },
    { value: "Physical-Challenge", label: "Physical Challenges" },
    { value: "Depression", label: "Depression" },
    { value: "Anger", label: "Anger" },
    { value: "Substance-Abuse", label: "Substance Abuse" },
  ];

  const btnClassName = "user-select col-span-3 row-span-2 bg-cover";

  return (
    <div className='form-c'>
      <div className='form-box'>
        <motion.div variants={container} animate="visible" initial="hidden" className='form-input'>
          <motion.p variants={item}>
            Look at these common challenges. Click on <b>EVERY</b> issue you’ve seen someone experience.
          </motion.p>
          <br />

          <motion.div variants={container} className='select-container justify-items-stretch'>
            {buttonOptions.map((option, index) => (
              <motion.button
                key={index}
                variants={item}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={clickChange}
                value={option.value}
                name="c_xp"
                className={`${userData["c_xp"]?.includes(option.value) ? btnClassName + " bg-blue-200" : btnClassName + " bg-pmmGold"}`}
              >
                {option.label}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
