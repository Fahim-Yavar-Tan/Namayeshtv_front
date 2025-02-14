import React, { useRef, useEffect, useState } from "react";
import useHorizontalScroll from "../hooks/useHorizontalScroll"; // Import the custom hook
import { motion } from "framer-motion";
import useAxios from "../hooks/useAxios";
import Namayesh from "../assets/logos/Namayesh.png";

function formatTime(hours, minutes) {
  return `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}`;
}

// get the timeline distance
function getCurrentDistance(inputHour = null) {
  const now = new Date();
  const hours = inputHour !== null ? inputHour : now.getHours();
  const minutes = inputHour !== null ? 0 : now.getMinutes();
  const totalMinutes = 1440 - (hours * 60 + minutes);
  return Math.floor(totalMinutes * 6.66666);
}

// Utility function to get the nearest past half-hour slot
function getNearestHalfHourTime() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();

  // Determine the nearest past half-hour slot
  const nearestHalfHour =
    minutes < 30 ? formatTime(hours, 0) : formatTime(hours, 30);
  return nearestHalfHour;
}

// filter the movies played today
function filterMoviesByToday(movies) {
  const today = new Date().toISOString().split("T")[0]; // Get today's date in "YYYY-MM-DD" format
  return movies.filter((movie) => movie.date === today);
}

const TimeSlots = ({ currentSlotRef }) => {
  const timeSlots = [];
  const currentTimeSlot = getNearestHalfHourTime();

  for (let hour = 0; hour < 24; hour++) {
    timeSlots.push(formatTime(hour, 0));
    timeSlots.push(formatTime(hour, 30));
  }

  return (
    <div className="flex flex-row-reverse ">
      {timeSlots.map((time, index) => {
        return (
          <div
            key={index}
            ref={time === currentTimeSlot ? currentSlotRef : null}
            className={`time-slot ${
              time === currentTimeSlot
                ? "bg-secondary relative  h-[60px] w-[200px] text-xl text-center pt-4 min-w-[200px] flex-shrink-0 border-x border-black/40 z-20"
                : "bg-secondary relative  h-[60px] w-[200px] text-xl text-center pt-4 min-w-[200px] flex-shrink-0 border-x border-black/40"
            }`}
          >
            {time}
            {time === currentTimeSlot && (
              <motion.div
                c
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
                className="w-2 h-2 mr-1 my-auto absolute left-16 top-6 rounded-full bg-red-600"
              ></motion.div>
            )}
          </div>
        );
      })}
    </div>
  );
};

const Table = () => {
  const scrollRef = useHorizontalScroll();
  const currentSlotRef = useRef(null);
  const { data, loading, error } = useAxios("/movies/conductor");
  const [todaysMovies, setTodaysMovies] = useState([]);
  useEffect(() => {
    if (data) {
      setTodaysMovies(filterMoviesByToday(data));
    }
  }, [data]);
  console.log(todaysMovies);

  useEffect(() => {
    if (currentSlotRef.current && scrollRef.current) {
      const container = scrollRef.current;
      const currentSlot = currentSlotRef.current;

      const containerLeft = container.getBoundingClientRect().left;
      const slotLeft = currentSlot.getBoundingClientRect().left;

      container.scrollLeft +=
        slotLeft -
        containerLeft -
        container.clientWidth / 2 +
        currentSlot.clientWidth / 2;
    }
  }, [scrollRef]);

  return (
    <div className="flex flex-row justify-center">
      <div
        ref={scrollRef}
        className="bg-background border border-white/30 shadow-lg h-[150px] w-[1000px]  overflow-x-auto hide-scrollbar relative horizontal-scroll"
      >
        <div className="h-[60px] min-w-full flex z-20">
          {/* timelines */}
          <TimeSlots currentSlotRef={currentSlotRef} />
        </div>
        <span
          className="w-[2px] h-full absolute top-0 bg-red-500 z-10 "
          style={{ right: getCurrentDistance() }}
        >
          {/* redline */}
        </span>

        <div>
          {/* programs here */}

          {todaysMovies.map((movie) => (
            <motion.div
              key={movie.id}
              whileHover={{ scale: 1.05 }}
              className="h-[90px] w-[800px] text-white pt-6 pr-4 text-xl bg-accent3 border-4 border-black/70 absolute z-0"
              style={{
                right: getCurrentDistance(movie.end_time),
              }}
            >
              {movie.movies.title_fa} (
              {new Date(movie.movies.release_date).getFullYear()})
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Table;
