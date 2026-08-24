import RevealOnScroll from "../RevealOnScroll";

function Skills() {
  // Row 1: Web & Frontend
  const row1 = [
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Next",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "TypeScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
      name: "HTML5",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS3",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "Tailwind CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    },
    {
      name: "Bootstrap",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    },
    {
      name: "Vite",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg",
    },
  ];

  // Row 2: Backend, AI/ML & Tools
  const row2 = [
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "Express",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    },
    {
      name: "MongoDB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    {
      name: "PHP",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    },
    {
      name: "MySQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
    {
      name: "Python",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      name: "C++",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    },
    {
      name: "TensorFlow",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
    },
    {
      name: "Pandas",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
    },
    {
      name: "Flask",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
    },
    {
      name: "Git",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      name: "GitHub",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    },
    {
      name: "VS Code",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    },
    {
      name: "Axios",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/axios/axios-plain.svg",
    },

    // Add to Row 2 (AI, Data Science & Backend Tools)
    {
      name: "Jupyter",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg",
    },
    {
      name: "NumPy",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
    },
    {
      name: "Postman",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
    },
    {
      // name: "XAMPP",
      // icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xampp/xampp-original.svg",

      name: "XAMPP",
      icon: "https://cdn.simpleicons.org/xampp/FB7A24",
    },
  ];

  const marqueeRow1 = [...row1, ...row1];
  const marqueeRow2 = [...row2, ...row2];

  return (
    <section
      id="skill"
      className=" min-h-screen flex items-center justify-center overflow-hidden py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4 w-full">
          <h2 className="text-3xl font-bold mb-10 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Skills & Tech Stack
          </h2>

          <div className="relative w-full overflow-hidden rounded-xl border border-white/10 bg-black/20 p-6 backdrop-blur-sm space-y-6">
            {/* Left and Right Fade Overlays */}
            <div className="absolute top-0 bottom-0 left-0 w-16 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none" />
            <div className="absolute top-0 bottom-0 right-0 w-16 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none" />

            {/* Row 1: Right to Left */}
            <div className="flex w-max animate-marquee-left space-x-6">
              {marqueeRow1.map((skill, index) => (
                <div
                  key={`r1-${index}`}
                  className="flex items-center gap-3 px-4 py-2.5 rounded-xl border border-white/10 bg-slate-800/50 hover:border-blue-500/40 hover:bg-slate-800/80 transition-all cursor-default group"
                >
                  <img
                    src={skill.icon}
                    alt={`${skill.name} logo`}
                    className="w-7 h-7 object-contain group-hover:scale-110 transition-transform"
                    loading="lazy"
                  />
                  <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors whitespace-nowrap">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>

            {/* Row 2: Left to Right */}
            <div className="flex w-max animate-marquee-right space-x-6">
              {marqueeRow2.map((skill, index) => (
                <div
                  key={`r2-${index}`}
                  className="flex items-center gap-3 px-4 py-2.5 rounded-xl border border-white/10 bg-slate-800/50 hover:border-blue-500/40 hover:bg-slate-800/80 transition-all cursor-default group"
                >
                  <img
                    src={skill.icon}
                    alt={`${skill.name} logo`}
                    className="w-7 h-7 object-contain group-hover:scale-110 transition-transform"
                    loading="lazy"
                  />
                  <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors whitespace-nowrap">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}

export default Skills;
