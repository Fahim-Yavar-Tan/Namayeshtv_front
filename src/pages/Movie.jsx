import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import MovieNavbar from "../components/MovieNavbar";
import useAxios from "../hooks/useAxios";
import MovieCard from "../components/MovieCard";

const Movie = () => {
  const [selected, setSelected] = useState("all");
  const { data, loading, error } = useAxios("movies/category/");
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  let url = `movies/filter/category/${selected}/`;
  if (selected === "all") {
    url = "/movies/movies/";
  }
  const {
    data: movies,
    loading: loadingMovies,
    error: moviesError,
  } = useAxios(url);
  console.log(movies);
  return (
    <div className="w-full min-h-[100dvh] bg-background">
      <Navbar />
      <div className="relative w-[300px] h-[150px] mx-auto pt-[100px]">
        <h1 className="text-white text-center h-full align-middle text-2xl">
          فیلم ها
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
          className="absolute right-0 left-0 bottom-0 h-[2px] origin-right bg-primary"
        ></motion.span>
      </div>
      <MovieNavbar selected={selected} setSelected={setSelected} data={data} />
      {movies &&
        movies.results &&
        movies.results.map((movie) => (
          <MovieCard
            key={movie.id}
            img={`${BASE_URL}${movie.landscape_image}`}
            name={movie.title_fa}
            duration={movie.movie_time}
            year={2016}
          />
        ))}
      <div className="h-[500px]" />

      <Footer />
    </div>
  );
};

export default Movie;
