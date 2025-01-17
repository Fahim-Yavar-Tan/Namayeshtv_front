import React, { useState } from "react";
import AdNavbar from "../../components/admin/AdNavbar";

const AddMovie = () => {
  const [formData, setFormData] = useState({
    filmName: null,
    description: null,
    language: null,
    country: null,
    ageRating: null,
    rating: null,
    director: null,
    stars: null,
    genre: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    alert("فیلم با موفقیت ثبت شد!");
  };

  return (
    <div className="w-full min-h-[100dvh] bg-[#2b2b2b] pr-[200px]">
      <AdNavbar />
      <h2 className="bg-black text-white text-2xl border-b p-2 border-white">
        افزودن فیلم
      </h2>
      <form
        className="w-full  mx-auto p-6 bg-black shadow-md rounded"
        onSubmit={handleSubmit}
      >
        {/* Map input fields into rows */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          {Object.keys(formData).map((key) =>
            key === "ageRating" || key === "rating" ? null : (
              <div key={key}>
                <input
                  type="text"
                  name={key}
                  value={formData[key] || ""}
                  onChange={handleInputChange}
                  className="w-full border-b border-gray-300 rounded px-3 py-2 bg-[#2b2b2b] text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder={
                    key === "filmName"
                      ? "نام فیلم"
                      : key === "description"
                      ? "توضیح فیلم"
                      : key === "language"
                      ? "زبان اصلی فیلم"
                      : key === "country"
                      ? "کشور ساخت"
                      : key === "director"
                      ? "کارگردان"
                      : key === "stars"
                      ? "ستارگان"
                      : key === "genre"
                      ? "ژانر"
                      : ""
                  }
                />
              </div>
            )
          )}
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            name="ageRating"
            value={formData.ageRating || ""}
            onChange={handleInputChange}
            className="w-full border-b border-gray-300 rounded px-3 py-2 bg-[#2b2b2b] text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="رده سنی"
          />
          <input
            type="text"
            name="rating"
            value={formData.rating || ""}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded px-3 py-2 bg-[#2b2b2b] text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="امتیاز"
          />
        </div>

        {/* File upload fields */}
        <div className="mb-4 text-white">
          <label className="block text-sm text-white mb-2">
            اپلود عکس عمودی
          </label>
          <input
            type="file"
            className="w-full bg-[#2b2b2b] rounded px-3 py-2"
          />
        </div>

        <div className="mb-4 text-white">
          <label className="block text-sm text-white mb-2">
            اپلود عکس افقی
          </label>
          <input
            type="file"
            className="w-full bg-[#2b2b2b] rounded px-3 py-2"
          />
        </div>

        <div className="mb-4 text-white">
          <label className="block text-sm text-white mb-2">اپلود تریلر</label>
          <input
            type="file"
            className="w-full bg-[#2b2b2b] rounded px-3 py-2"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
        >
          ثبت فیلم
        </button>
      </form>
    </div>
  );
};

export default AddMovie;
