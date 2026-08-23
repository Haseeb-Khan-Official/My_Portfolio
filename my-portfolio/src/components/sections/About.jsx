import RevealOnScroll from "../RevealOnScroll";

function About() {
  const educationData = [
    {
      degree: "B.S. in Software Engineering",
      institution: "University of Malakand, KPK, Pakistan",
      period: "2020 – 2024",
      details:
        "Relevant Coursework: Data Structures & Algorithms, Web Engineering, Database Management Systems (DBMS), Machine Learning & Artificial Intelligence, Software Engineering.",
    },
    {
      degree: "F.Sc Pre-Engineering (Intermediate)",
      institution: "Alhuda College Chakdara, Dir Lower, KPK",
      period: "2018 – 2020",
      details: "Focus Areas: Mathematics, Physics, Chemistry, and English.",
    },
    {
      degree: "Matriculation (Science)",
      institution: "Alhuda Model School Ouch, Dir Lower, KPK",
      period: "2016 – 2018",
      details: "Focus Areas: Physics, Chemistry, Mathematics, and others.",
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          {/* Bio Box */}
          <div className="tracking-wider text-center rounded-xl p-8 border border-white/10 bg-slate-900/30 backdrop-blur-sm mb-6">
            <p className="text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Software Engineer building functional, scalable web platforms.
              Combining full-stack development (React, Node.js, PHP, MySQL) with
              real-world public sector systems experience. Passionate about
              clean code, data-driven architecture, and continuous technical
              growth.
            </p>
          </div>

          {/* Education Section */}
          <div className="p-6 sm:p-8 rounded-xl border border-white/10 bg-slate-800/30 hover:-translate-y-1 hover:border-blue-500/30 transition-all">
            <h3 className="text-xl font-bold mb-6 text-white flex items-center gap-2 border-b border-white/10 pb-3">
              Education
            </h3>

            <div className="space-y-6">
              {educationData.map((item, index) => (
                <div
                  key={index}
                  className="space-y-2 relative border-l-2 border-blue-500/30 pl-4 ml-1"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h4 className="text-base font-semibold text-white">
                      {item.degree}
                    </h4>
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-900/40 text-blue-300 border border-blue-700/40 self-start sm:self-auto">
                      {item.period}
                    </span>
                  </div>
                  <p className="text-sm text-blue-300/90 font-medium">
                    {item.institution}
                  </p>
                  <p className="text-sm text-gray-400 leading-relaxed pt-1">
                    {item.details}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}

export default About;
