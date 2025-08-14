import RevealOnScroll from "../RevealOnScroll";

function Projects() {
  return (
    <section
      id="project"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4 ">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">
                Fuel Price Prediction Model
              </h3>
              <p className="text-gray-400 mb-3">
                Built machine learning and deep learning models to estimate
                future prices of petrol, diesel, and LPG.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Flutter", "Python", "ML-DL", "Flask"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 p-3 rounded-full text-sm hover:bg-blue-500/20
                                   hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all cursor-pointer
                                  "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/Haseeb-Khan-Official/fuelPricePrediction"
                  title="View project Repo on GitHub"
                  target="_blank"
                  className="text-sm text-blue-500   hover:text-blue-400 transition-colors my-4"
                >
                  View GitHub Repo →
                </a>
              </div>
            </div>
            {/*  */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">
                Conference Webpage Design
              </h3>
              <p className="text-gray-400 mb-3">
                A single-page conference website made with HTML and CSS for
                practice.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["HTML5", "CSS3(Flexbox, Grid, Media Queries)"].map(
                  (tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 p-3 rounded-full text-sm hover:bg-blue-500/20
                                   hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all cursor-pointer
                                  "
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://haseeb-khan-official.github.io/MyProjectNew/"
                  title="View Conference Webpage"
                  target="_blank"
                  className="text-sm text-blue-500 hover:text-blue-400 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
            {/*  */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">To-Do-list app</h3>
              <p className="text-gray-400 mb-3">
                A simple app to add, delete, and manage tasks.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["CSS3", "JavaScript", "React (Vite)"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 p-3 rounded-full text-sm hover:bg-blue-500/20
                                   hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all cursor-pointer
                                  "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://to-do-listv1.vercel.app/"
                  target="_blank"
                  title="View To-Do List App"
                  className="text-sm text-blue-500 hover:text-blue-400 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
            {/*  */}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}
export default Projects;
