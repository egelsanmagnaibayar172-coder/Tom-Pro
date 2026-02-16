import { Brown } from "@/components/Brown";
import Haaneen from "@/components/Haaneen";
import { Mini } from "@/components/Mini";
import Shine from "@/components/Shine";
import Togsgol from "@/components/Togsgol";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 text-black dark:text-white">
      <header className="flex items-center justify-between w-full max-w-[1440px] p-4 shadow-md bg-white dark:bg-gray-800">
        <h1 className="text-xl font-bold">Egelsan</h1>

        <nav className="hidden md:flex">
          <ul className="flex space-x-4">
            <li>
              <a
                href="#"
                className="hover:text-gray-500 dark:hover:text-gray-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-gray-500 dark:hover:text-gray-300"
              >
                Work
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-gray-500 dark:hover:text-gray-300"
              >
                Testimonials
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-gray-500 dark:hover:text-gray-300"
              >
                Contact
              </a>
            </li>
            <li>
              <button className="bg-gray-500 dark:bg-gray-600 text-white px-3 py-2 rounded-lg hover:bg-gray-700 dark:hover:bg-gray-500 transition-colors">
                Download CV
              </button>
            </li>
          </ul>
        </nav>
      </header>

      {/* Main Section */}
      <main className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 w-full max-w-[1216px] mt-8">
        {/* Text Content */}
        <div className="flex flex-col justify-between bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md w-full md:w-[500px] h-auto md:h-[400px]">
          <h1 className="text-2xl font-bold mb-2">Hi, I'm Tom 👋</h1>
          <p className="text-sm md:text-base mb-4">
            I specialize in full stack development, particularly with React.js
            and Node.js. My main goal is to create exceptional digital
            experiences that are fast, visually appealing, and accessible to
            everyone. With over 7 years of experience in web development, I
            continue to find joy in crafting innovative solutions and designs.
          </p>
          <div className="text-sm md:text-base space-y-1">
            <h6>Ulaanbaatar, Mongolia</h6>
            <h6>Available for new projects</h6>
          </div>
        </div>

        <div className="flex justify-center md:justify-end items-center w-full md:w-[300px] h-[400px]">
          <img
            src="25LP5669.jpg"
            alt="Tom"
            className="mx-auto rounded-lg shadow-lg w-64 h-64 object-cover"
          />
        </div>
      </main>

      <div className="w-full max-w-[1440px] relative mt-6">
        {/* <button className="absolute top-36 right-24 bg-gray-400 dark:bg-gray-600 text-white px-4 py-2 rounded-xl hover:bg-gray-500 dark:hover:bg-gray-500 transition-colors">
          Click Me
        </button> */}
      </div>

      <Mini />
      <Brown />
      <Haaneen />
      <Shine />
      <Togsgol />
    </div>
  );
};

export default Home;
