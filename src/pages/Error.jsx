import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="w-[100wv] h-[100dvh] bg-[#0d0d0d] relative ">
      <div className="w-1/2 h-[300px] p-6 bg-white absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] ">
        <h2 className="text-3xl">صفحه مورد نظر یافت نشد</h2>
        <button className="h-12 w-[70px] rounded-md mt-8 bg-orange-500 ">
          <Link to={"/"}> بازگشت</Link>
        </button>
      </div>
    </div>
  );
};

export default Error;
