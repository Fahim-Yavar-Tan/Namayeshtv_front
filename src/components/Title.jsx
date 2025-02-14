import React from "react";
import { motion } from "framer-motion";

const Title = ({ type, title }) => {
  const isSmall = type === "small";

  return (
    <div
      className={`w-full ${
        isSmall ? "h-[40px]" : "h-[70px]"
      } flex my-4 align-middle overflow-hidden`}
    >
      <div
        className={`bg-background h-full ${isSmall ? "w-2" : "w-4"} z-10`}
      ></div>
      <motion.span
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{
          type: "spring",
          stiffness: 30,
          damping: 12,
        }}
        className={`h-full origin-top ${
          isSmall ? "w-[1px]" : "w-[2px]"
        } bg-primary`}
      ></motion.span>
      <motion.h2
        initial={{ x: 300 }}
        whileInView={{ x: 0 }}
        viewport={{ once: true }}
        transition={{
          delay: 0.7,
          type: "spring",
          stiffness: 50,
          damping: 15,
        }}
        className={`text-primary ${
          isSmall ? "text-xl" : "text-3xl"
        } w-full justify-start align-middle my-auto mr-2`}
      >
        {title}
      </motion.h2>
    </div>
  );
};

export default Title;
