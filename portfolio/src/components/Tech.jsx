import React from 'react'
import {motion} from 'framer-motion';
import { RiReactjsLine } from "react-icons/ri";

const iconVariants = (duration) => ({
  initial:{y:-10},
  animate:{
    y: [10,-10],
    transition:{
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse"
    },
  },
});
const Tech = () => {
  return (
    <div className='border-b border-neutral-700 pb-24'>
    <motion.h2
     whileInView={{opacity:1, y:0}}
     initial={{opacity:0, y:-100}}
     transition={{duration:1}}
     className='my-20 text-center text-4xl'>
     Technologies
     </motion.h2> 
     <motion.div
     whileInView={{opacity:1, x:0}}
     initial={{opacity:0, x:-100}}
     transition={{duration:1}}
     className='flex flex-wrap items-center justify-center gap-4'>

   
     <motion.div
     variants={iconVariants(2)}
     initial="initial"
     animate="animate"
     className=' rounded-2xl border-4 border-neutral-800 p-4'>
     <RiReactjsLine className="text-7xl  text-cyan-400" />
     </motion.div>
     </motion.div>
    </div>
  )
}

export default Tech
