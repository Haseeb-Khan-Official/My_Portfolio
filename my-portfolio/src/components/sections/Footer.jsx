import RevealOnScroll from "../RevealOnScroll";

function Footer() {
  return (
    <section className="bg-gradient-to-b from-[#0a0a0a] to-white/10 text-gray-400 mt-20 py-16 px-4 md:px-16 border-t  border-gray-900">
      <RevealOnScroll>
        <div className="max-w-7xl mx-auto text-center">
          {/* Social Links */}
          <div className="flex justify-center mb-6 space-x-4">
            <a
              className="bg-gray-500 text-gray-900 rounded-full p-3 hover:shadow-lg hover:text-gray-400 transition duration-300"
              target="_blank"
              title="Explore my projects on GitHub"
              href="https://github.com/Haseeb-Khan-Official"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              className="bg-gray-500 text-gray-900 rounded-full p-3 hover:shadow-lg hover:text-red-400 transition duration-300"
              target="_blank"
              title="send Email @ haseebkh577221@gmail.com"
              href="mailto:haseebkh577221@gmail.com"
            >
              <i className="fas fa-envelope"></i>
            </a>
            <a
              className="bg-gray-500 text-gray-900 rounded-full p-3 hover:shadow-lg hover:text-blue-600 transition duration-300"
              target="_blank"
              title="Connect with me on LinkedIn"
              href="https://www.linkedin.com/in/haseebkhanhk/"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              className="bg-gray-500 text-gray-900 rounded-full p-3 hover:shadow-lg hover:text-pink-500 transition duration-300"
              target="_blank"
              title="Connect with me on Instagram"
              href="https://www.instagram.com/oroph1l3?igsh=a21kdjB2emZhdWcw&utm_source=qr"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>

          {/* Footer Links */}
          <div className="flex flex-wrap justify-center mb-4 space-x-6 text-sm text-gray-300">
            <a href="#about" className="hover:underline ">
              About
            </a>
            <a href="#skills" className="hover:underline ">
              Skills
            </a>
            <a href="#projects" className="hover:underline ">
              Projects
            </a>
            <a href="#contact" className="hover:underline">
              Contact
            </a>
            {/* Resume to be added soon */}
            {/* <a
    href="/resume.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="text-cyan-400 hover:underline font-semibold"
  >
    Resume PDF ↗
  </a> */}
          </div>

          {/* Copyright */}

          <p className="text-sm">
            &copy;{" "}
            <span className="font-semibold text-gray-300">Haseeb Khan</span>.
            All Rights Reserved. Designed by{" "}
            <a
              className="font-semibold hover:font-bold  text-gray-300"
              target="_blank"
              title="My Portfolio"
              href="https://haseebkhan-portfolio.vercel.app/"
            >
              Haseeb Khan
            </a>
          </p>
        </div>
      </RevealOnScroll>
    </section>
  );
}

export default Footer;
