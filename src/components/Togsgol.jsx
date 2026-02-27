import React from "react";

export const Togsgol = () => {
  return (
    <div className="flex flex-col items-center gap-9 py-12 px-4 w-full max-w-[1200px] mx-auto text-black dark:text-white">
      <button className="bg-gray-500 dark:bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 dark:hover:bg-gray-500 transition-colors">
        Click Me
      </button>
      <div>
        <h1 className="text-center text-lg  font-semibold">
          What's next? Feel free to reach out to me if you're looking for
        </h1>
        <h1 className="text-center text-lg  font-semibold">
          a developer, have a query, or simply want to connect.
        </h1>
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex gap-5 flex-col md:flex-row items-center gap-4">
          <div className="flex items-center gap-2">
            <img src="Email.png" alt="email icon" className="w-6 h-6" />
            <span className="md:text-xl">tom@pinecone.mn</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <img src="Utas.png" alt="" className="w-5 h-5" />
          <span className="md:text-xl">+976 1234 5678</span>
        </div>
      </div>

      <div className="flex flex-col items-center gap-2">
        <h1 className="text-center font-medium">
          You may also find me on these platforms!
        </h1>
        <div className="flex gap-4 mt-2">
          <button className="flex items-center gap-2 bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
            <img src="IconButton.png" alt="Platform Icon" className="w-7 h-7" />
            <img src="Shuwuuhai.png" alt="" className="w-5 h-5" />
            <img src="OvsniiVr.png" alt="" className="w-7 h-7" />
          </button>
        </div>
      </div>
      <h1 className="text-center text-sm mt-4">
        {new Date().getFullYear()} | Greetings with ❤️ from Ulaanbaatar
      </h1>
    </div>
  );
};

export default Togsgol;
