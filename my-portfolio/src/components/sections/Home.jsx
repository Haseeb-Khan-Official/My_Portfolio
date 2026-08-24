import RevealOnScroll from "../RevealOnScroll";
import ProfilePic from "../../assets/ProfilePic.png";
import { Typewriter } from "react-simple-typewriter";
import TextMarquee from "../TextMarquee";

function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative px-6 md:px-12 pt-28 md:pt-0 overflow-hidden bg-black"
    >
      {/* 1. BACKGROUND MARQUEE (OUTSIDE REVEALONSCROLL, AT SECTION ROOT) */}
      <TextMarquee
        text="HASEEB KHAN • SOFTWARE ENGINEER • MERN STACK • PEC ENGINEER • "
        direction="left"
        speed="65s"
      />

      {/* 2. MAIN CONTENT (Z-10 ENSURES IT SITS ON TOP OF MARQUEE) */}
      <RevealOnScroll>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-30 max-w-7xl mx-auto z-10 relative">
          {/* LEFT SIDE: PROFILE PIC */}
          <div className="flex-shrink-0 relative group">
            <div className="absolute -inset-4 rounded-full border border-dashed border-cyan-500/30 animate-[spin_20s_linear_infinite] pointer-events-none" />
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 via-cyan-400 to-indigo-600 opacity-60 blur-xl animate-morph transition duration-700 group-hover:opacity-90 group-hover:scale-105" />

            <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96 animate-morph overflow-hidden border-2 border-cyan-400/40 bg-[#0a0a0a] shadow-[0px_0px_50px_rgba(59,130,246,0.4)] transition-all duration-500 group-hover:border-cyan-400">
              <img
                src={ProfilePic}
                alt="Haseeb Khan"
                className="w-full h-full object-cover scale-105 group-hover:scale-110 transition duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/60 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* RIGHT SIDE: TEXT & TYPEWRITER */}
          <div className="text-center z-10 px-4">
            <div className="mb-3 px-3 py-1 rounded bg-gray-900/40 border border-white/10 text-gray-400 text-lg inline-flex items-center gap-2 sm:text-sm tracking-wide">
              PEC Registered Engineer
            </div>
            <h1 className="home_heading text-4xl sm:text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 bg-[length:300%_auto] bg-clip-text text-transparent animate-[gradientMove_10s_linear_infinite] tracking-tight">
              Hi, I am Haseeb Khan
            </h1>
            <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto tracking-wider">
              A full stack developer working with the MERN stack. I build both
              frontend and backend with a focus on clean code and useful
              features. Still learning and improving every day.
            </p>

            {/* TYPEWRITER CONTAINER */}
            <div className="min-h-[4rem] max-md:w-full md:h-[14vh] md:w-[33vw] mb-4 flex justify-self-center items-center justify-center text-blue-400 text-xl md:text-2xl text-left border border-white/10 rounded-lg glow-text px-4 md:px-0 bg-black/20 backdrop-blur-sm">
              <Typewriter
                words={[
                  "PEC Registered Engineer",
                  "Software Engineer",
                  "Full Stack Web Developer",
                  "HTML - CSS",
                  "JavaScript - ReactJS - TypeScript",
                  "Vite - TailwindCSS - BootStrap",
                  "NodeJS - ExpressJS",
                  "MongoDB - MySQL",
                  "Python - C++ - PHP",
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={40}
                delaySpeed={2000}
              />
            </div>

            <div className="flex justify-center space-x-9">
              <a
                href="https://www.linkedin.com/in/haseebkhanhk/"
                target="_blank"
                rel="noopener noreferrer"
                title="Connect with me on LinkedIn"
                className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] cursor-pointer"
              >
                My LinkedIn
              </a>

              <a
                href="https://github.com/Haseeb-Khan-Official"
                target="_blank"
                rel="noopener noreferrer"
                title="Explore my projects on GitHub"
                className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10 cursor-pointer"
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
