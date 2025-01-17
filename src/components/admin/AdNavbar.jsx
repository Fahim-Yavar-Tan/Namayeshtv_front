import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiArrowDownSLine } from "react-icons/ri";
import { MdKeyboardArrowRight } from "react-icons/md";

const AdNavbar = () => {
  const [isNewsOpen, setIsNewsOpen] = useState(false);
  const [isMoviesOpen, setIsMoviesOpen] = useState(false);
  const [isSeriesOpen, setIsSeriesOpen] = useState(false);
  const [isShowsOpen, setIsShowsOpen] = useState(false);
  return (
    <nav className="absolute right-0 top-0  overflow-y-auto h-[100dvh] w-[200px] border-l border-white bg-[#2b2b2b] ">
      <ul className="h-full w-full flex flex-col">
        <li className="w-full h-[35px]  text-white p-1 border-white/40 ">
          <Link to={"/"}> نمایش وبسایت</Link>
        </li>
        <li className="w-full h-[35px]  text-white p-1 border-white/40 ">
          <Link to={"/admin/dashboard"}>داشبورد</Link>
        </li>
        <li className="w-full h-[35px]  text-white p-1 border-white/40 ">
          <Link to={"/"}>جدول پخش نمایش</Link>
        </li>
        <li className="w-full h-[35px]  text-white p-1 border-white/40 ">
          <Link to={"/"}>جدول پخش تماشا</Link>
        </li>
        <li className="w-full h-[35px]  text-white p-1 border-white/40 ">
          <Link to={"/admin/slider"}>اسلایدر</Link>
        </li>
        <li className="w-full h-[35px]  bg-[#740000] text-white p-1 border-white/40 relative ">
          <button onClick={() => setIsNewsOpen(!isNewsOpen)}>اخبار</button>
          {isNewsOpen ? (
            <RiArrowDownSLine
              onClick={() => setIsNewsOpen(!isNewsOpen)}
              className="absolute left-0 top-0 text-3xl text-white"
            />
          ) : (
            <MdKeyboardArrowRight
              onClick={() => setIsNewsOpen(!isNewsOpen)}
              className="absolute left-0 top-0 text-3xl text-white"
            />
          )}
        </li>
        {isNewsOpen && (
          <li className="w-full h-[35px]  pr-6 text-white p-1 border-white/40 ">
            <Link to={"/"}>لیست اخبار</Link>
          </li>
        )}
        {isNewsOpen && (
          <li className="w-full h-[35px]  pr-6 text-white p-1 border-white/40 ">
            <Link to={"/"}>افزودن خبر</Link>
          </li>
        )}
        {isNewsOpen && (
          <li className="w-full h-[35px]  pr-6 text-white p-1 border-white/40 ">
            <Link to={"/"}>دسته بندی اخبار</Link>
          </li>
        )}
        <li className="w-full h-[35px]  bg-[#740000] text-white p-1 border-white/40 relative ">
          <button onClick={() => setIsMoviesOpen(!isMoviesOpen)}>فیلم</button>
          {isMoviesOpen ? (
            <RiArrowDownSLine
              onClick={() => setIsMoviesOpen(!isMoviesOpen)}
              className="absolute left-0 top-0 text-3xl text-white"
            />
          ) : (
            <MdKeyboardArrowRight
              onClick={() => setIsMoviesOpen(!isMoviesOpen)}
              className="absolute left-0 top-0 text-3xl text-white"
            />
          )}
        </li>
        {isMoviesOpen && (
          <li className="w-full h-[35px] pr-6  text-white p-1 border-white/40 ">
            <Link to={"/"}>لیست فیلم ها</Link>
          </li>
        )}
        {isMoviesOpen && (
          <li className="w-full h-[35px] pr-6  text-white p-1 border-white/40 ">
            <Link to={"/admin/addmovie"}>افزودن فیلم</Link>
          </li>
        )}
        {isMoviesOpen && (
          <li className="w-full h-[35px] pr-6  text-white p-1 border-white/40 ">
            <Link to={"/"}>بازیگرها</Link>
          </li>
        )}
        {isMoviesOpen && (
          <li className="w-full h-[35px] pr-6  text-white p-1 border-white/40 ">
            <Link to={"/"}>کارگردان ها</Link>
          </li>
        )}
        {isMoviesOpen && (
          <li className="w-full h-[35px] pr-6  text-white p-1 border-white/40 ">
            <Link to={"/admin/genres"}>ژانر</Link>
          </li>
        )}
        {isMoviesOpen && (
          <li className="w-full h-[35px] pr-6  text-white p-1 border-white/40 ">
            <Link to={"/"}>نظرات کاربران</Link>
          </li>
        )}
        {isMoviesOpen && (
          <li className="w-full h-[35px] pr-6  text-white p-1 border-white/40 ">
            <Link to={"/"}>درخواست پخش</Link>
          </li>
        )}
        <li className="w-full h-[35px]  bg-[#740000] text-white p-1 border-white/40 relative ">
          <button onClick={() => setIsSeriesOpen(!isSeriesOpen)}>سریال</button>
          {isSeriesOpen ? (
            <RiArrowDownSLine
              onClick={() => setIsSeriesOpen(!isSeriesOpen)}
              className="absolute left-0 top-0 text-3xl text-white"
            />
          ) : (
            <MdKeyboardArrowRight
              onClick={() => setIsSeriesOpen(!isSeriesOpen)}
              className="absolute left-0 top-0 text-3xl text-white"
            />
          )}
        </li>
        {isSeriesOpen && (
          <li className="w-full h-[35px] pr-6  text-white p-1 border-white/40 ">
            <Link to={"/"}>لیست سریال</Link>
          </li>
        )}
        {isSeriesOpen && (
          <li className="w-full h-[35px] pr-6  text-white p-1 border-white/40 ">
            <Link to={"/"}>افزودن سریال</Link>
          </li>
        )}
        {isSeriesOpen && (
          <li className="w-full h-[35px] pr-6  text-white p-1 border-white/40 ">
            <Link to={"/"}>نظرات کاربران</Link>
          </li>
        )}
        {isSeriesOpen && (
          <li className="w-full h-[35px] pr-6  text-white p-1 border-white/40 ">
            <Link to={"/"}>درخواست پخش</Link>
          </li>
        )}
        <li className="w-full h-[35px]  bg-[#740000] text-white p-1 border-white/40 relative">
          <button onClick={() => setIsShowsOpen(!isShowsOpen)}>برنامه</button>
          {isShowsOpen ? (
            <RiArrowDownSLine
              onClick={() => setIsShowsOpen(!isShowsOpen)}
              className="absolute left-0 top-0 text-3xl text-white"
            />
          ) : (
            <MdKeyboardArrowRight
              onClick={() => setIsShowsOpen(!isShowsOpen)}
              className="absolute left-0 top-0 text-3xl text-white"
            />
          )}
        </li>
        {isShowsOpen && (
          <li className="w-full h-[35px] pr-6  text-white p-1 border-white/40 ">
            <Link to={"/"}>لیست برنامه</Link>
          </li>
        )}
        {isShowsOpen && (
          <li className="w-full h-[35px] pr-6  text-white p-1 border-white/40 ">
            <Link to={"/"}>افزودن برنامه</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default AdNavbar;
