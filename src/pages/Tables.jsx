import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import useAxios from "../hooks/useAxios";

const TimelineHeader = () => {
  const times = [
    "01:00",
    "03:00",
    "05:00",
    "07:00",
    "09:00",
    "11:00",
    "13:00",
    "15:00",
    "17:00",
    "19:00",
    "21:00",
    "23:00",
  ];

  const [currentTime, setCurrentTime] = useState(null);

  useEffect(() => {
    const getCurrentTime = () => {
      const now = new Date();
      let hour = now.getHours(); // Get the current hour
      // Find the last odd hour
      if (hour % 2 === 0) {
        hour -= 1;
      }
      const lastOddHour = hour.toString().padStart(2, "0"); // Ensure the hour is two digits
      const currentHour = `${lastOddHour}:00`; // Only use the hour part for comparison
      setCurrentTime(currentHour);
    };

    getCurrentTime();
    const intervalId = setInterval(getCurrentTime, 60000); // Update every minute

    return () => clearInterval(intervalId);
  }, []);

  return (
    <motion.thead
      initial={{ x: 500, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 2, delay: 1 }}
    >
      <tr>
        <th></th>
        {times.map((time, index) => (
          <motion.th
            key={time}
            className={`p-2 bg-neutral border border-y-transparent relative border-x-black/20 text-white text-center text-sm ${
              currentTime === time ? " text-white" : ""
            }  ${index === 11 ? "rounded-tl-3xl" : ""} `}
            animate={
              currentTime === time
                ? {
                    backgroundColor: ["#ffc300", "#55218f", "#ffc300"],
                  }
                : {}
            }
            transition={{
              duration: 1.5, // Duration of the ping animation
              repeat: Infinity, // Infinite loop
              repeatType: "loop",
              repeatDelay: 2, // Pause for 2 seconds before repeating
            }}
          >
            {time}
            {currentTime === time && (
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
                className="w-2 h-2 mr-1 my-auto rounded-full bg-red-600 absolute left-5 bottom-[14px] "
              ></motion.div>
            )}
          </motion.th>
        ))}
      </tr>
    </motion.thead>
  );
};

function MovieSchedule({ scheduleData }) {
  const timeSlots = [
    "1-3",
    "3-5",
    "5-7",
    "7-9",
    "9-11",
    "11-13",
    "13-15",
    "15-17",
    "17-19",
    "19-21",
    "21-23",
    "23-1",
  ];
  const persianDaysOfWeek = [
    "شنبه",
    "یکشنبه",
    "دوشنبه",
    "سه‌شنبه",
    "چهارشنبه",
    "پنجشنبه",
    "جمعه",
  ];

  const [hoveredMovie, setHoveredMovie] = useState(null);
  const BASE_URL = process.env.REACT_APP_BASE_URL;

  const getMovieForSlot = (day, slot) => {
    const movie =
      scheduleData.find(
        (entry) =>
          parseInt(entry.day) === day &&
          `${entry.start_time}-${entry.end_time}` === slot
      )?.movies || {};

    return [
      movie.title_fa || "-",
      movie.landscape_image || "-",
      movie.text_fa || "-",
    ];
  };

  const handleMouseEnter = (event, day, slot) => {
    const movie = getMovieForSlot(day, slot);
    setHoveredMovie({
      title: movie[0],
      image: movie[1],
      text: movie[2],
      posX: event.clientX,
      posY: event.clientY,
    });
  };

  const handleMouseLeave = () => {
    setHoveredMovie(null);
  };

  return (
    <div className="overflow-x-auto p-4">
      <table className="mx-auto shadow-md rounded-lg border-separate border-spacing-y-4">
        <TimelineHeader />
        <tbody>
          {/* {console.log(`persiondays: ${persianDaysOfWeek}`)} */}
          {persianDaysOfWeek.map((day, index) => (
            <motion.tr
              initial={{ x: 500, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 2, delay: 2.1 - index * 0.3 }}
              key={index}
            >
              <td className="px-1 py-3 w-[100px] h-9 bg-background text-white font-semibold">
                {day}
              </td>

              {timeSlots.map((slot) => (
                <td
                  key={slot}
                  className={`p-[2px] w-[100px] h-9 border border-black/35 text-[12px] text-center ${
                    (index === 6) & (slot === "1-3")
                      ? "rounded-br-3xl overflow-hidden"
                      : ""
                  } ${index % 2 === 0 ? "bg-accent" : "bg-secondary"}`}
                  onMouseEnter={(event) =>
                    handleMouseEnter(event, index + 1, slot)
                  }
                  onMouseLeave={handleMouseLeave}
                >
                  {getMovieForSlot(index + 1, slot)[0]}
                  {console.log(slot)}
                </td>
              ))}
            </motion.tr>
          ))}
        </tbody>
      </table>
      {hoveredMovie && (
        <div
          className="absolute w-[300px] h-[400px] overflow-hidden rounded-tl-3xl rounded-br-3xl bg-background shadow-lg border border-white/35"
          style={{
            top: `${hoveredMovie.posY - 50}px`,
            left: `${hoveredMovie.posX + 50}px`,
          }}
        >
          <img
            src={`${BASE_URL}${hoveredMovie.image}`}
            alt={hoveredMovie.title}
            className="w-full h-1/2"
          />
          <h3 className="text-white text-2xl p-3">{hoveredMovie.title}</h3>
          {console.log(hoveredMovie.image)}
          <p className="text-white p-3 ">{hoveredMovie.text}</p>
        </div>
      )}
      <div className="h-[300px]" />
    </div>
  );
}

const Tables = () => {
  const { data, loading, error } = useAxios("/movies/conductor");

  function filterCurrentPersianWeek(data) {
    const today = new Date();
    const currentDay = today.getDay(); // 0 is Sunday, 6 is Saturday
    const startOfPersianWeek = new Date(today);
    startOfPersianWeek.setDate(today.getDate() - ((currentDay + 1) % 7)); // Start from the previous Saturday
    const endOfPersianWeek = new Date(startOfPersianWeek);
    endOfPersianWeek.setDate(startOfPersianWeek.getDate() + 6); // End on the next Friday

    return data.filter((item) => {
      const itemDate = new Date(item.date);
      return itemDate >= startOfPersianWeek && itemDate <= endOfPersianWeek;
    });
  }

  return (
    <div className="w-full min-h-[100dvh] bg-background">
      <Navbar />
      <div className="relative w-[300px] h-[150px] mx-auto pt-[100px]">
        <h1 className="text-white text-center h-full align-middle text-2xl">
          جدول پخش نمایش
        </h1>
        <motion.span
          animate={{ scale: 1 }}
          initial={{ scale: 0 }}
          transition={{
            type: "spring",
            stiffness: 30, // Slower movement
            damping: 12, // Smoother stop
            duration: 1.5, // Ensures the animation runs for 1.5 seconds
          }}
          className="absolute right-0 left-0 bottom-0 h-[2px] origin-right bg-neutral"
        ></motion.span>
      </div>
      {data && filterCurrentPersianWeek(data) && (
        <MovieSchedule scheduleData={filterCurrentPersianWeek(data)} />
      )}
    </div>
  );
};

export default Tables;
