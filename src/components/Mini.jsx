import React from "react";

export const Mini = () => {
  return (
    <main className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-20 py-12 px-4 bg-gray-50 dark:bg-gray-900 text-black dark:text-white">
  
      <div className="flex justify-center items-center w-full md:w-[584px] bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4">
        <img
          src="25LP5669.jpg"
          alt="Tom"
          className="mx-auto rounded-lg shadow-lg w-full h-[300px] md:h-[400px] object-cover"
        />
      </div>

      <div className="flex flex-col gap-4 w-full md:w-[584px] bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
        <h1 className="text-2xl font-bold">
          Curious about me? Here you have it:
        </h1>

        <p className="text-sm md:text-base">
          I'm a designer turned full stack developer, passionate about React.js
          and Node.js. I excel in blending technical and visual aspects to craft
          exceptional digital products, prioritizing user experience, precise
          design, and optimized code.
        </p>

        <p className="text-sm md:text-base">
          Since starting my web development journey in 2015, I've embraced
          challenges and kept up with the latest tech trends. Now in my early
          thirties, seven years in, I'm building cutting-edge web apps using
          Next.js, TypeScript, Nestjs, Tailwindcss, Supabase, and more.
        </p>

        <p className="text-sm md:text-base">
          With a progressive mindset, I enjoy the entire product development
          process, from ideation to execution. Off duty, you'll find me on
          Twitter, tracking startup journeys, or unwinding. Follow me for tech
          insights and public project updates on Twitter or GitHub.
        </p>

        <p className="text-sm md:text-base">
          Finally, some quick bits about me.
        </p>

        <ul className="list-disc list-inside space-y-1 text-sm md:text-base">
          <li>B.E. in Computer Engineering</li>
          <li>Avid learner</li>
          <li>Full time freelancer</li>
        </ul>

        <p className="text-sm md:text-base">
          One last thing, I'm available for freelance work, so feel free to
          reach out and say hello! I promise I don't bite 😉
        </p>
      </div>
    </main>
  );
};

export default Mini;
