import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const WelcomeMessage = ({ onAnimationComplete }) => {
  const [message, setMessage] = useState('');
  const welcomeText = "Welcome to the team!";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setMessage(welcomeText.substring(0, index));
      index++;
      if (index > welcomeText.length) {
        clearInterval(interval);
        setTimeout(onAnimationComplete, 1500); // Add a delay before calling the completion callback
      }
    }, 50); // Adjust typing speed here
    return () => clearInterval(interval);
  }, [onAnimationComplete]);

  return (
    <motion.div
      className="welcome-message"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1>Let's figure out which tools would suit you best for a better tomorrow!</h1>
      <h1>{message}</h1>
      <div><img src='https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExMXU5YjJzeXc5ZzNtN2pjdXVvajl4NXRyeDFtaXM0YTBvZmI5dXZnYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/11sBLVxNs7v6WA/giphy.gif'/></div>
    </motion.div>
  );
};

export default WelcomeMessage;
