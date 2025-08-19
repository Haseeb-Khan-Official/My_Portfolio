import RevealOnScroll from "../RevealOnScroll";
import ProfilePic from "../../assets/ProfilePic.png"; // if inside src/assets
import { Typewriter } from "react-simple-typewriter";

function Home(){

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative px-6 md:px-12"
    >
      <RevealOnScroll>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-30 max-w-7xl mx-auto">
          {/* LEFT SIDE */}
          {/* bg-amber-200 */}
          <div className="flex-shrink-0">
            <img
              src={ProfilePic}
              alt="Haseeb Khan"
              className="w-72 h-72 md:w-96 md:h-96 rounded-full object-cover 
               border-2 border-gray-400 bg-[#0a0a0a] shadow-[0px_0px_80px_rgba(59,130,246,0.5)] hover:scale-105 hover:shadow-[0px_0px_80px_rgba(59,130,246,0.9)] transition duration-500"
            />
          </div>

          {/* RIGHT SIDE */}
          {/* bg-amber-200 */}
          <div className="text-center z-10 px-4 ">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 bg-[length:300%_auto] bg-clip-text text-transparent animate-[gradientMove_10s_linear_infinite] tracking-tight ">
              Hi, I am Haseeb Khan
            </h1>
            <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto tracking-wider">
              I'm a front-end web developer who makes clean and useful websites.
              Still exploring, still learning, and enjoying the journey.
            </p>

            {/* TYPEWRITER EFFECT TO BE ADDED HERE */}
            <div className="h-[14vh] w-[33vw]  mb-4 flex justify-self-center items-center justify-center text-gray-400 text-2xl text-left border border-white/10 rounded-lg glow-text ">
              <Typewriter
                words={[
                  "Software Engineer",
                  "Frontend Web Developer",
                  "HTML - CSS - JavaScript",
                  "React - Vite - TailwindCSS",
                  "Python - C++",
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={40}
                delaySpeed={2000}
              />
            </div>

            <div className="flex justify-center space-x-9 ">
              <a
                href="https://www.linkedin.com/in/haseebkhanhk/"
                target="_blank"
                title="Connect with me on LinkedIn"
                className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5
                   hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)] cursor-pointer"
              >
                My LinkedIn
              </a>

              <a
                href="https://github.com/Haseeb-Khan-Official"
                target="_blank"
                title="Explore my projects on GitHub"
                className=" border border-blue500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5
                   hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10 cursor-pointer"
              >
                My GitHub
              </a>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}
export default Home;
