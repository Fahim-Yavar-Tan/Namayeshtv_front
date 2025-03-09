import React, { useState, useRef, useEffect } from "react";

import { motion } from "framer-motion";
import StarBorderIcon from "@mui/icons-material/StarBorder";

import Arrow from "../assets/logos/Arrowdown.png";
import Pause from "../assets/logos/pause.png";
import Play from "../assets/logos/playButton.png";
import Rating from "@mui/material/Rating";
import jalaali from "jalaali-js";

function getPersianYear(dateString) {
  // Parse the input date string
  const [year, month, day] = dateString.split("-").map(Number);

  // Convert the Gregorian date to Jalali (Persian) date
  const jalaliDate = jalaali.toJalaali(year, month, day);

  // Return the Persian year
  return jalaliDate.jy;
}

const TrailerPop = ({ baseURL, Vid, setIsOpen }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true); // Start as playing by default
  const [showControls, setShowControls] = useState(false);

  useEffect(() => {
    let timeout;

    // Automatically play the video when the component mounts
    if (videoRef.current) {
      videoRef.current.play();
    }

    // Function to hide controls after inactivity
    const resetHideControlsTimer = () => {
      setShowControls(true); // Show controls on interaction
      clearTimeout(timeout); // Clear previous timeout
      timeout = setTimeout(() => setShowControls(false), 3000); // Set new timeout
    };

    // Add event listener for mouse movement
    window.addEventListener("mousemove", resetHideControlsTimer);

    return () => {
      clearTimeout(timeout); // Clean up timeout
      window.removeEventListener("mousemove", resetHideControlsTimer); // Remove listener
    };
  }, []);

  // Toggle play/pause
  const togglePlayPause = (e) => {
    e.stopPropagation(); // Prevent popup closure
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);

    // Reset controls timeout when playing/pausing
    setShowControls(true);
  };

  return (
    <div
      onClick={() => setIsOpen(false)}
      className="w-full h-[100dvh] flex items-center backdrop-blur-md bg-background/10 fixed top-0 right-0 z-30"
    >
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        className="w-[90%] bg-background/30 rounded-2xl mx-auto"
      >
        <div
          className="w-full mx-auto relative"
          onClick={(e) => e.stopPropagation()} // Prevent clicks inside this area from closing the popup
        >
          <video
            ref={videoRef}
            className="w-full rounded-xl"
            src={`${baseURL}${Vid}`}
          />
          {showControls && (
            <div
              className="absolute inset-0 flex justify-center items-center bg-black/20"
              onClick={(e) => e.stopPropagation()} // Prevent button clicks from closing the popup
            >
              <img
                src={isPlaying ? Pause : Play}
                alt={isPlaying ? "Pause" : "Play"}
                className="w-12 h-12 cursor-pointer"
                onClick={togglePlayPause}
              />
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

const MobileTrailer = ({
  text,
  name,
  setRatingOpen,
  Vid,
  year,
  category,
  ageRate,
  movieRate,
  poster,
}) => {
  const baseURL = process.env.REACT_APP_BASE_URL;

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="w-full bg-background">
        {/* image and name */}
        <div className="relative w-full h-[90dvh] ">
          <img
            src={`${baseURL}${poster}`}
            className="absolute w-full h-full object-cover"
            alt="movie img"
          />
          <div className="absolute w-full h-[150px] flex flex-col bottom-0 bg-custom-gradient1">
            <motion.h2
              animate={{ x: 0, opacity: 1 }}
              initial={{ x: 100, opacity: 0 }}
              transition={{ duration: 1.2, delay: 1.5 }}
              className="mb-2 text-white text-center w-full text-3xl font-bold"
            >
              {name}
            </motion.h2>
            <motion.div
              animate={{ x: 0, opacity: 1 }}
              initial={{ x: 100, opacity: 0 }}
              transition={{ duration: 1.2, delay: 1.7 }}
              className="flex justify-center"
            >
              <Rating
                emptyIcon={<StarBorderIcon style={{ color: "lightyellow" }} />}
                dir="ltr"
                className="mx-auto mb-4 "
                name="read-only"
                value={movieRate}
                readOnly
              />
            </motion.div>
            <motion.button
              animate={{ x: 0, opacity: 1 }}
              initial={{ x: 100, opacity: 0 }}
              transition={{ duration: 1.2, delay: 1.9 }}
              onClick={() => setIsOpen(true)}
              className="bg-highlight w-[100px] h-[35px] mx-auto rounded-lg text-white"
            >
              پخش انونس
            </motion.button>
          </div>
        </div>

        {/* details  */}
        <div className="w-full mt-[20dvh] text-white p-8">
          <h2 className="text-3xl font-bold">{name}</h2>
          <div className="w-full min-h-[50px] text-sm text-white/70 mt-2">
            {getPersianYear(year)} | بالای {ageRate} سال | اکشن،ماجراجویی
          </div>
          <p>{text}</p>
        </div>
        {/* Buttons */}
        <div className=" w-full p-8 text-white  flex justify-right gap-4 ">
          <button
            onClick={() => setRatingOpen(true)}
            className=" w-[100px] h-[40px] text-xs border-2 sm:text-sm border-secondary rounded-tl-2xl rounded-br-2xl hover:bg-secondary duration-500 "
          >
            نظرسنجی
          </button>
          <button className=" w-[100px] h-[40px] text-xs border-2 border-secondary rounded-bl-2xl rounded-tr-2xl hover:bg-secondary duration-500 ">
            درخواست پخش
          </button>
        </div>
        {isOpen && (
          <TrailerPop Vid={Vid} baseURL={baseURL} setIsOpen={setIsOpen} />
        )}
      </div>
    </>
  );
};

export default MobileTrailer;
