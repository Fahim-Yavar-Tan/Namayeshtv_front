import React, { useEffect, useRef } from "react";
import vid1 from "../assets/videos/Banner2.mp4";
import vid2 from "../assets/videos/Banner1.mp4";
import { motion } from "framer-motion";

const Banner = ({ type }) => {
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.play();
        } else {
          entry.target.pause();
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5, // At least 50% of the video should be visible
    });

    if (videoRef1.current) observer.observe(videoRef1.current);
    if (videoRef2.current) observer.observe(videoRef2.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return type === 1 ? (
    <div className="w-full h-[300px] relative overflow-hidden">
      {/* Video Section */}
      <div className="absolute top-0 right-0 left-0 h-1/2 sm:h-full w-full sm:w-1/2 inline-block">
        <video
          ref={videoRef1}
          src={vid1}
          loop
          muted
          playsInline
          className="inset-0 w-full h-full object-cover"
        ></video>
      </div>

      {/* Gradient Section */}
      <div className="absolute sm:top-0 left-0 h-1/2 bottom-0  sm:h-full w-full sm:w-1/2 bg-gradient-to-b from-[#0b0b0b] to-highlight sm:bg-gradient-to-r sm:from-highlight sm:to-[#0b0b0b] inline-block">
        <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start h-full px-6 space-x-4">
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-3xl text-white"
          >
            فیلم های منتخب،
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 1.2 }}
            viewport={{ once: true }}
            className="text-5xl font-bold text-white"
          >
            برای هر سلیقه!
          </motion.div>
        </div>
      </div>
    </div>
  ) : (
    <div className="w-full h-[300px] relative overflow-auto">
      {/* Gradient Section */}
      <div className="absolute top-0 right-0 h-1/2 sm:h-full w-full sm:w-1/2 bg-gradient-to-b sm:bg-gradient-to-l from-highlight to-[#0b0b0b] inline-block">
        <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start h-full px-6 space-x-4">
          <motion.div
            initial={{ opacity: 0, x: 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-3xl text-white"
          >
            سینما در خانه شما،
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 1.2 }}
            viewport={{ once: true }}
            className="text-5xl font-bold text-white"
          >
            هر لحظه!
          </motion.div>
        </div>
      </div>
      {/* Video Section */}
      <div className="absolute bottom-0 sm:top-0 left-0 h-1/2 sm:h-full w-full sm:w-1/2  inline-block">
        <video
          ref={videoRef2}
          src={vid2}
          loop
          muted
          playsInline
          className="inset-0 w-full h-full object-cover"
        ></video>
      </div>
    </div>
  );
};

export default Banner;
