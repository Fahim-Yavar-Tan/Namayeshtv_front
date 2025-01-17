import React from "react";

const EpisodeCard = ({ name, link }) => {
  return (
    <div className="w-[90vw] mx-auto h-[45px]  bg-[#2a2a2a] relative rounded-tl-3xl rounded-br-3xl ">
      <h2 className="inline-block text-white mt-2 mr-6">{name}</h2>

      <div className="absolute left-0 top-0 h-full text-white w-[80px] bg-[#740000] flex items-center rounded-tl-3xl">
        <a className="text-center w-full" href={link}>
          پخش
        </a>
      </div>
    </div>
  );
};

export default EpisodeCard;
