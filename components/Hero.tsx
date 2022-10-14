import React from "react";
import { ChevronDownIcon, StarIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="w-full bg-black flex-col space-y-24 md:space-y-0  mx-auto h-full md:h-[84vh] relative max-w-7xl">
      <div className="flex flex-col xl:flex-row items-center mt-20 md:mt-0 px-10 h-full md:h-[70%] justify-center space-x-4">
        <motion.div
          initial={{
            scale: 0.5,
            opacity: 0,
          }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="text-6xl md:text-8xl font-semibold text-white"
        >
          Launching
        </motion.div>
        <div className="items-center">
          <StarIcon className="h-8 text-teal-500 animate-spin transition-all duration-1000" />
        </div>
        <motion.div
          initial={{
            scale: 0.5,
            opacity: 0,
          }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="text-6xl md:text-8xl font-semibold text-white uppercase"
        >
          Epic
        </motion.div>
        <div className="items-center">
          <StarIcon className="h-8 text-teal-500 animate-spin transition-all duration-1000" />
        </div>
        <motion.div
          initial={{
            scale: 0.5,
            opacity: 0,
          }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="text-6xl md:text-8xl font-semibold text-white"
        >
          Websites
        </motion.div>
      </div>
      <motion.div
        initial={{
          x: 400,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="w-full flex md:justify-end justify-center text-base items-center text-gray-500 md:pr-10"
      >
        <p className=" text-center md:text-right md:w-1/3">
          With our years of knowledge and experience, we help brands and
          upcoming entrepreneurs launch Successful projects!
        </p>
      </motion.div>
      <div className="w-full flex flex-col justify-center items-center mt-10">
        <ChevronDownIcon className="h-6 font-bold animate-bounce text-white" />
      </div>
    </div>
  );
};

export default Hero;
