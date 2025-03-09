import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  return (
    <div className="w-[95%] mx-auto p-6 bg-neutral rounded-tl-3xl rounded-br-3xl my-6 shadow-md">
      <form onSubmit={handleSubmit} className="flex flex-col">
        <div className="flex sm:flex-row flex-col justify-between">
          <div className="sm:w-1/2 w-full pr-2">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              ></label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="نام شما"
                className="mt-1 block w-[90%] px-3 py-2 mb-8 text-white bg-transparent border-b border-primary shadow-sm focus:outline-none sm:text-sm"
                required
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              ></label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="شماره تماس"
                className="mt-1 block w-[90%] px-3 py-2 mb-8 text-right text-white bg-transparent border-b border-primary shadow-sm focus:outline-none sm:text-sm"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-black"
              ></label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="ایمیل"
                className="mt-1 block w-[90%] px-3 py-2 mb-8 text-white bg-transparent border-b border-primary shadow-sm focus:outline-none sm:text-sm"
                required
              />
            </div>
          </div>

          <div className="sm:w-1/2 w-full pl-2 sm:pb-0 pb-4">
            <label
              htmlFor="message"
              className="block text-sm font-medium bg-transparent text-white"
            ></label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="پیام"
              className="mt-1 block w-full h-[83%] px-3 py-2 text-white bg-transparent border-b border-primary shadow-sm focus:outline-none sm:text-sm"
              rows="4"
              required
            />
          </div>
        </div>

        <div className="mx-auto">
          <button
            type="submit"
            className="w-[100px] px-4 py-2 mx-auto text-white border-primary border-[2px] rounded-tl-xl rounded-br-2xl shadow hover:bg-primary duration-300"
          >
            ثبت
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
