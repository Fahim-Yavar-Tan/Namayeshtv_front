import React from "react";
import DirectorImg from "../assets/images/director.png";
import Title from "./Title";
import Card from "./Card";
import { motion } from "framer-motion";
import jalaali from "jalaali-js";

function getPersianYear(dateString) {
  // Parse the input date string
  const [year, month, day] = dateString.split("-").map(Number);

  // Convert the Gregorian date to Jalali (Persian) date
  const jalaliDate = jalaali.toJalaali(year, month, day);

  // Return the Persian year
  return jalaliDate.jy;
}
function convertToPersianTime(totalMinutes) {
  const persianHours = Math.floor(totalMinutes / 60);
  const remainingMinutes = totalMinutes % 60;

  if (persianHours > 0) {
    return `${persianHours} ساعت و ${remainingMinutes} دقیقه`;
  } else {
    return `${remainingMinutes} دقیقه`;
  }
}

const MovieDetail = ({ dirPic, dirName, dirYear, movieDuration }) => {
  const baseURL = process.env.REACT_APP_BASE_URL;

  const pic = `${baseURL}${dirPic}`;
  return (
    <div id="targetDiv" className="w-full text-white mt-4 ">
      <div className=" w-full flex  sm:flex-row flex-col relative ">
        <div className="sm:w-1/2 w-full h-full flex flex-col ">
          <h2 className="sm:text-5xl text-2xl font-bold mr-8 mt-8">کارگردان</h2>
          <div className="w-full  h-[300px] flex">
            {/* img */}
            <motion.img
              whileHover={{ scale: 0.97 }}
              whileTap={{ scale: 1.02 }}
              className=" h-2/3 my-auto rounded-tl-3xl rounded-br-3xl mx-8 "
              src={dirPic ? pic : DirectorImg}
              alt=""
            />
            <div className="flex flex-col my-auto sm:gap-6 gap-2 sm:text-2xl">
              {/* name info Movies */}
              <div className="w-full h-[50px]  "> {dirName} </div>
              <div className="w-full h-[50px]  ">
                متولد:{getPersianYear(dirYear)}
              </div>
              <div className="w-full h-[50px]  ">مرد ایرلندی، مخمصه و...</div>
            </div>
          </div>
        </div>
        <div className="sm:w-1/2 w-full h-full flex flex-col ">
          <h2 className="sm:text-5xl text-2xl font-bold mr-8 mt-8 sm:mb-[100px] mb-8">
            اطلاعات برنامه
          </h2>
          <div className="w-full flex flex-col my-auto ">
            <div className="flex flex-col my-auto sm:gap-12 gap-6 sm:text-2xl mr-6">
              {/* Year Origin Score duration */}
              <div>مدت زمان: {convertToPersianTime(movieDuration)}</div>
              <div>زمان پخش: یکشنبه ساعت 4</div>
            </div>
          </div>
          {/* line */}
          <span className="absolute h-[70%] w-[2px] bg-yellow-700 right-1/2 bottom-0 hidden sm:block "></span>
        </div>
      </div>
      <div className="w-full ">
        <Title title={"ستارگان"} />
        <div className="w-[95%]  gap-4 mr-4 justify-start overflow-x-auto flex-nowrap flex">
          <Card name={"رابرت دنیرو"} />
          <Card name={"جو پسکی"} />
          <Card name={"آل پاچینو"} />
          <Card name={"هاروی کیتل"} />
          <Card name={"استیون گراهام"} />
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
