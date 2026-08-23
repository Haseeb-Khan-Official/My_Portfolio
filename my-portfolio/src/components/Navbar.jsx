import { useEffect, useState } from "react";

function Navbar({ menuOpen, setMenuOpen }) {
  const [active, setActive] = useState("home");

  // Lock scroll when menu is open (mobile)
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  // Track scroll to highlight active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "skill",
        "project",
        "certification",
        "contact",
      ];
      let current = "home";

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section && window.scrollY >= section.offsetTop - 120) {
          current = id;
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="#home" className="font-mono text-4xl font-extrabold">
            <span
              className="bg-gradient-to-tr from-gray-400 via-gray-300 to-gray-400
             bg-[length:300%_auto] bg-clip-text text-transparent 
             animate-[gradientMove_10s_linear_infinite]"
            >
              H
            </span>
            <span
              className="bg-gradient-to-tr from-blue-500 via-cyan-400 to-blue-500
             bg-[length:300%_auto] bg-clip-text text-transparent 
             animate-[gradientMove_10s_linear_infinite]"
            >
              K
            </span>
          </a>

          {/* Mobile Menu Icon */}
          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {[
              "home",
              "about",
              "skill",
              "project",
              "certification",
              "contact",
            ].map((id) => (
              <a
                key={id}
                href={`#${id}`}
                className={`cursor-pointer transition-colors ${
                  active === id
                    ? "text-white font-bold"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
