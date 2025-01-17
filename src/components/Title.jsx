import React from "react";
import { motion } from "framer-motion";

const Title = ({ type, title }) => {
  return (
    <div className="w-full h-[70px] flex my-4 align-middle overflow-hidden">
      <div className="bg-[#0d0d0d] h-full w-4 z-10"></div>
      <motion.span
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{
          type: "spring",
          stiffness: 30,
          damping: 12,
        }}
        className="h-full origin-top w-[2px] bg-[#e0a55c]"
      ></motion.span>
      <motion.h2
        initial={{ x: 100 }}
        whileInView={{ x: 0 }}
        viewport={{ once: true }}
        transition={{
          delay: 0.7,
          type: "spring",
          stiffness: 50,
          damping: 15,
        }}
        className="text-[#e0a55c] text-3xl align-middle text-center my-auto mr-2"
      >
        {title}
      </motion.h2>
    </div>
  );
};

export default Title;
