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
import useFetch from "../hooks/useFetch";

const Movies = () => {
  const params = useParams();
  console.log("Params:", params);

  const { data, loading, error } = useAxios("/posts");
  console.log("Data:", data);
  console.log("Error:", error);

  const [isRatingOpen, setIsRatingOpen] = useState(false);

  return (
    <div className="w-full bg-[#0d0d0d]">
      <Navbar />
      <Trailer setRatingOpen={setIsRatingOpen} />
      <MovieDetail />
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
