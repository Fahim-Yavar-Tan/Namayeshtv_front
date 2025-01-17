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
          delay: 5000,
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
            name={"یه چیزی"}
            img={
              "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQAY2xsJVIZxm3K0gNtOMr9CSCvLdr5kdo3V3pv2HMuUkTBhFzRe5-b8NDRmO1mt5S5Xp_YyQ"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <MovieCard
            name={"یه چیزی"}
            img={
              "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQAY2xsJVIZxm3K0gNtOMr9CSCvLdr5kdo3V3pv2HMuUkTBhFzRe5-b8NDRmO1mt5S5Xp_YyQ"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <MovieCard
            name={"یه چیزی"}
            img={
              "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQAY2xsJVIZxm3K0gNtOMr9CSCvLdr5kdo3V3pv2HMuUkTBhFzRe5-b8NDRmO1mt5S5Xp_YyQ"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <MovieCard
            name={"یه چیزی"}
            img={
              "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQAY2xsJVIZxm3K0gNtOMr9CSCvLdr5kdo3V3pv2HMuUkTBhFzRe5-b8NDRmO1mt5S5Xp_YyQ"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <MovieCard
            name={"یه چیزی"}
            img={
              "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQAY2xsJVIZxm3K0gNtOMr9CSCvLdr5kdo3V3pv2HMuUkTBhFzRe5-b8NDRmO1mt5S5Xp_YyQ"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <MovieCard
            name={"یه چیزی"}
            img={
              "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQAY2xsJVIZxm3K0gNtOMr9CSCvLdr5kdo3V3pv2HMuUkTBhFzRe5-b8NDRmO1mt5S5Xp_YyQ"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <MovieCard
            name={"یه چیزی"}
            img={
              "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQAY2xsJVIZxm3K0gNtOMr9CSCvLdr5kdo3V3pv2HMuUkTBhFzRe5-b8NDRmO1mt5S5Xp_YyQ"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <MovieCard
            name={"یه چیزی"}
            img={
              "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQAY2xsJVIZxm3K0gNtOMr9CSCvLdr5kdo3V3pv2HMuUkTBhFzRe5-b8NDRmO1mt5S5Xp_YyQ"
            }
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
