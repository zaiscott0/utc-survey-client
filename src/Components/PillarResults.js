import React from 'react';
import gif from "./img/thanks2.webp"
import {motion, AnimatePresence} from "framer-motion";

const PillarResults = ({ data, img }) => {
    //console.log("LOOKING HERE!!!", data)

    // FRAMER MOTION
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 3.0,
        staggerChildren: 0.7
      }
    }
  }
    
  const items = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }

  }
  return (
    <motion.div variants={container} animate="visible" initial="hidden" className="grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
    <motion.img variants={items} className="w-2/3 md:w-1/2 lg:w-1/2 border border-gray-300 rounded-md flex flex-col justify-center items-center mx-auto" src={img} alt="Image" />

    {data.map((item, index) => (
        <motion.div variants={items} key={index} className={`bg-pmmGray overflow-hidden flex ${index !== 0 ? 'mt-3' : ''} rounded-lg border-2 border-gray-300`}>
            {/* Content of each result */}
            <p className="text-sm text-gray-700 p-4">{index + 1}. {item}</p>
        </motion.div>
    ))}
</motion.div>

  );
};

export default PillarResults;