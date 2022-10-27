import React from 'react';
import Logo from '../img/logo.svg';
import ShoeImg from '../img/shoe.png';

import { motion, useMotionValue, useTransform } from 'framer-motion';

const Card = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  const colors = [
    { value: '#b6a179' },
    { value: '#272425' },
    { value: '#6389cb' },
    { value: '#f2c758' },
    { value: '#ffffff' },
  ];

  return (
    // card wrapper
    <div style={{ perspective: 2000 }}>
      {/* card */}
      <motion.div
        style={{ x, y, rotateX, rotateY, z: 100 }}
        drag
        dragElastic={0.18}
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
        whileTap={{ cursor: 'grabbing' }}
        className='min-h-[600px] bg-[#E4DFDC] w-[426px] rounded-[30px] border-[4px] border-white px-[40px] py-[24px] cursor-grab'
      >
        {/* card logo */}
        <div className='mb-6'>
          <img src={Logo} alt='' />
        </div>
        {/* card title */}
        <h1 className='text-5xl mb-6 font-extrabold'>Nike Air Max Pre-Day</h1>
        {/* card subtitle */}
        <p className='max-w-[300px] text-[#000000] mb-6'>
          Taking the classic look of heritage Nike Running into a new realm, the
          Nike Air Max Pre-Day brings you a fast-paced look that's ready for
          today's world.
        </p>
        <div className='flex items-center gap-x-[20px] mb-12'>
          {/* card button */}
          <button className='bg-[#2d2b2c] text-white text-base font-medium py-[16px] px-[40px] rounded-lg'>
            Add to Bag
          </button>
          {/* card price */}
          <div className='text-[24px] font-bold text-[#000000]'>$495.00</div>
        </div>
        <ul className='flex gap-x-[10px]'>
          {colors.map((color, index) => {
            return (
              <div
                style={{ backgroundColor: color.value }}
                className='w-8 h-8 rounded-full cursor-pointer'
                key={index}
              ></div>
            );
          })}
        </ul>
        {/* card image */}
        <motion.div
          style={{ x, y, rotateX, rotateY, z: 100000 }}
          drag
          dragElastic={0.14}
          whileTap={{ cursor: 'grabbing' }}
          className='absolute w-[620px] top-12 -right-64'
        >
          <img src={ShoeImg} alt='' />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Card;
