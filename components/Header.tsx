import React from "react";
import { motion } from "framer-motion";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="flex items-center relative z-50 max-w-7xl md:border-0 border-b border-gray-600  mx-auto text-white">
      <div className="grid md:grid-cols-3 mx-auto items-center min-w-full md:pt-[30px] px-20 xl:px-0">
        <motion.div
          className="hidden md:block"
          initial={{
            x: -300,
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
        >
          <p className="uppercase font-medium text-base">
            website development <br /> agency
          </p>
        </motion.div>
        <div className="flex flex-col justify-center items-center">
          <img
            loading="lazy"
            src="https://uploads-ssl.webflow.com/62e96e0fa0abfaca58324835/62e9d6345f58243781db2048_NazaWeb-logo-p-500.png"
            alt=""
            className="w-[94px] invert"
          />
        </div>
        <motion.div
          className="hidden md:block"
          initial={{
            x: 300,
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
        >
          <p className="uppercase font-medium text-base text-right">
            thestakifystore@gmail.com
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Header;
