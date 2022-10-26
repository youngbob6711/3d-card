import React from 'react';
import PumpkinImg from '../img/pumpkin.svg';

// import motion
import { motion, useMotionValue, useTransform } from 'framer-motion';

const Card = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  return (
    <div style={{ perspective: 2000 }}>
      <motion.div
        style={{ x, y, rotateX, rotateY, z: 100 }}
        drag
        dragElastic={0.16}
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
        whileTap={{ cursor: 'grabbing' }}
        className='w-[400px] h-[520px] rounded-[30px] bg-gradient-to-tl from-[#0C3720]/90 to-[#5B874B] cursor-grab'
      >
        <div className='w-full h-full flex justify-center items-center'>
          <div className='flex flex-col justify-center items-center'>
            <h2 className='text-[48px] text-white absolute top-20 uppercase'>
              Heading 1
            </h2>
            <motion.div
              style={{ x, y, rotateX, rotateY, z: 100000 }}
              drag
              dragElastic={0.12}
              whileTap={{ cursor: 'grabbing' }}
            >
              <img src={PumpkinImg} alt='' />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
