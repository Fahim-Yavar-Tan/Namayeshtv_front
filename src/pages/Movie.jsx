import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

const MovieNav = () => {
  const [seclected, setSelected] = useState("all");
  return (
    <nav>
      <ul>
        <li></li>
      </ul>
    </nav>
  );
};

const Movie = () => {
  return (
    <div className="w-full min-h-full bg-background">
      <Navbar />
      <div className="relative w-[300px] h-[150px] mx-auto pt-[100px]">
        <h1 className="text-white text-center h-full align-middle text-2xl">
          فیلم ها
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
          className="absolute right-0 left-0 bottom-0 h-[2px] origin-right bg-neutral"
        ></motion.span>
      </div>

      <Footer />
    </div>
  );
};

export default Movie;
