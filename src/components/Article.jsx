import React from "react";

const Article = ({ img, header, text, link }) => {
  return (
    <div className="flex h-[200px] my-6 w-full px-4 relative">
      {/* Image Container */}
      <div
        onClick={() => (window.location.href = link)}
        className="aspect-square border-2 mr-4 border-[#f3ba69] rounded-tl-3xl rounded-br-3xl overflow-hidden cursor-pointer"
      >
        <img className="object-cover w-full h-full" src={img} alt={header} />
      </div>

      {/* Content */}
      <div className="flex w-[50%] flex-col justify-center  flex-grow pr-4 ">
        {/* Header */}
        <div
          onClick={() => (window.location.href = link)}
          className="h-8 text-white text-2xl font-bold cursor-pointer line-clamp-1"
        >
          {header}
        </div>

        {/* views */}
        <div className="mb-3 text-sm text-white/60 overflow-hidden ">
          تعداد بازدید:25
        </div>
        {/* Text */}
        <div className="line-clamp-3 text-sm text-white/60 overflow-hidden h-[60px]">
          {text}
        </div>

        {/* Button */}
        <div className="absolute bottom-0 h-8 left-6 overflow-hidden rounded-bl-3xl rounded-tr-3xl border-2 border-yellow-500 w-[80px]">
          <button className="h-full w-full text-white bg-transparent hover:bg-[#f3ba69] transition-colors duration-300">
            <a href={link}>بیشتر</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Article;
