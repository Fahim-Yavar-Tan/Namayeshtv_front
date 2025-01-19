import React from "react";
import DirectorImg from "../assets/images/director.png";
import Title from "./Title";
import Card from "./Card";
import { motion } from "framer-motion";

const MovieDetail = ({ dirPic }) => {
  return (
    <div id="targetDiv" className="w-full h-[800px] text-white mt-4 ">
      <div className="h-[400px] w-full flex relative ">
        <div className="w-1/2 h-full flex flex-col ">
          <h2 className="text-5xl font-bold mr-8 mt-8">کارگردان</h2>
          <div className="w-full  h-[300px] flex">
            {/* img */}
            <motion.img
              whileHover={{ scale: 0.97 }}
              whileTap={{ scale: 1.02 }}
              className=" h-2/3 my-auto rounded-tl-3xl rounded-br-3xl mx-8 "
              src={dirPic ? dirPic : DirectorImg}
              alt=""
            />
            <div className="flex flex-col my-auto gap-6 text-2xl">
              {/* name info Movies */}
              <div className="w-full h-[50px]  "> مارتین اسکورسیزی </div>
              <div className="w-full h-[50px]  "> متولد:1321 </div>
              <div className="w-full h-[50px]  "> مرد ایرلندی، مخمصه و... </div>
            </div>
          </div>
        </div>
        <div className="w-1/2 h-full flex flex-col ">
          <h2 className="text-5xl font-bold mr-8 mt-8">اطلاعات برنامه</h2>
          <div className="w-full flex flex-col my-auto ">
            <div className="flex flex-col my-auto gap-6 text-2xl mr-6">
              {/* Year Origin Score duration */}
              <div>مدت زمان: 3ساعت و 20 دقیقه</div>
              <div>زمان پخش: یکشنبه ساعت 4</div>
            </div>
          </div>
          {/* line */}
          <span className="absolute h-[70%] w-[2px] bg-yellow-700 right-1/2 bottom-0 "></span>
        </div>
      </div>
      <div className="w-full h-[250px]">
        <Title title={"ستارگان"} />
        <div className="w-[95%] h-[250px] gap-4 mr-4 justify-start overflow-x-auto flex-nowrap flex">
          <Card name={"اسم بازیگر"} />
          <Card name={"اسم بازیگر"} />
          <Card name={"اسم بازیگر"} />
          <Card name={"اسم بازیگر"} />
          <Card name={"اسم بازیگر"} />
          <Card name={"اسم بازیگر"} />
          <Card name={"اسم بازیگر"} />
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
