import React, { useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { motion } from "framer-motion";
import Namayesh from "../assets/logos/Namayesh.png";
import Menu from "./Menu";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  useEffect(() => {
    const links = document.querySelectorAll("nav ul a");
    links.forEach((link) => {
      if (link.getAttribute("href") === location.pathname) {
        link.classList.add("text-primary");
      } else {
        link.classList.remove("text-primary");
      }
    });
  }, [location.pathname]);

  return (
    <>
      <nav className="flex flex-row-reverse justify-between h-[70px] pt-6 bg-[#0d0d0d]/10 fixed z-20 top-0 left-0 w-[100vw] backdrop-blur-[2px] ">
        <Menu className=" block sm:hidden" />
        <div className=" flex-row-reverse hidden sm:flex ">
          <div className="flex flex-row-reverse">
            {/* search */}
            <CiSearch className="text-white text-xl my-auto ml-6 mr-2" />
            <div className="flex flex-row-reverse">
              {/* live */}
              <motion.div
                animate={{
                  scale: [1, 1.5, 2, 1], // Starts normal, grows, and returns to normal instantly
                  opacity: [1, 0.5, 0.2, 1], // Fully visible at the start and end
                }}
                transition={{
                  duration: 1.5, // Duration of the ping animation
                  repeat: Infinity, // Infinite loop
                  repeatType: "loop",
                  repeatDelay: 2, // Pause for 2 seconds before repeating
                }}
                className="w-2 h-2 mr-1 my-auto rounded-full bg-red-600"
              ></motion.div>

              <a href="/live" className="text-white my-auto">
                پخش زنده
              </a>
            </div>
          </div>

          {/* line */}
          <div className="w-[2px] h-6 bg-white my-auto mx-2"></div>
          {/* main flex */}
          <ul className="text-white flex flex-row-reverse gap-3 my-auto ">
            {[
              ["ارتباط با ما", "/contact"],
              ["اخبار", "/news"],
              ["برنامه ها", "/movies"],
              ["سریال", "/series"],
              ["فیلم", "/movies"],
              ["جدول پخش", "/table"],
              ["خانه", "/"],
            ].map((text, index) => (
              <motion.li
                key={index}
                className="relative"
                whileHover="hover"
                initial="initial"
              >
                <a href={text[1]} className="block py-2 px-1">
                  {text[0]}
                </a>

                {/* Line Animation */}
                <motion.div
                  className="absolute left-1/2 bottom-0 h-[2px] bg-white"
                  variants={{
                    initial: { width: "0%", left: "50%" },
                    hover: { width: "100%", left: "0%" },
                  }}
                  transition={{ duration: 0.3 }}
                ></motion.div>
              </motion.li>
            ))}
          </ul>
        </div>
        <div className="text-white mr-7 text-2xl my-auto  ">
          <img className="h-[60px]" src={Namayesh} alt="Logo" />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
