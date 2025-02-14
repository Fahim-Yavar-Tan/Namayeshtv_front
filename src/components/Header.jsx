import React from "react";
import Namyesh from "../assets/logos/Namayesh.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import useAxios from "../hooks/useAxios";

const SlideContent = ({ image, title, time }) => (
  <div className="w-full overflow-hidden h-[calc(100dvh-80px)] relative">
    <img
      className="w-full h-[calc(100dvh-80px)] object-top object-cover"
      src={image}
      alt="Poster"
    />
    <div className="h-1/2 sm:h-full absolute bottom-0 text-white right-0 left-0 w-full bg-custom-gradient1 sm:bg-custom-gradient sm:top-0 sm:w-1/2 ">
      <div className="h-full absolute right-0 top-0 w-full sm:w-1/2 flex flex-col gap-4 justify-center items-center">
        <div className="h-12 w-full text-3xl sm:text-5xl font-bold flex justify-center items-center">
          <motion.h2
            initial={{ x: 100 }}
            whileInView={{ x: 0 }}
            transition={{ delay: 0.1, duration: 2 }}
          >
            {title}
          </motion.h2>
        </div>
        <motion.div
          initial={{ x: 100 }}
          whileInView={{ x: 0 }}
          transition={{ delay: 0.3, duration: 2.6 }}
          className="h-12 w-full text-2xl sm:text-3xl mb-4 flex justify-center items-center"
        >
          <p>{time}</p>
        </motion.div>
        <div className="h-12 w-full flex justify-center items-center">
          {/* <img className="h-[50px]" src={Namyesh} alt="Namayesh" /> */}
        </div>
      </div>
    </div>
  </div>
);

const Header = () => {
  const { data, loading, error } = useAxios("/movies/slider");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;
  console.log(error);
  console.log(data);
  const baseURL = process.env.REACT_APP_BASE_URL;

  return (
    <>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 5000, reverseDirection: true }}
        loop={true}
        modules={[Autoplay]}
        speed={1500}
        // direction="rtl"
      >
        {data.map((slide) => (
          <SwiperSlide key={slide.id}>
            <SlideContent
              image={`${baseURL}${slide.image}`} // Adjust the prefix accordingly
              title={slide.title}
              time={slide.text}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="w-full h-[80px] bg-highlight flex p-4 items-center relative">
        <span
          className="w-[3px] h-[75%] absolute top-2 right-1/2 
         bg-white"
        ></span>
        <div className="w-1/2 h-full flex items-center">
          <img className="h-full mx-auto" src={Namyesh} alt="" />
        </div>
        <div className="w-1/2 h-full flex items-center">
          <img className="h-full mx-auto" src={Namyesh} alt="" />
        </div>
      </div>
    </>
  );
};

export default Header;
