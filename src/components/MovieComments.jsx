import React from "react";
import Title from "./Title";
import UserImg from "../assets/images/user.png";
import { motion } from "framer-motion";

const MovieComments = () => {
  return (
    <div className="w-full  ">
      <Title title={"نظر مخاطبان"} />

      <CommentBox />
      <CommentBox />
      <CommentBox />
      <CommentBox />
    </div>
  );
};

const CommentBox = () => {
  return (
    <>
      <motion.div
        whileHover={{ scale: 0.98 }}
        className=" m-4 mx-auto w-[95%] h-[120px] bg-[#2a2a2a] text-white rounded-tl-3xl rounded-br-3xl flex "
      >
        <div className="h-full mx-4 ">
          <img className="h-[120px] w-[120px] " src={UserImg} alt="userImg" />
        </div>
        <div className="w-full h-full flex flex-col">
          <div className="flex w-full h-1/2 p-4 ">
            <h3 className="inline-block">نام کاربر -</h3>
            <p>11/22/1200</p>
          </div>
          <div className="h-1/2 w-full p-4">asdfasdfsadf</div>
        </div>
      </motion.div>
    </>
  );
};
export default MovieComments;
