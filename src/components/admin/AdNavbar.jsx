import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiArrowDownSLine } from "react-icons/ri";
import { MdKeyboardArrowRight } from "react-icons/md";

const menuItems = [
  { label: "نمایش وبسایت", path: "/" },
  { label: "داشبورد", path: "/admin/dashboard" },
  { label: "جدول پخش نمایش", path: "/" },
  { label: "جدول پخش تماشا", path: "/" },
  { label: "اسلایدر", path: "/admin/slider" },
];

const dropdownMenus = [
  {
    label: "اخبار",
    state: "isNewsOpen",
    links: [
      { label: "لیست اخبار", path: "/" },
      { label: "افزودن خبر", path: "/" },
      { label: "دسته بندی اخبار", path: "/" },
    ],
  },
  {
    label: "فیلم",
    state: "isMoviesOpen",
    links: [
      { label: "لیست فیلم ها", path: "/" },
      { label: "افزودن فیلم", path: "/admin/addmovie" },
      { label: "بازیگرها", path: "/" },
      { label: "کارگردان ها", path: "/" },
      { label: "ژانر", path: "/admin/genres" },
      { label: "نظرات کاربران", path: "/" },
      { label: "درخواست پخش", path: "/" },
    ],
  },
  {
    label: "سریال",
    state: "isSeriesOpen",
    links: [
      { label: "لیست سریال", path: "/" },
      { label: "افزودن سریال", path: "/" },
      { label: "نظرات کاربران", path: "/" },
      { label: "درخواست پخش", path: "/" },
    ],
  },
  {
    label: "برنامه",
    state: "isShowsOpen",
    links: [
      { label: "لیست برنامه", path: "/" },
      { label: "افزودن برنامه", path: "/" },
    ],
  },
];

const AdNavbar = () => {
  const [openMenus, setOpenMenus] = useState({});

  const toggleMenu = (menu) => {
    setOpenMenus((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };

  return (
    <nav className="absolute right-0 top-0 overflow-y-auto h-[100dvh] w-[200px] border-l border-white bg-[#2b2b2b]">
      <ul className="h-full w-full flex flex-col">
        {menuItems.map(({ label, path }) => (
          <li
            key={label}
            className="w-full h-[35px] text-white p-1 border-white/40"
          >
            <Link to={path}>{label}</Link>
          </li>
        ))}
        {dropdownMenus.map(({ label, state, links }) => (
          <React.Fragment key={label}>
            <li className="w-full h-[35px] bg-[#740000] text-white p-1 border-white/40 relative">
              <button onClick={() => toggleMenu(state)}>{label}</button>
              {openMenus[state] ? (
                <RiArrowDownSLine
                  onClick={() => toggleMenu(state)}
                  className="absolute left-0 top-0 text-3xl text-white"
                />
              ) : (
                <MdKeyboardArrowRight
                  onClick={() => toggleMenu(state)}
                  className="absolute left-0 top-0 text-3xl text-white"
                />
              )}
            </li>
            {openMenus[state] &&
              links.map(({ label, path }) => (
                <li
                  key={label}
                  className="w-full h-[35px] pr-6 text-white p-1 border-white/40"
                >
                  <Link to={path}>{label}</Link>
                </li>
              ))}
          </React.Fragment>
        ))}
      </ul>
    </nav>
  );
};

export default AdNavbar;
