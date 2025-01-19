import React from "react";
import Namyesh from "../assets/logos/Namayesh.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Autoplay } from "swiper/modules";

const SlideContent = ({ image, title, time }) => (
  <div className="w-full overflow-hidden h-[calc(100dvh-80px)] relative">
    <img
      className="w-full h-[calc(100dvh-80px)] object-top object-cover"
      src={image}
      alt="Poster"
    />
    <div className="h-1/2 sm:h-full absolute bottom-0 text-white right-0 left-0 w-full bg-custom-gradient1 sm:bg-custom-gradient sm:top-0 sm:w-1/2 ">
      <div className="h-full absolute right-0 top-0 w-full sm:w-1/2 flex flex-col gap-4 justify-center items-center">
        <div className="h-12 w-full text-3xl flex justify-center items-center">
          <h2>{title}</h2>
        </div>
        <div className="h-12 w-full text-2xl mb-4 flex justify-center items-center">
          <p>{time}</p>
        </div>
        <div className="h-12 w-full flex justify-center items-center">
          <img className="h-[50px]" src={Namyesh} alt="Namayesh" />
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
      time: "19:00",
    },
    {
      image:
        "https://www.1pezeshk.com/wp-content/uploads/2024/10/2024-10-07_12-50-26.jpg",
      title: "مرد ایرلندی",
      time: "19:00",
    },
    {
      image:
        "https://www.1pezeshk.com/wp-content/uploads/2024/10/2024-10-07_12-50-26.jpg",
      title: "مرد ایرلندی",
      time: "19:00",
    },
    {
      image:
        "https://www.1pezeshk.com/wp-content/uploads/2024/10/2024-10-07_12-50-26.jpg",
      title: "مرد ایرلندی",
      time: "19:00",
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
      <div className="w-full h-[80px] bg-[#740000] flex p-4 items-center relative">
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
