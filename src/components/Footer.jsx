import React from "react";
import vidf from "../assets/videos/Footer.mp4";
import NamayeshLogo from "../assets/logos/Namayesh.png";
import Bale from "../assets/logos/bale.png";
import Ita from "../assets/logos/ita.png";
import Sorush from "../assets/logos/sorosh.png";
import BaleW from "../assets/logos/balew.png";
import ItaW from "../assets/logos/itaw.png";
import SorushW from "../assets/logos/soroshw.png";
import Comment from "../assets/logos/comment.png";
import Email from "../assets/logos/email.png";
import Location from "../assets/logos/location.png";
import Telephone from "../assets/logos/telephone.png";
import Satellite from "../assets/logos/satellite.png";
import Seda from "../assets/logos/IRIB_Logo1.png";
import { useState } from "react";

const Footer = () => {
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  return (
    <div className="w-full ">
      <div className="relative w-full ">
        <video
          src={vidf}
          autoPlay
          loop
          muted
          playsInline
          className="inset-0 w-full h-full object-cover"
        ></video>
        <div className="w-[300px] absolute h-full top-0 left-1/2 translate-x-[-50%] flex flex-col items-center gap-1">
          <div className="w-full flex justify-center">
            <img
              className="w-1/5 mt-1 sm:w-2/3"
              src={NamayeshLogo}
              alt="logo"
            />
          </div>
          <div className="text-center">
            <p className="sm:text-[10px] text-[5px] mt-2 text-white">
              تمامی حقوق متعلق به شبکه نمایش میباشد| 1304-1394
            </p>
            <div className="mt-1 sm:mt-4 flex justify-center gap-2">
              <div
                onMouseEnter={() => setIsHovered1(true)}
                onMouseLeave={() => setIsHovered1(false)}
              >
                <img
                  className=" fill-white h-4 w-4 sm:h-6 sm:w-6"
                  src={isHovered1 ? Ita : ItaW}
                  alt=""
                />
              </div>
              <div
                onMouseEnter={() => setIsHovered2(true)}
                onMouseLeave={() => setIsHovered2(false)}
              >
                <img
                  className=" fill-white h-4 w-4 sm:h-6 sm:w-6"
                  src={isHovered2 ? Bale : BaleW}
                  alt=""
                />
              </div>
              <div
                onMouseEnter={() => setIsHovered3(true)}
                onMouseLeave={() => setIsHovered3(false)}
              >
                <img
                  className=" fill-white h-4 w-4 sm:h-6 sm:w-6"
                  src={isHovered3 ? Sorush : SorushW}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[120px] sm:h-[200px] bg-[#0d0d0d] flex justify-around ">
        <div className="h-full w-[400px] hidden sm:flex flex-col justify-around mr-4 text-white">
          <div className="flex">
            <img className="size-8 ml-4" src={Comment} alt="" />
            <p className="w-[100px]"> 3000550</p>
          </div>
          <div className="flex">
            <img className="size-8 ml-4" src={Telephone} alt="" />
            <p className="w-[200px]"> 021-27860021</p>
          </div>
          <div className="flex">
            <img className="size-8 ml-4" src={Location} alt="" />
            <p className="w-[300px] text-[10px] align-middle">
              تهران،خیابان ولیعصر(عج)،خیابان جام جم،صندوق پستی 19395-3333
            </p>
          </div>
          <div className="flex">
            <img className="size-8 ml-4" src={Email} alt="" />
            <p className="w-[100px]"> namayeshtv@gmail.com</p>
          </div>
        </div>
        <div className="h-full w-[400px] ">
          <div className="text-white flex flex-col justify-center align-middle">
            <img
              className="w-[50px] sm:w-[70px] mx-auto mt-8 mb-2 sm:my-4  "
              src={Seda}
              alt="seda-logo"
            />
            <div className="mx-auto  ">
              <p className="text-[5px] sm:text-[10px] sm:text-mb">
                طراحی و توسعه توسط شرکت فناور فهیم یاور تن
              </p>
            </div>
          </div>
        </div>
        <div className="h-full hidden w-[400px] ml-4 sm:flex flex-col justify-around text-white">
          <div className="flex justify-end">
            <img className="size-8" src={Satellite} alt="" />
          </div>
          <div className="flex items-start">
            <p className="w-full text-left">Badr8/11881/horizantal/27500/5/6</p>
          </div>
          <div className="flex items-start">
            <p className="w-full text-left align-middle">
              interlset39/11555/vertical/30000/3/4
            </p>
          </div>
          <div className="flex items-start">
            <p className="w-full text-left">
              ExpressAM7/11677/vertical/30000/3/4
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
