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
  const slides = [
    {
      image:
        "https://www.1pezeshk.com/wp-content/uploads/2024/10/2024-10-07_12-50-26.jpg",
      title: "مرد ایرلندی",
      time: "یکشنبه ساعت 18:00",
    },
    {
      image:
        "https://img.englishcinemakyiv.com/nKizXKvqQfZzAMBylGXBi7TuU37mFVp7Mb9phhtftSw/resize:fill:800:450:1:0/gravity:sm/aHR0cHM6Ly9leHBhdGNpbmVtYXByb2QuYmxvYi5jb3JlLndpbmRvd3MubmV0L2ltYWdlcy82MGMzNzFhMy0yNzQyLTQwZWYtYTQwOS1kMzE0NmI0YTNlNDQuanBn.jpg",
      title: "میان ستاره ای",
      time: "جمعه ساعت 8:00",
    },
    {
      image:
        "https://w0.peakpx.com/wallpaper/66/537/HD-wallpaper-brave-2012-luminos-orange-redhead-brave-horse-arrow-fantasy-girl-merida-archer-princess-disney-blue.jpg",
      title: "دلیر",
      time: "شنبه ساعت 14:00",
    },
  ];

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
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <SlideContent
              image={slide.image}
              title={slide.title}
              time={slide.time}
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
