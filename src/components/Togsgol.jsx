import React from "react";

export const Togsgol = () => {
  return (
    <div className="flex flex-col items-center gap-6 py-12 px-4 w-full max-w-[1200px] mx-auto text-black dark:text-white">
   
      <button className="bg-gray-500 dark:bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 dark:hover:bg-gray-500 transition-colors">
        Click Me
      </button>

     
      <h1 className="text-center text-lg md:text-xl font-semibold">
        What's next? Feel free to reach out to me if you're looking for a
        developer, have a query, or simply want to connect.
      </h1>

      
      <div className="flex flex-col md:flex-row items-center gap-4">
        <div className="flex items-center gap-2">
          <img src="icon.png" alt="email icon" className="w-6 h-6" />
          <span>tom@pinecone.mn</span>
        </div>
        <div className="flex items-center gap-2">
          <img src="icon.png" alt="phone icon" className="w-6 h-6" />
          <span>+976 1234 5678</span> 
        </div>
      </div>

  
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-center font-medium">
          You may also find me on these platforms!
        </h1>
        <div className="flex gap-4 mt-2">
          <button className="flex items-center gap-2 bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
            <img
              src="Icon Button.png"
              alt="Platform Icon"
              className="w-5 h-5"
            />
            <img src="Icon.png" alt="Platform Icon" className="w-5 h-5" />
          </button>
        </div>
      </div>

     
      <h1 className="text-center text-sm mt-4">
        2024 | Greetings with ❤️ from Ulaanbaatar
      </h1>
    </div>
  );
};

export default Togsgol;
