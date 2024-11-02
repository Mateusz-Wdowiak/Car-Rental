'use client';

import { motion, useAnimation } from 'framer-motion';
import Link from 'next/link';
import { CarTypeBoxProps } from '@/components/CarTypeBox/car-type-box.interface';

const CarTypeBox: React.FC<CarTypeBoxProps> = ({ title, desc, img, className }) => {
  const controls = useAnimation();
  const descControls = useAnimation();
  const overlayControls = useAnimation();

  const handleMouseEnter = () => {
    controls.start({ y: -250, opacity: 1 });
    descControls.start({ y: -20, opacity: 1 });
    overlayControls.start({ opacity: 0.8 });
  };

  const handleMouseLeave = () => {
    controls.start({ y: 0, opacity: 1 });
    descControls.start({ y: 0, opacity: 0 });
    overlayControls.start({ opacity: 0 });
  };

  return (
    <motion.div
      className={`${className} relative bg-cover bg-center flex flex-col justify-end items-start text-white h-96 p-4`}
      style={{ backgroundImage: `url(${img})` }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      initial={{ boxShadow: 'none' }}
      animate={{
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.4)',
        transition: { duration: 0.3 },
      }}
    >
      <motion.div
        className="absolute inset-0 bg-black"
        style={{ opacity: 0, zIndex: 0 }}
        animate={overlayControls}
      />
      <motion.h2
        className="relative text-3xl font-bold z-10 ml-4"
        animate={controls}
        initial={{ y: 0, opacity: 1 }}
      >
        {title}
      </motion.h2>
      <Link href="/cars" passHref>
        <motion.p
          className="relative text-lime-500 z-10 text-xl cursor-pointer ml-4"
          animate={controls}
          initial={{ y: 0, opacity: 1 }}
        >
          Zobacz samochody
        </motion.p>
      </Link>
      <motion.p
        className="absolute left-0 bottom-0 w-full text-center z-10 p-5"
        animate={descControls}
        initial={{ y: 0, opacity: 0 }}
        style={{ color: 'white' }}
      >
        {desc}
      </motion.p>
    </motion.div>
  );
};

export default CarTypeBox;