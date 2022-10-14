import { StarIcon } from "@heroicons/react/24/solid";
import React from "react";

type Props = {};

const LaunchYourProject = (props: Props) => {
  return (
    <div className="lg:py-[110px] py-[60px] bg-cyan-600 text-white flex min-w-fit justify-center items-center">
      <div className="flex items-center flex-col space-y-5 space-x-4 text-7xl justify-center lg:flex-row">
        <h1>Launch Your</h1>
        <StarIcon className="h-16 animate-spin text-yellow-500" />
        <h1>Project Now</h1>
      </div>
    </div>
  );
};

export default LaunchYourProject;
