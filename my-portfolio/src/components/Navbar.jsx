import { useEffect } from "react";
import logo from "../assets/logo.png";

function Navbar({ menuOpen, setMenuOpen }) {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4 ">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-mono text-4xl font-extrabold ">
            <span
              className="bg-gradient-to-r from-gray-400 via-gray-300 to-gray-400
             bg-[length:300%_auto] bg-clip-text text-transparent 
             animate-[gradientMove_10s_linear_infinite]"
            >
              H
            </span>
            <span
              className="bg-gradient-to-br from-blue-500 via-cyan-400 to-blue-500
             bg-[length:300%_auto] bg-clip-text text-transparent 
             animate-[gradientMove_10s_linear_infinite]"
            >
              K
            </span>
            {/* <img src={logo} alt="LOGO HERE" className="w-15 h-15  rounded-full mt-2"/> */}
          </a>
          {/* Mobile Menu */}
          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={() => {
              setMenuOpen((prev) => !prev);
            }}
          >
            &#9776;
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-gray-300 hover:text-white transition-colors "
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-300 hover:text-white transition-colors "
            >
              About
            </a>
            <a
              href="#project"
              className="text-gray-300 hover:text-white transition-colors "
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-white transition-colors "
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
