import React from "react";

export const Haaneen = () => {

  const experiences = [
    {
      company: "Upwork",
      role: "Sr. Frontend Developer",
      description: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Ut pretium arcu et massa semper, id fringilla leo semper.",
        "Sed quis justo ac magna.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      ],
      period: "Nov 2021 - Present",
    },
    {
      company: "Upwork",
      role: "Sr. Frontend Developer",
      description: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Ut pretium arcu et massa semper, id fringilla leo semper.",
        "Sed quis justo ac magna.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      ],
      period: "Nov 2021 - Present",
    },
    {
      company: "Upwork",
      role: "Sr. Frontend Developer",
      description: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Ut pretium arcu et massa semper, id fringilla leo semper.",
        "Sed quis justo ac magna.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      ],
      period: "Nov 2021 - Present",
    },
  ];

  return (
    <main className="flex flex-col items-center justify-center gap-8 py-12 bg-gray-50 dark:bg-gray-900 text-black dark:text-white px-4">
      <button className="bg-gray-500 dark:bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 dark:hover:bg-gray-500 transition-colors">
        Skills
      </button>

      <h5 className="text-center text-lg md:text-xl font-semibold">
        The skills, tools and technologies I am really good at:
      </h5>

      <div className="flex flex-col gap-6 w-full max-w-[900px]">
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className="flex flex-col md:flex-row justify-between items-start md:items-center bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 gap-4 md:gap-6"
          >
    
            <div className="flex justify-center items-center w-full md:w-[200px] text-center font-bold">
              {exp.company}
            </div>

          
            <div className="flex flex-col gap-2 w-full md:w-[500px]">
              <h1 className="font-semibold">{exp.role}</h1>
              {exp.description.map((line, i) => (
                <p key={i} className="text-sm md:text-base">
                  {line}
                </p>
              ))}
            </div>

           
            <div className="w-full md:w-[150px] text-center font-medium">
              {exp.period}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Haaneen;
