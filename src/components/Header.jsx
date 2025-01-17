import React from "react";
import Namyesh from "../assets/logos/Namayesh.png";

const Header = () => {
  return (
    <>
      <div className="w-full overflow-hidden h-[calc(100dvh-80px)] relative">
        <img
          className="w-full h-[calc(100dvh-80px)] object-top object-cover"
          src="https://www.1pezeshk.com/wp-content/uploads/2024/10/2024-10-07_12-50-26.jpg"
          alt="Poster"
        />
        <div className="h-1/2 sm:h-full absolute bottom-0 text-white right-0 left-0 w-full bg-custom-gradient1 sm:bg-custom-gradient sm:top-0 sm:w-1/2 ">
          <div className="h-full absolute right-0 top-0 w-full sm:w-1/2 flex flex-col gap-4 justify-center items-center">
            <div className="h-12 w-full text-3xl flex justify-center items-center">
              <h2>مرد ایرلندی</h2>
            </div>
            <div className="h-12 w-full text-2xl mb-4 flex justify-center items-center">
              <p>19:00</p>
            </div>
            <div className="h-12 w-full  flex justify-center items-center">
              <img className="h-[50px]" src={Namyesh} alt="Namayesh" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[80px] bg-[#8a0000] "></div>
    </>
  );
};

export default Header;
