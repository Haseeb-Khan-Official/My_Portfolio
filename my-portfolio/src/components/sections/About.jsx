import RevealOnScroll from "../RevealOnScroll";

function About() {
  const frontendSkills = [
    "HTML",
    "CSS",
    "Tailwind",
    "JavaScript",
    "ReactJS",
    "Vite",
  ];

  const otherSkills = [
    "VS Code",
    "Python",
    "Flask API",
    "Jupyter Notebook",
    "SQL",
    "Git/GitHub",
    "Problem-solving",
    "Fast learner",
    "Communication",
    "Team collaboration",
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4 ">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>
          <div className="tracking-wider text-center rounded-xl p-8 border-white/10 border ">
            <p className="text-gray-300 mb-6 ">
              Junior web developer turning ideas into real projects, exploring
              new tools, and improving skills every day. Currently focusing on
              frontend development with modern frameworks, while steadily
              working toward full-stack expertise.
            </p>
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-6 ">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">FrontEnd</h3>
                <div className="flex flex-wrap gap-2 ">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 p-3 rounded-full text-sm hover:bg-blue-500/20
                                   hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition cursor-pointer
                                  "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Other Skills + Tools</h3>
                <div className="flex flex-wrap gap-2 ">
                  {otherSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 p-3 rounded-full text-sm hover:bg-blue-500/20
                                   hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition cursor-pointer
                                  "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {/* Educaton */}
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              {/* To add an emoji press Win + . (if on Windows) */}
              <h3 className="text-xl font-bold mb-4">🏫 Education</h3>
              <ul className="list-none list-inside text-gray-300 space-y-2">
                <li>
                  <strong> B.S in Software Engineering </strong> - University of
                  Malakand, KPK, Pakistan (2020-2024)
                </li>
                <li>
                  <strong>Relevant Coursework</strong> - Data Structures, Web
                  Developement, ML and AI, DBMS...
                </li>
              </ul>
            </div>
            {/* Experience and Certifications */}
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              {/* To add an emoji press Win + . (if on Windows) */}
              <h3 className="text-xl font-bold mb-4">
                💼 Experience & Certifications
              </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4>
                    Seeking junior frontend roles to apply skills and gain
                    real-world experience. Actively building personal projects
                    to grow in frontend development.
                  </h4>
                </div>
                {/* Certificates */}
                <div className="py-2 border border-white/10 rounded-lg p-3">
                  <p className="text-xl text-white font-semibold mb-4">📜 Certification</p>
                  <p className="text-gray-300 font-semibold mb-3">
                    Cisco Programming Essentials in Python – Cisco Networking
                    Academy (2024)
                  </p>
                  <a
                    href="https://drive.google.com/file/d/1FPNhDOwihd5xAe-hZFUBjkBmMP4hOl5R/view?usp=sharing"
                    title="CISCO_Programming_Essentials_in_Python_certificate"
                    target="_blank"
                    className=" text-gray-300 text-sm hover:text-gray-400 transition-colors cursor-pointer"
                  >
                    View Certificate →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}
export default About;
