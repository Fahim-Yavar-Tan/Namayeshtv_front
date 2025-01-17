import React, { useState } from "react";
import { motion } from "framer-motion";
import Rating from "@mui/material/Rating";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const MovieRating = ({ name, setOpen }) => {
  const [detail, setDetial] = useState(false);
  const [contentRating, setContentRating] = useState(0);
  const [timeRating, setTimeRating] = useState(0);
  const [genreRating, setGenreRating] = useState(0);
  return (
    <div
      onClick={() => setOpen(false)}
      className=" fixed top-0 left-0 right-0 bottom-0 bg-black/60 z-40 "
    >
      <div className="top-0 h-full w-full right-0 left-0 bottom-0 relative ">
        <div className="sm:w-1/2 w-[90%] h-2/3 p-4 bg-black/30 text-white absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] overflow-hidden rounded-tl-3xl rounded-br-3xl border-2 border-yellow-600 ">
          <div className="h-[70px] w-full text-3xl text-white text-center mt-8">
            {name}
          </div>
          <div className="flex flex-col gap-1">
            <div className="h-[40px] w-full flex justify-between ">
              <p>محتوای فیلم</p>
              <Rating
                dir="ltr"
                emptyIcon={<StarBorderIcon style={{ color: "lightyellow" }} />}
                name="simple-controlled"
                value={contentRating}
                onChange={(event, newValue) => {
                  setContentRating(newValue);
                }}
              />
            </div>
            <div className="h-[40px] w-full flex justify-between ">
              <p>زمان پخش</p>
              <Rating
                dir="ltr"
                emptyIcon={<StarBorderIcon style={{ color: "lightyellow" }} />}
                name="simple-controlled"
                value={timeRating}
                onChange={(event, newValue) => {
                  setTimeRating(newValue);
                }}
              />
            </div>
            <div className="h-[40px] w-full flex justify-between ">
              <p>ژانر فیلم</p>
              <Rating
                dir="ltr"
                emptyIcon={<StarBorderIcon style={{ color: "lightyellow" }} />}
                name="simple-controlled"
                value={genreRating}
                onChange={(event, newValue) => {
                  setGenreRating(newValue);
                }}
              />
            </div>
            <div
              onClick={() => {
                setDetial(!detail);
              }}
              className="h-[40px] w-full cursor-pointer text-white text-center"
            >
              اضافه کردن توضیحات
            </div>
            {detail && (
              <motion.div
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                className="h-[100px] w-full origin-top bg-gray-500"
              ></motion.div>
            )}
            <button className="h-[50px] w-[100px] border-[2px] text-white border-yellow-600 hover:bg-yellow-600 duration-300 rounded-tl-2xl rounded-br-2xl mx-auto mt-2 ">
              ثبت نظر
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieRating;
