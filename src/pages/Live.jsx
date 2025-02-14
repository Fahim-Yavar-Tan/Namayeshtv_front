import React from "react";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

const Live = () => {
  return (
    <>
      <div className="w-[100wv] h-[100dvh] bg-background pt-[100px] ">
        <Navbar />
        <div className="w-[100vw] h-[50px]  relative">
          <div className="w-[200px] absolute h-full left-1/2 translate-x-[-50%] ">
            <div className="relative h-full ">
              <h1 className="text-white text-center h-full align-middle text-2xl  ">
                پخش زنده
              </h1>
              <motion.span
                animate={{ scale: 1 }}
                initial={{ scale: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 30, // Slower movement
                  damping: 12, // Smoother stop
                  duration: 1.5, // Ensures the animation runs for 1.5 seconds
                }}
                className="absolute right-0 left-0 bottom-0 h-[2px] origin-right bg-primary "
              ></motion.span>
            </div>
          </div>
        </div>
        {/* player */}
        <div className="text-white w-[90vw] h-[400px] border-primary border-2 rounded-tl-3xl rounded-br-3xl mx-auto mt-[30px] "></div>
      </div>
    </>
  );
};

export default Live;
