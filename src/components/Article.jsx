import React from "react";

const Article = ({ img, header, text, link }) => {
  return (
    <div className="flex h-[150px] w-full pr-4 relative">
      {/* Image Container */}
      <div
        onClick={() => (window.location.href = link)}
        className="absolute h-full border-2 top-0 right-0 mr-4 w-[120px] border-yellow-500 rounded-tl-3xl rounded-br-3xl overflow-hidden cursor-pointer"
      >
        <img className="object-cover h-full" src={img} alt={header} />
      </div>

      {/* Divider */}
      <span className="absolute top-2 bottom-2 right-[145px] w-[2px] bg-yellow-600"></span>

      {/* Content */}
      <div className="h-full absolute right-[155px] left-0 flex flex-col">
        {/* Header */}
        <div
          onClick={() => (window.location.href = link)}
          className="h-8 text-white text-2xl mb-2 cursor-pointer line-clamp-1"
        >
          {header}
        </div>

        {/* Text */}
        <div className="line-clamp-3 text-sm text-white overflow-hidden h-[60px]">
          {text}
        </div>

        {/* Button */}
        <div className="absolute bottom-0 h-8 left-0 overflow-hidden rounded-bl-3xl rounded-tr-3xl border-2 border-yellow-500 w-[80px]">
          <button className="h-full w-full text-white bg-transparent hover:bg-yellow-500 transition-colors duration-1000">
            <a href={link}>بیشتر</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Article;
