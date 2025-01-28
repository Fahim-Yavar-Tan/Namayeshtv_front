import React, { useRef, useEffect } from "react";
import useHorizontalScroll from "../hooks/useHorizontalScroll"; // Import the custom hook
import { motion } from "framer-motion";
function formatTime(hours, minutes) {
  return `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}`;
}

// get the timeline distance
function getCurrentDistance() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const totalMinutes = 1440 - (hours * 60 + minutes);
  return Math.floor(totalMinutes * 6.66);
}
console.log(getCurrentDistance());

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
                ? "bg-accent relative text-white h-[60px] w-[200px] text-xl text-center pt-4 min-w-[200px] flex-shrink-0 border-x border-white/30 z-20"
                : "bg-accent relative text-white h-[60px] w-[200px] text-xl text-center pt-4 min-w-[200px] flex-shrink-0 border-x border-white/30"
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
  const scrollRef = useHorizontalScroll(); // Apply the custom hook here
  const currentSlotRef = useRef(null);

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
    <div
      ref={scrollRef}
      className="bg-background border border-white/30 shadow-lg h-[150px] w-[1000px] mx-auto overflow-x-auto hide-scrollbar relative horizontal-scroll"
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
        <div className="h-[90px] w-[600px] text-white pt-6 pr-4 text-xl bg-accent border-4 border-black/70 absolute right-[3800px] z-0  ">
          گردباد ها (2024)
        </div>
      </div>
    </div>
  );
};

export default Table;
