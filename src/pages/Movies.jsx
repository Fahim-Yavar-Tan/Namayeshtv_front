import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Trailer from "../components/Trailer";
import MovieDetail from "../components/MovieDetail";
import MovieComments from "../components/MovieComments";
import Rating from "../components/Rating";
import Footer from "../components/Footer";
import ContactForm from "../components/Form";
import { useParams } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import MobileTrailer from "../components/MobileTrailer";

const Movies = () => {
  useEffect(() => {
    alert(
      " کاربر گرامی، سایت حاضر پیش نمایشی از سایت اصلی میباشد. به دلیل کمبود زمان جهت دیپلوی پروژه و همچنین محدودیت های حجم زیرساخت، صفحه اختصاصی هر فیلم صرفا برای یک نمونه فیلم نمایش داده شده است. بدیهی است که در نسخه اصلی تمامی فیلم ها صفحه مخصوص به خود را خواهند داشت "
    );
  }, []);

  const params = useParams();

  const { data, loading, error } = useAxios(
    `/movies/movies/detail/${params.movieId}`
  );
  console.log("Data:", data);
  console.log("Error:", error);

  const [isRatingOpen, setIsRatingOpen] = useState(false);
  const isSmallScreen = window.matchMedia("(max-width: 640px)").matches;

  return (
    <div className="w-full bg-background">
      <Navbar />
      {!data && <div className="h-[100dvh]"></div>}
      {data && !isSmallScreen && (
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
      {data && isSmallScreen && (
        <MobileTrailer
          setRatingOpen={setIsRatingOpen}
          text={data.text_fa}
          name={data.title_fa}
          year={data.release_date}
          ageRate={data.ages}
          movieRate={data.rate_na}
          poster={data.portrate_image}
          Vid={data.trailer}
        />
      )}
      {data && data.director.length != 0 && (
        <MovieDetail
          dirName={data.director[0].name}
          dirPic={data.director[0].image}
          dirYear={data.director[0].Date_of_birth}
          movieDuration={data.movie_time}
        />
      )}
      <MovieComments />
      {isRatingOpen && (
        <Rating setOpen={setIsRatingOpen} name={data.title_fa} />
      )}
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Movies;
