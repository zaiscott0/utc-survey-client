import React from 'react';
import gif from "./img/thanks2.webp"
import {motion, AnimatePresence} from "framer-motion";

const PillarResults = ({ data }) => {
    //console.log("LOOKING HERE!!!", data)

    // FRAMER MOTION
    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.3,
        },
      },
    };
    
    const itemVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
    };
  return (
<motion.div
  variants={containerVariants}
  initial="hidden"
  animate="visible"
  className="grid grid-cols-1 md:grid-cols-2 gap-4 p-2"
>
  {data.map((item, index) => (
    <motion.div
      key={index}
      variants={itemVariants}
      className="bg-gray-200 p-3 rounded-lg shadow-md transform transition-all hover:scale-105"
    >
      <p className="text-gray-700 text-xs font-light">
  <span className="inline-block w-4 h-4 mr-2 bg-pmmGold text-white rounded-full flex items-center justify-center">
    {index + 1}
  </span>
  {item}
</p>

    </motion.div>
  ))}
</motion.div>


  );
};

export default PillarResults;