import React from "react";
import AdNavbar from "../../components/admin/AdNavbar";

const AddSlider = () => {
  const data = [
    {
      id: 1,
      pic: "https://via.placeholder.com/150", // Placeholder image
      title: "Item 1",
      text: "یچیزی نمیدونم",
      tv: "تماشا",
      condition: "فعال",
    },
    {
      id: 2,
      pic: "https://via.placeholder.com/150",
      title: "Item 2",
      text: "یچیزی نمیدونم",
      tv: "تماشا",
      condition: "فعال",
    },
    {
      id: 3,
      pic: "https://via.placeholder.com/150",
      title: "Item 3",
      text: "یچیزی نمیدونم",
      tv: "تماشا",
      condition: "فعال",
    },
    {
      id: 4,
      pic: "https://via.placeholder.com/150",
      title: "Item 4",
      text: "یچیزی نمیدونم",
      tv: "نمایش",
      condition: "فعال",
    },
  ];
  return (
    <div className="min-h-[100dvh] w-full text-white pr-[200px] bg-[#2b2b2b]">
      <AdNavbar />
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4"> اسلایدر ها</h1>
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead className="bg-gray-100 text-black">
            <tr>
              <th className="border border-gray-300 px-4 py-2">#</th>
              <th className="border border-gray-300 px-4 py-2">Picture</th>
              <th className="border border-gray-300 px-4 py-2">Title</th>
              <th className="border border-gray-300 px-4 py-2">Text</th>
              <th className="border border-gray-300 px-4 py-2">TV</th>
              <th className="border border-gray-300 px-4 py-2">Condition</th>
              <th className="border border-gray-300 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="border border-gray-300 px-4 py-2 text-center">
                  {index + 1}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  <img
                    src={item.pic}
                    alt={item.title}
                    className="w-16 h-16 object-cover mx-auto"
                  />
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {item.title}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {item.text}
                </td>
                <td className="border border-gray-300 px-4 py-2">{item.tv}</td>
                <td className="border border-gray-300 px-4 py-2">
                  {item.condition}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  <button
                    onClick={() => onEdit(item.id)}
                    className="bg-blue-500 text-white px-3 py-1 rounded mr-2 hover:bg-blue-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => onDelete(item.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Delete
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

export default AddSlider;
