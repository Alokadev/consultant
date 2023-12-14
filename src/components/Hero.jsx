import React from "react";
import Typed from "react-typed";

const Hero = () => {
  return (
    <div id="home" className="text-black">
      <div className="max-w-full w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="uppercase text-[#CEAB2B] font-bold p-2">
          Keep coding, tech wizard
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Modern Tech Tricks
        </h1>
        <div className="flex justify-center items-center">
          <Typed
          className="text-xl font-bold pl-2 md:pl-4 text-[#89222F]"
            strings={[' Tech ', ' Web Development ', ' Cyber Security ']}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="text-xl font-bold text-gray-500 px-4 mt-2">
            Transform your coding journey with us. 🚀
        </p>
        <button className="bg-[#CEAB2B] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">Contact Our Team</button>
      </div>
    </div>
  );
};

export default Hero;
