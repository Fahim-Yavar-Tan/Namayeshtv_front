import { useState } from "react";

export default function OptionForm() {
  const [selected, setSelected] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`You selected: ${selected}`);
  };

  return (
    <div className="flex items-center justify-center w-full text-white">
      <form
        onSubmit={handleSubmit}
        className="bg-background p-6 w-full rounded-2xl shadow-lg"
      >
        <h2 className="text-xl my-8 font-semibold mb-4 text-center">
          بهترین فیلم پخش شده امروز کدام است؟
        </h2>
        <div className="my-4 grid grid-cols-1 sm:grid-cols-4 gap-4">
          {["فیلم اول", "فیلم دوم", "سومین فیلم", "فیلم اخر"].map((option) => (
            <label
              key={option}
              className={`p-3 border rounded-xl text-center cursor-pointer transition-all ${
                selected === option ? " text-primary" : ""
              }`}
            >
              <input
                type="radio"
                name="option"
                value={option}
                className="hidden"
                onChange={() => setSelected(option)}
              />
              {option}
            </label>
          ))}
        </div>
        <button
          type="submit"
          className="mt-6 w-[200px] bg-background text-white border border-secondary rounded-tl-2xl rounded-br-2xl py-2 hover:bg-secondary transition"
          disabled={!selected}
        >
          ارسال
        </button>
      </form>
    </div>
  );
}
