import React from "react";

const Loading = () => {
  return (
    <div className=" w-[600px] bg-background border-2 p-8 px-14 mx-auto flex items-center justify-center text-center border-primary rounded-tl-2xl rounded-br-2xl">
      <p className="text-white text-5xl flex items-center justify-center text-center">
        در حال بارگزاری ...
      </p>
    </div>
  );
};

export default Loading;
