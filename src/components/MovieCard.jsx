import React, { useState } from "react";
import { motion } from "framer-motion";

const MovieCard = ({ img, name, year, duration }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="h-[300px] w-[220px] m-8 mx-auto ">
      <div className="h-[270px] w-full overflow-hidden relative rounded-tl-3xl rounded-br-3xl">
        {/* Outer Motion div with scaling */}
        <motion.div
          animate={{ scale: isHovered ? 1.1 : 1 }}
          className="w-full h-full overflow-hidden "
        >
          <img src={img} alt={name} className="w-full h-full object-cover" />
        </motion.div>

        <motion.div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          animate={{
            backdropFilter: isHovered ? "blur(4px)" : "blur(0px)",
            opacity: isHovered ? 1 : 0,
          }}
          className="absolute top-0 left-0 right-0 bottom-0 bg-white/5"
        >
          <div className=" mt-[80px] w-full h-1/3 pr-2 text-white">
            <div className="w-full h-1/3 bg-yellow-400/30">{name}</div>
            <div className="w-full h-1/3">{year}</div>
            <div className="w-full h-1/3">{duration}</div>
          </div>
        </motion.div>
      </div>
      <div className=" w-full h-[30px]">
        <h3 className="text-center text-white">{name}</h3>
      </div>
    </div>
  );
};

export default MovieCard;
