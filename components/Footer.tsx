import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="text-white mt-35 max-w-7xl mx-auto px-[5%] pt-8 pb-6">
      <div className="relative z-10 self-start flex-1">
        <div>
          <div className="grid grid-cols-2 justify-items-stretch items-stretch gap-x-10 gap-y-4">
            <div className="">
              <h2 className="text-xl font-medium">Sitemap</h2>
              <div className="flex flex-col space-y-4 mt-6">
                <a
                  href=""
                  className="text-gray-500 text-lg font-medium leading-[1.4]"
                >
                  Home
                </a>
                <a
                  href=""
                  className="text-gray-500 text-lg font-medium leading-[1.4]"
                >
                  About
                </a>
              </div>
            </div>
            <div>
              <div className="">
                <h2 className="text-xl font-medium">Contact</h2>
                <div className="flex flex-col space-y-4 mt-6">
                  <a
                    href=""
                    className="text-gray-500 text-lg font-medium leading-[1.4]"
                  >
                    P: 9906658347
                  </a>
                  <a
                    href=""
                    className="text-gray-500 text-lg font-medium leading-[1.4]"
                  >
                    E: thestalkifystore@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
