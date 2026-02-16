import React from "react";
import { skills } from "@/constants/skill";
import { skill } from "@/constants/skill";

export const Brown = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-12 py-12 bg-gray-100 dark:bg-gray-900 text-black dark:text-white">
      <div className="flex flex-col items-center gap-6 px-4">
        <button className="bg-gray-500 dark:bg-gray-600 text-white px-4 py-1 rounded-lg hover:bg-gray-700 dark:hover:bg-gray-500 transition-colors">
          Click Me
        </button>

        <h1 className="text-center text-lg md:text-xl font-semibold">
          The skills, tools and technologies I am really good at:
        </h1>

        <div className="flex flex-wrap justify-center items-center gap-6 max-w-full md:max-w-[1280px]">
          {skills.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-2 w-[280px]"
            >
              <img
                src={item.image}
                alt={item.label}
                className="w-full h-[68px] object-contain"
              />
              <p className="text-center text-sm md:text-base">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center gap-6 px-4">
        <div className="flex flex-wrap justify-center items-center gap-6 max-w-full md:max-w-[1280px]">
          {skill.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-2 w-[280px]"
            >
              <img
                src={item.image}
                alt={item.label}
                className="w-full h-[68px] object-contain"
              />
              <p className="text-center text-sm md:text-base">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brown;

// <main className=" justify-center align-center bg-yellow-950 w-[1440px]  h-[560px]">
//   <button className="bg-gray-500 text-black w-[100px] h-[30px] rounded  hover:bg-gray-700">
//     Skilss
//   </button>

//   <h5>The skills, tools and technologies I am really good at: </h5>
// </main>
