// Import Swiper components and styles
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css"; // Default Swiper styles
import "../index.css"; // Custom global styles

// Import your MovieCard component
import MovieCard from "./MovieCard";

const Slider = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Swiper
        modules={[Navigation, Autoplay]}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: true,
          reverseDirection: true,
        }}
        navigation={true}
        spaceBetween={20} // Spacing between slides
        slidesPerView={5} // Default number of slides per view
        slidesPerGroup={1}
        centeredSlides={true}
        breakpoints={{
          // Define responsive behavior
          320: {
            slidesPerView: 1, // Show 2 slides on small screens
            // spaceBetween: 10,
          },
          768: {
            slidesPerView: 3, // Show 3 slides on medium screens
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 5, // Default for large screens
            spaceBetween: 20,
          },
        }}
      >
        <SwiperSlide>
          <MovieCard
            name={"پدر خوانده"}
            img={
              "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQAY2xsJVIZxm3K0gNtOMr9CSCvLdr5kdo3V3pv2HMuUkTBhFzRe5-b8NDRmO1mt5S5Xp_YyQ"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <MovieCard
            name={"تنت"}
            img={
              "https://musicart.xboxlive.com/7/14815100-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <MovieCard
            name={"ارباب حلقه ها"}
            img={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4vzi7Jpm9OTbz1nXyYLIA2ZsKsY7ZZy-oRQ&s"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <MovieCard
            name={"مرد عنکبوتی"}
            img={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg82bu5tY7bWNdelApwL6mHIs9eJf3eTmzNA&s"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <MovieCard
            name={"درون و بیرون"}
            img={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAxuYESTQuIj-RPOaflje0vjVbCo9m2m1osw&s"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <MovieCard
            name={"حوض نقاشی"}
            img={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2WKyd3T9FndQAWhrcMGXRQTew6Z3pIN7Uqw&s"
            }
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
