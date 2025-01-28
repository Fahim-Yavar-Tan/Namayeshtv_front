import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Trailer from "../components/Trailer";
import MovieDetail from "../components/MovieDetail";
import MovieComments from "../components/MovieComments";
import Rating from "../components/Rating";
import Footer from "../components/Footer";
import ContactForm from "../components/Form";
import { useParams } from "react-router-dom";
import useAxios from "../hooks/useAxios";

const Movies = () => {
  const params = useParams();

  const { data, loading, error } = useAxios(
    `/movies/movies/detail/${params.movieId}`
  );
  console.log("Data:", data);
  console.log("Error:", error);

  const [isRatingOpen, setIsRatingOpen] = useState(false);

  return (
    <div className="w-full bg-[#0d0d0d]">
      <Navbar />
      {data && (
        <Trailer
          setRatingOpen={setIsRatingOpen}
          name={data.title_fa}
          year={data.release_date}
          ageRate={data.ages}
          movieRate={data.rate_na}
          poster={data.landscape_image}
          Vid={data.trailer}
        />
      )}
      {data && (
        <MovieDetail
          dirName={data.director[0].name}
          dirPic={data.director[0].image}
          dirYear={data.director[0].Date_of_birth}
          movieDuration={data.movie_time}
        />
      )}
      <MovieComments />
      {isRatingOpen && (
        <Rating setOpen={setIsRatingOpen} name={"مرد ایرلندی"} />
      )}
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Movies;
