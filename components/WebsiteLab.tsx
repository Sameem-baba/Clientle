import { GlobeAltIcon } from "@heroicons/react/24/outline";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

const WebsiteLab = (props: Props) => {
  return (
    <div className="flex max-w-7xl text-white mx-auto flex-col justify-center h-fit p-[5%] items-center">
      <div className="max-w-fit flex items-center flex-col space-y-4  space-x-4 md:space-y-0 md:flex-row">
        <motion.h2
          initial={{
            x: -200,
          }}
          whileInView={{
            x: 0,
          }}
          transition={{
            duration: 1.5,
          }}
          className="text-7xl font-medium"
        >
          Magic
        </motion.h2>
        <GlobeAltIcon className="h-20 text-cyan-600" />
        <motion.h2
          initial={{
            x: 200,
          }}
          whileInView={{
            x: 0,
          }}
          transition={{
            duration: 1.5,
          }}
          className="text-7xl font-medium"
        >
          Lab.
        </motion.h2>
      </div>
      <div className="grid grid-cols-1 gap-x-10 mt-20 gap-y-[50px] md:grid-cols-2 xl:grid-cols-3 place-content-center">
        <div className="min-h-fit flex flex-col justify-center items-center">
          <div className="flex w-24 h-24 justify-center items-center rounded-full bg-[#f64d52]">
            <img
              src="https://uploads-ssl.webflow.com/62e96e0fa0abfaca58324835/62ecb07951782c070d3ffb4e_landing-page-p-500.png"
              alt=""
              className="max-w-full w-12 inline-block"
            />
          </div>
          <div className="flex flex-col justify-items-center items-center">
            <h3 className="text-2xl font-semibold text-center my-5">
              Landing Page
            </h3>
            <p className="text-center text-gray-500 text-2xl font-semibold">
              An Interactive NFT Landing page to get your community excited
              about your project
              <strong>
                <br />
              </strong>
            </p>
          </div>
        </div>
        <div className="min-h-fit flex flex-col justify-center items-center">
          <div className="flex w-24 h-24 justify-center items-center rounded-full bg-[#548bf4]">
            <img
              src="https://uploads-ssl.webflow.com/62e96e0fa0abfaca58324835/62ecb0f037620c31a5d26a2e_browser%20(1)-p-500.png"
              alt=""
              className="max-w-full w-12 inline-block"
            />
          </div>
          <div className="flex flex-col justify-items-center items-center">
            <h3 className="text-2xl font-semibold text-center my-5">
              Working Page
            </h3>
            <p className="text-center text-gray-500 text-2xl font-semibold">
              User friendly site that makes sure your community has an enjoyable
              experience visiting it
              <strong>
                <br />
              </strong>
            </p>
          </div>
        </div>
        <div className="min-h-fit flex flex-col justify-center items-center">
          <div className="flex w-24 h-24 justify-center items-center rounded-full bg-[#ffaac3]">
            <img
              src="https://uploads-ssl.webflow.com/62e96e0fa0abfaca58324835/62ecb079b0a5d8fc4b76eac7_rocket-p-500.png"
              alt=""
              className="max-w-full w-12 inline-block"
            />
          </div>
          <div className="flex flex-col justify-items-center items-center">
            <h3 className="text-2xl font-semibold text-center my-5">
              EPIC Launch
            </h3>
            <p className="text-center text-gray-500 text-2xl font-semibold">
              Communication, Support & maintenance ensuring a great Project
              Launch
              <strong>
                <br />
              </strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebsiteLab;
