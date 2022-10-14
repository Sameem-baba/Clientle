import React from "react";
import { motion } from "framer-motion";

type Props = {};

const WorkWithUs = (props: Props) => {
  return (
    <div className="py-[30px] text-white min-h-fit overflow-hidden relative max-w-7xl mx-auto">
      <div className="relative self-start flex-1 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-x-[100px] gap-y-[16px]">
          <div>
            <div>
              <div>
                <img
                  src="https://uploads-ssl.webflow.com/62e96e0fa0abfaca58324835/62ec1230d6671b4532fe5bc3_community.png"
                  alt=""
                  className="px-5 md:px-0"
                />
              </div>
            </div>
          </div>
          <div className="">
            <div className="mt-[25px]">
              <motion.h2
                initial={{
                  y: 200,
                }}
                whileInView={{
                  y: 0,
                }}
                transition={{
                  duration: 1.5,
                }}
                className="text-5xl md:text-7xl md:text-left text-center font-medium leading-[1]"
              >
                Grow your community by <br /> working with us.
              </motion.h2>
            </div>
            <div className="mt-10">
              <motion.p
                initial={{
                  y: 200,
                }}
                whileInView={{
                  y: 0,
                }}
                transition={{
                  duration: 1.5,
                }}
                className="text-2xl leading-[1.2] font-normal mb-[10px]"
              >
                We take care of all the tech for your project so you can focus
                on the community that supports your project
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkWithUs;
