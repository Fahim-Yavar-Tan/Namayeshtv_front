import React, { useState, useRef, useEffect } from "react";
import Vid from "../assets/videos/Banner1.mp4";
import { motion } from "framer-motion";
import Arrow from "../assets/logos/Arrowdown.png";
import Pause from "../assets/logos/Pause.png";
import Rating from "@mui/material/Rating";

const Trailer = ({ name, setRatingOpen }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVisible, setIsVisible] = useState(false); // For button visibility
  const videoRef = useRef(null);
  const idleTimeout = useRef(null); // Reference to manage idle timeout
  const [isPlayed, setIsPlayed] = useState(false);

  // Toggle play/pause
  const togglePlay = () => {
    setIsPlayed(true);
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Stop video (pause and reset)
  const stopVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  };

  // Handle mouse movement to show the button
  useEffect(() => {
    const handleMouseMove = () => {
      setIsVisible(true);
      if (idleTimeout.current) {
        clearTimeout(idleTimeout.current);
      }
      idleTimeout.current = setTimeout(() => {
        setIsVisible(false);
      }, 2000); // Hide after 2 seconds of inactivity
    };

    // Add event listener
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      // Cleanup
      window.removeEventListener("mousemove", handleMouseMove);
      if (idleTimeout.current) {
        clearTimeout(idleTimeout.current);
      }
    };
  }, []);

  return (
    <>
      <motion.div className="h-[180px] sm:h-[100dvh] w-full  flex flex-col items-center justify-center relative overflow-hidden ">
        <video
          ref={videoRef}
          className="w-full h-full object-fill overflow-hidden"
          src={Vid}
          controls={false} // Disable native controls
        ></video>
        {/* poster */}
        {!isPlayed && (
          <div className="w-full h-full absolute top-0 right-0 bg-white"></div>
        )}
        {/* Filter overlay */}
        {!isPlaying && (
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/60 overflow-hidden"></div>
        )}

        {/* Stop Button */}
        {isVisible && isPlaying && (
          <button
            onClick={togglePlay}
            className="absolute h-[70px] w-[70px] left-1/2 bottom-1/2 translate-x-[-50%] translate-y-[50%]"
          >
            <img src={Pause} alt="" />
          </button>
        )}
      </motion.div>

      {/* Rating and Play Button */}
      <motion.div
        animate={
          isPlaying ? { scale: 0, opacity: 0 } : { scale: 1, opacity: 1 }
        }
        className=" h-[100px] sm:h-[300px] w-[100px] sm:w-[200px] origin-left flex justify-center flex-col absolute top-[70px] sm:top-auto sm:top-none sm:bottom-0 left-0 overflow-hidden "
      >
        <p className="text-center mb-0 text-xs sm:text-lg text-white my-4 ">
          امتیاز مخاطبان
        </p>
        <Rating
          className="mx-auto mb-4 "
          name="read-only"
          sx={{
            "& .MuiRating-icon": {
              fontSize: {
                xs: "1rem", // Small size on mobile
                sm: "1.5rem", // Medium size on small screens
                md: "2rem", // Normal size on larger screens
              },
            },
          }}
          value={4}
          readOnly
        />
        <button
          onClick={togglePlay}
          className="sm:w-[110px] sm:h-[40px] p-1 sm:p-0 text-sm mx-auto bg-[#852D2D] rounded-tl-2xl rounded-br-2xl text-white rounded "
        >
          پخش آنونس
        </button>
      </motion.div>

      {/* More Section */}
      <motion.div
        animate={isPlaying ? { y: 200, opacity: 0 } : {}}
        className="absolute bottom-0 flex left-1/2 translate-x-[-50%] justify-between  h-[30px] w-[150px]"
      >
        <p className="text-white">مشاهده بیشتر</p>
        <img className="size-6" src={Arrow} alt="" />
      </motion.div>

      {/* Movie Info */}
      <motion.div
        animate={isPlaying ? { x: 200, opacity: 0 } : {}}
        className=" h-[180px] sm:h-full w-1/2 absolute right-0 top-0 pr-8 text-white flex flex-col justify-end gap-4"
      >
        <div className="w-full min-h-[80px] font-bold text-sm sm:text-5xl  ">
          مرد ایرلندی
        </div>
        <div className="w-full min-h-[50px] text-xs sm:text-xl ">
          2019 | بالای 14 سال | اکشن،ماجراجویی
        </div>
        <div className="w-2/3 text-[5px] sm:text-lg sm:min-h-[100px] ">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد
        </div>

        {/* Buttons */}
        <div className=" w-[100px] sm:w-[300px] sm:min-h-[100px] flex justify-between ">
          <button
            onClick={() => setRatingOpen(true)}
            className=" w-10 sm:w-[140px] h-6 sm:h-[40px] text-[5px] border-2 sm:text-sm border-yellow-600 rounded-tl-2xl rounded-br-2xl hover:bg-yellow-600 duration-500 "
          >
            نظرسنجی
          </button>
          <button className=" w-10 sm:w-[140px] h-6 sm:h-[40px] text-[5px] sm:text-sm border-2 border-yellow-600 rounded-bl-2xl rounded-tr-2xl hover:bg-yellow-600 duration-500 ">
            درخواست پخش
          </button>
        </div>
      </motion.div>
    </>
  );
};

export default Trailer;
