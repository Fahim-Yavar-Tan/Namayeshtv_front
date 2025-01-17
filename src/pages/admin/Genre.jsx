import React, { useState } from "react";
import AdNavbar from "../../components/admin/AdNavbar";

const Genre = () => {
  const [genres, setGenres] = useState([
    "درام",
    "کمدی",
    "ترسناک",
    "علمی تخیلی",
    "ماجراجویی",
  ]);
  const handleEdit = (index) => {
    const newGenre = prompt("ژانر جدید را وارد کنید:", genres[index]);
    if (newGenre) {
      const updatedGenres = [...genres];
      updatedGenres[index] = newGenre;
      setGenres(updatedGenres);
    }
  };

  const handleDelete = (index) => {
    const confirmDelete = window.confirm(
      `آیا مطمئن هستید که می‌خواهید "${genres[index]}" را حذف کنید؟`
    );
    if (confirmDelete) {
      setGenres(genres.filter((_, i) => i !== index));
    }
  };

  return (
    <div className="min-h-[100dvh] w-calc([100vw-200px]) mr-[200px] bg-[#2b2b2b]">
      <AdNavbar />
      <h2 className=" text-white bg-black p-4 text-2xl">سبک فیلم ها</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border-y border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border-y border-gray-300 px-4 py-2 text-right">
                ژانر
              </th>
              <th className="border-y border-gray-300 px-4 py-2 text-right">
                عملیات
              </th>
            </tr>
          </thead>
          <tbody>
            {genres.map((genre, index) => (
              <tr key={index} className="text-white">
                <td className="border-y border-gray-300 px-4 py-2 text-right">
                  {genre}
                </td>
                <td className="border-y border-gray-300 px-4 py-2 text-right">
                  <button
                    onClick={() => handleEdit(index)}
                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition duration-200"
                  >
                    ویرایش
                  </button>
                  <button
                    onClick={() => handleDelete(index)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition duration-200 ml-2"
                  >
                    حذف
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Genre;
