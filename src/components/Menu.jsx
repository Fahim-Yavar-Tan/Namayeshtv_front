import React, { useState } from "react";
import { motion, MotionConfig } from "framer-motion";

const Menu = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="sm:hidden">
        {open && (
          <div
            className="backdrop-blur-[20px] bg-black/60 fixed top-0 left-0 w-[100vw] h-[100dvh] z-30" // Decreased z-index slightly for backdrop
            onClick={() => setOpen(!open)}
          ></div>
        )}
        <div className="fixed top-0 left-0 w-[100vw] lg:w-[300px] h-[100dvh] overflow-hidden z-40">
          {" "}
          {/* Increased z-index of this container */}
          <div
            className="absolute top-0 left-0 z-50" // Highest z-index for the hamburger button when menu is closed
            onClick={() => setOpen(!open)}
          >
            <AnimatedHamburgerButton active={open} className="z-50" />
          </div>
          <motion.div
            className="bg-white rounded-full relative top-4 left-4 z-40" // z-index for expanding circle
            animate={open ? { scale: 40 } : { scale: 0.01 }}
            transition={{ duration: 0.7 }}
          ></motion.div>
          {open && (
            <motion.div
              className="z-60 relative flex flex-col gap-8 text-center text-2xl text-white mt-20" // Ensure menu items have the highest z-index
              transition={{ staggerChildren: 0.3 }}
            >
              <motion.div
                animate={{ x: 0, opacity: 1 }}
                initial={{ x: -100, opacity: 0 }}
                transition={{ delay: 0.5 }}
                onClick={() => setOpen(!open)}
              >
                <a href="/"> خانه </a>
              </motion.div>
              <motion.div
                animate={{ x: 0, opacity: 1 }}
                initial={{ x: -100, opacity: 0 }}
                transition={{ delay: 0.6 }}
                onClick={() => setOpen(!open)}
              >
                <a href="/table"> جدول پخش </a>
              </motion.div>
              <motion.div
                animate={{ x: 0, opacity: 1 }}
                initial={{ x: -100, opacity: 0 }}
                transition={{ delay: 0.7 }}
                onClick={() => setOpen(!open)}
              >
                <a href="/movies"> فیلم </a>
              </motion.div>
              <motion.div
                animate={{ x: 0, opacity: 1 }}
                initial={{ x: -100, opacity: 0 }}
                transition={{ delay: 0.8 }}
                onClick={() => setOpen(!open)}
              >
                <a href="/series"> سریال </a>
              </motion.div>
              <motion.div
                animate={{ x: 0, opacity: 1 }}
                initial={{ x: -100, opacity: 0 }}
                transition={{ delay: 0.9 }}
                onClick={() => setOpen(!open)}
              >
                <a href="/movies">برنامه ها </a>
              </motion.div>
              <motion.div
                animate={{ x: 0, opacity: 1 }}
                initial={{ x: -100, opacity: 0 }}
                transition={{ delay: 1 }}
                onClick={() => setOpen(!open)}
              >
                <a href="/news">اخبار </a>
              </motion.div>
              <motion.div
                animate={{ x: 0, opacity: 1 }}
                initial={{ x: -100, opacity: 0 }}
                transition={{ delay: 1.1 }}
                onClick={() => setOpen(!open)}
              >
                <a href="/contact">ارتباط با ما</a>
              </motion.div>
              <motion.div
                animate={{ x: 0, opacity: 1 }}
                initial={{ x: -100, opacity: 0 }}
                transition={{ delay: 1.2 }}
                onClick={() => setOpen(!open)}
              >
                <a href="/live">پخش زنده</a>
              </motion.div>
            </motion.div>
          )}
        </div>
      </div>
    </>
  );
};

export default Menu;

const AnimatedHamburgerButton = ({ active }) => {
  return (
    <MotionConfig
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <motion.button
        initial={false}
        animate={active ? "open" : "closed"}
        className="relative h-20 w-20 rounded-full  transition-colors  z-50" // Ensure hamburger button has a high z-index
      >
        <motion.span
          variants={VARIANTS.top}
          className="absolute h-1 w-10 bg-white" // Updated color to white
          style={{ y: "-50%", left: "50%", x: "-50%", top: "35%" }}
        />
        <motion.span
          variants={VARIANTS.middle}
          className="absolute h-1 w-10 bg-white" // Updated color to white
          style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }}
        />
        <motion.span
          variants={VARIANTS.bottom}
          className="absolute h-1 w-5 bg-white" // Updated color to white
          style={{
            x: "-50%",
            y: "50%",
            bottom: "35%",
            left: "calc(50% + 10px)",
          }}
        />
      </motion.button>
    </MotionConfig>
  );
};

const VARIANTS = {
  top: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      top: ["35%", "50%", "50%"],
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      top: ["50%", "50%", "35%"],
    },
  },
  middle: {
    open: {
      rotate: ["0deg", "0deg", "-45deg"],
    },
    closed: {
      rotate: ["-45deg", "0deg", "0deg"],
    },
  },
  bottom: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      bottom: ["35%", "50%", "50%"],
      left: "50%",
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      bottom: ["50%", "50%", "35%"],
      left: "calc(50% + 10px)",
    },
  },
};
