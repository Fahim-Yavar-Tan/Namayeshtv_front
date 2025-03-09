import React from "react";

const Article = ({ img, header, text, link, views, article, setArticle }) => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  return (
    <div className="flex sm:h-[200px] h-[150px] my-6 w-full px-4 relative">
      {/* Image Container */}
      <div
        onClick={() => setArticle(article)}
        className="  sm:h-full h-2/3 my-auto aspect-square border-2 mr-4 border-primary rounded-tl-3xl rounded-br-3xl overflow-hidden cursor-pointer"
      >
        <img
          className="object-cover w-full h-full"
          src={`${img}`}
          alt={header}
        />
        {console.log(img)}
      </div>

      {/* Content */}
      <div className="flex w-[50%] flex-col justify-center  flex-grow pr-4 ">
        {/* Header */}
        <div
          onClick={() => setArticle(article)}
          className="h-8 text-white sm:text-2xl font-bold cursor-pointer line-clamp-1"
        >
          {header}
        </div>

        {/* views */}
        <div className="sm:mb-3 m-0 sm:text-sm text-[10px] text-white/60 overflow-hidden ">
          تعداد بازدید:{views}
        </div>
        {/* Text */}
        <div className="line-clamp-3 sm:text-sm text-[12px] text-white/60 overflow-hidden sm:h-[60px] h-[50px] ">
          {text}
        </div>

        {/* Button */}
        <div className="absolute bottom-0 h-8 left-6 overflow-hidden rounded-bl-3xl rounded-tr-3xl border-2 border-primary w-[80px] hidden sm:block">
          <button className="h-full w-full text-white bg-transparent hover:bg-primary transition-colors duration-300 ">
            <h2 onClick={() => setArticle(article)}>بیشتر</h2>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Article;
