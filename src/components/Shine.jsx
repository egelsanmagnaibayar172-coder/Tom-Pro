import React from "react";

const projects = [
  {
    title: "UBCab",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    image: "8c0d7b3f221639601e00cbe07705f752b21fc588.jpg",
    tech: [
      "React",
      "Next.js",
      "Typescript",
      "Nest.js",
      "PostgreSQL",
      "Tailwindcss",
      "Figma",
      "Cypress",
      "Storybook",
      "Git",
    ],
  },
  {
    title: "Mentorhub",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    image: "600f0a53ec233eeec30acb72a718cce9a3c1c7dc (1).png",
    tech: [
      "React",
      "Next.js",
      "Typescript",
      "Nest.js",
      "PostgreSQL",
      "Tailwindcss",
      "Figma",
      "Cypress",
      "Storybook",
      "Git",
    ],
  },
  {
    title: "UBCab",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    image: "f7f41fb29978d6752a84190b8a3ff63dfa2ce73a.png",
    tech: [
      "React",
      "Next.js",
      "Typescript",
      "Nest.js",
      "PostgreSQL",
      "Tailwindcss",
      "Figma",
      "Cypress",
      "Storybook",
      "Git",
    ],
  },
];

export const Shine = () => {
  return (
    <div className="flex flex-col items-center gap-12 py-12 bg-gray-50 dark:bg-gray-900 text-black dark:text-white px-4">
      {projects.map((proj, idx) => {
        const isReversed = idx % 2 !== 0;
        return (
          <div
            key={idx}
            className={`flex flex-col md:flex-row ${
              isReversed ? "md:flex-row-reverse" : ""
            } gap-8 md:gap-12 w-full max-w-[1152px]`}
          >
            <div className="flex w-full md:w-1/2 bg-gray-100 dark:bg-gray-800 rounded-xl items-center justify-center p-4">
              <img
                src={proj.image}
                alt={proj.title}
                className="w-full h-[384px] md:w-[480px] md:h-[384px] object-cover rounded-lg shadow-lg"
              />
            </div>

            <div className="flex flex-col justify-center gap-4 md:gap-6 w-full md:w-1/2">
              <h1 className="text-2xl font-bold">{proj.title}</h1>
              <p className="text-sm md:text-base">{proj.description}</p>

              <div className="flex flex-wrap gap-2 md:gap-3 mt-2">
                {proj.tech.map((tech, i) => (
                  <button
                    key={i}
                    className="bg-gray-500 dark:bg-gray-600 text-white px-3 py-1 rounded-md hover:bg-gray-700 dark:hover:bg-gray-500 transition-colors text-sm"
                  >
                    {tech}
                  </button>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Shine;
