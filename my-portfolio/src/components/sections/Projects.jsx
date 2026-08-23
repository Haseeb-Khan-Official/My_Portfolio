import RevealOnScroll from "../RevealOnScroll";

// Reusable infinite marquee scroller component
function TechMarquee({ stack }) {
  const duplicatedStack = [...stack, ...stack];

  return (
    <div className="relative w-full overflow-hidden mb-4 py-1">
      {/* Fade edges */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-6 bg-gradient-to-r from-slate-950 to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-6 bg-gradient-to-l from-slate-950 to-transparent" />

      {/* Marquee Track */}
      <div className="flex w-max animate-marquee gap-2 hover:[animation-play-state:paused]">
        {duplicatedStack.map((tech, index) => (
          <span
            key={index}
            className="shrink-0 bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap
                       hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all cursor-pointer"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

function Projects() {
  const handlePedoNetClick = (e) => {
    e.preventDefault();
    alert(
      "PEDO HydroNet is an internal enterprise portal for the Pakhtunkhwa Energy Development Organization. Live public preview is restricted due to database authentication policies.",
    );
  };

  return (
    <section
      id="project"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Project 1: Fuel Price Prediction */}
            <div className="p-6 rounded-xl border border-white/10 bg-black/20 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold mb-2">
                  Fuel Price Prediction Model
                </h3>
                <p className="text-gray-400 mb-4">
                  Built machine learning and deep learning models to estimate
                  future prices of petrol, diesel, and LPG.
                </p>
              </div>
              <div>
                <TechMarquee
                  stack={[
                    "Flutter",
                    "Python",
                    "ML-DL",
                    "Flask",
                    "Pandas",
                    "Scikit-Learn",
                  ]}
                />
                <div className="flex justify-between items-center">
                  <a
                    href="https://github.com/Haseeb-Khan-Official/fuelPricePrediction"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="View Fuel Price Prediction Repo"
                    className="text-sm text-blue-500 hover:text-blue-400 transition-colors my-2 inline-block"
                  >
                    View GitHub Repo →
                  </a>
                </div>
              </div>
            </div>

            {/* Project 2: Conference Webpage */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 bg-black/20 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold mb-2">
                  Conference Webpage Design
                </h3>
                <p className="text-gray-400 mb-4">
                  A single-page conference website made with HTML and CSS for
                  practice.
                </p>
              </div>
              <div>
                <TechMarquee
                  stack={[
                    "HTML5",
                    "CSS3",
                    "Flexbox",
                    "Grid",
                    "Media Queries",
                    "Responsive",
                  ]}
                />
                <div className="flex justify-between items-center">
                  <a
                    href="https://haseeb-khan-official.github.io/MyProjectNew/"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="View Conference Webpage"
                    className="text-sm text-blue-500 hover:text-blue-400 transition-colors my-2 inline-block"
                  >
                    View Project →
                  </a>
                </div>
              </div>
            </div>

            {/* Project 3: Portfolio Website */}
            <div className="p-6 rounded-xl border border-white/10 bg-black/20 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold mb-2">Portfolio Website</h3>
                <p className="text-gray-400 mb-4">
                  Designed and built a complete personal portfolio site for a
                  client. Structured sections, responsive layout, and subtle
                  animation effects.
                </p>
              </div>
              <div>
                <TechMarquee
                  stack={["HTML5", "CSS3", "JavaScript", "Animations"]}
                />
                <div className="flex justify-between items-center">
                  <a
                    href="https://idrees-ahmad-v1.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="View Client Portfolio"
                    className="text-sm text-blue-500 hover:text-blue-400 transition-colors my-2 inline-block"
                  >
                    View Portfolio →
                  </a>
                </div>
              </div>
            </div>

            {/* Project 4: PEDO HydroNet (Includes custom alert trigger) */}
            <div className="p-6 rounded-xl border border-white/10 bg-black/20 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold mb-2">PEDO HydroNet</h3>
                <p className="text-gray-400 mb-4">
                  A full-stack hydrological analytics system (React, PHP, MySQL,
                  Chart.js) to digitize daily gauge flow data, automate rating
                  curve calculations, and render hydrograph reports.
                </p>
              </div>
              <div>
                <TechMarquee
                  stack={[
                    "React (Vite)",
                    "PHP",
                    "MySQL",
                    "JavaScript",
                    "Chart.js",
                    "Tailwind CSS",
                    "REST APIs",
                  ]}
                />
                <div className="flex justify-between items-center">
                  <a
                    href="#pedo-hydronet"
                    onClick={handlePedoNetClick}
                    title="View PEDO HydroNet Details"
                    className="text-sm text-blue-500 hover:text-blue-400 transition-colors my-2 inline-block cursor-pointer"
                  >
                    View Project Info →
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

export default Projects;
