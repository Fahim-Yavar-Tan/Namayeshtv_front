import React from "react";
import AdNavbar from "../../components/admin/AdNavbar";

const AdMessages = () => {
  const messages = [
    {
      name: "Ali Rezaei",
      subject: "Feedback",
      date: "2025-01-16",
      content: "This is the message content.",
    },
    {
      name: "Sara Ahmadi",
      subject: "Question",
      date: "2025-01-15",
      content: "Another message content.",
    },
  ];
  return (
    <div className="min-h-[100dvh] w-full bg-[#2b2b2b] pr-[200px] ">
      <AdNavbar />
      <div className="overflow-x-auto">
        <h2 className="text-white text-3xl p-4">نظرات</h2>
        <table className="min-w-full table-auto border-collapse border border-gray-200 mt-5">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="px-4 py-2 border border-gray-300">ردیف</th>
              <th className="px-4 py-2 border border-gray-300">
                نام و نام خانوادگی
              </th>
              <th className="px-4 py-2 border border-gray-300">موضوع</th>
              <th className="px-4 py-2 border border-gray-300">تاریخ ارسال</th>
              <th className="px-4 py-2 border border-gray-300">عملیات</th>
            </tr>
          </thead>
          <tbody>
            {messages.map((message, index) => (
              <tr key={index} className="border-b text-white border-gray-200">
                <td className="px-4 py-2 border border-gray-300 text-center">
                  {index + 1}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {message.name}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {message.subject}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {message.date}
                </td>
                <td className="px-4 py-2 border border-gray-300 text-center">
                  <button
                    onClick={() => handleShowMessage(message)}
                    className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                  >
                    مشاهده پیام
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

export default AdMessages;
