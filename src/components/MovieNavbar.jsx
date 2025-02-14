import React, { useState } from "react";
import { motion } from "framer-motion";

const MovieNavbar = ({ selected, setSelected, data }) => {
  const handleClick = (name) => {
    setSelected(name);
  };

  return (
    <nav className="text-white mx-auto flex flex-col-reverse py-4">
      <ul className="flex flex-row-reverse mx-auto gap-4 cursor-pointer">
        {data &&
          data.map((category) => (
            <motion.li
              key={category.id}
              className={`relative inline-block pb-2 ${
                selected === category.id ? "font-bold text-primary" : ""
              }`}
              onClick={() => handleClick(category.id)}
              whileHover="hover"
              initial="initial"
            >
              {category.name}
              <motion.div
                className="absolute left-1/2 bottom-[-5px] h-[2px] bg-white"
                variants={{
                  initial: { width: "0%", left: "50%" },
                  hover: { width: "100%", left: "0%" },
                }}
                transition={{ duration: 0.3 }}
              ></motion.div>
            </motion.li>
          ))}
        <span className="w-[2px] h-6 bg-white my-auto mx-2"></span>
        <motion.li
          onClick={() => handleClick("all")}
          className={`relative inline-block pb-2 ${
            selected === "all" ? "font-bold text-primary" : ""
          }`}
          whileHover="hover"
          initial="initial"
        >
          همه
          <motion.div
            className="absolute left-1/2 bottom-[-5px] h-[2px] bg-white"
            variants={{
              initial: { width: "0%", left: "50%" },
              hover: { width: "100%", left: "0%" },
            }}
            transition={{ duration: 0.3 }}
          ></motion.div>
        </motion.li>
      </ul>
    </nav>
  );
};

export default MovieNavbar;
