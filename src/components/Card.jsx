import React from "react";
import ActorImg from "../assets/images/Actor.png";
import { motion } from "framer-motion";

const Card = ({ name, img, link }) => {
  return (
    <motion.div
      whileHover={{ scale: 0.98 }}
      whileTap={{ scale: 1.02 }}
      className="w-[150px] h-[220px] mx-auto flex flex-col shrink-0"
    >
      <div className="w-full h-[190px] rounded-tl-3xl rounded-br-3xl overflow-hidden">
        <a href={link}>
          <img
            src={img ? img : ActorImg}
            alt={name}
            className="w-full h-full object-cover"
          />
        </a>
      </div>
      <div className="w-full h-[30px] flex items-center justify-center ">
        <h4 className="text-white text-center">{name}</h4>
      </div>
    </motion.div>
  );
};

export default Card;
