// function MobileMenu({ menuOpen, setMenuOpen }) {
//   return (
//     <div
//       className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center
//                         transition-all duration-300 ease-in-out

//                         ${
//                           menuOpen
//                             ? "h-screen opacity-100 pointer-events-auto"
//                             : "h-0 opacity-0 pointer-events-none"
//                         }
//                       `}
//     >
//       <button
//         onClick={() => setMenuOpen(false)}
//         className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer"
//         aria-label="Close Menu"
//       >
//         &times;
//       </button>
//       <a
//         href="#home"
//         onClick={() => setMenuOpen(false)}
//         className={`text-2xl font-semibold text-white my-4  transform transition-transform duration-300
//               ${
//                 menuOpen
//                   ? "opacity-100 translate-y-0"
//                   : "opacity-0 translate-y-5"
//               }

//         `}
//       >
//         Home
//       </a>
//       <a
//         href="#about"
//         onClick={() => setMenuOpen(false)}
//         className={`text-2xl font-semibold text-white my-4  transform transition-transform duration-300
//               ${
//                 menuOpen
//                   ? "opacity-100 translate-y-0"
//                   : "opacity-0 translate-y-5"
//               }

//         `}
//       >
//         About
//       </a>
//       <a
//         href="#skill"
//         onClick={() => setMenuOpen(false)}
//         className={`text-2xl font-semibold text-white my-4  transform transition-transform duration-300
//               ${
//                 menuOpen
//                   ? "opacity-100 translate-y-0"
//                   : "opacity-0 translate-y-5"
//               }

//         `}
//       >
//         Skill
//       </a>
//       <a
//         href="#project"
//         onClick={() => setMenuOpen(false)}
//         className={`text-2xl font-semibold text-white my-4  transform transition-transform duration-300
//               ${
//                 menuOpen
//                   ? "opacity-100 translate-y-0"
//                   : "opacity-0 translate-y-5"
//               }

//         `}
//       >
//         Project
//       </a>
//       <a
//         href="#certification"
//         onClick={() => setMenuOpen(false)}
//         className={`text-2xl font-semibold text-white my-4  transform transition-transform duration-300
//               ${
//                 menuOpen
//                   ? "opacity-100 translate-y-0"
//                   : "opacity-0 translate-y-5"
//               }

//         `}
//       >
//         Certification
//       </a>
//       <a
//         href="#contact"
//         onClick={() => setMenuOpen(false)}
//         className={`text-2xl font-semibold text-white my-4  transform transition-transform duration-300
//               ${
//                 menuOpen
//                   ? "opacity-100 translate-y-0"
//                   : "opacity-0 translate-y-5"
//               }

//         `}
//       >
//         Contact
//       </a>
//     </div>
//   );
// }
// export default MobileMenu;
import { AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skill" },
  { name: "Projects", href: "#project" },
  { name: "Certifications", href: "#certification" },
  { name: "Contact", href: "#contact" },
];

// Backdrop overlay variants
const backdropVariants = {
  hidden: {
    opacity: 0,
    clipPath: "circle(0% at 100% 0%)",
    transition: { duration: 0.4, ease: "easeInOut" },
  },
  visible: {
    opacity: 1,
    clipPath: "circle(150% at 100% 0%)",
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

// Container for staggered children
const listContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
};

// Individual link motion
const linkVariants = {
  hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  exit: { opacity: 0, y: 15, transition: { duration: 0.15 } },
};

function MobileMenu({ menuOpen, setMenuOpen }) {
  return (
    <AnimatePresence>
      {menuOpen && (
        <motion.div
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="fixed inset-0 z-50 flex flex-col justify-center items-center bg-slate-950/90 backdrop-blur-xl border-l border-white/10"
        >
          {/* Subtle Ambient Background Glows */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-72 h-72 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-72 h-72 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />

          {/* Close Button with Pulse Hover */}
          <motion.button
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setMenuOpen(false)}
            className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center text-slate-300 hover:text-white bg-slate-900/60 border border-white/10 rounded-2xl backdrop-blur-md cursor-pointer focus:outline-none transition-colors"
            aria-label="Close Menu"
          >
            <span className="text-2xl font-light leading-none">&times;</span>
          </motion.button>

          {/* Staggered Navigation Links */}
          <motion.nav
            variants={listContainerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="flex flex-col items-center space-y-6 z-10"
          >
            {NAV_LINKS.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                variants={linkVariants}
                whileHover={{ scale: 1.1, x: 5 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setMenuOpen(false)}
                className="group relative text-3xl font-bold tracking-wide text-slate-300 hover:text-white transition-colors py-1 flex items-center gap-3"
              >
                {/* Glowing Active/Hover Indicator Dot */}
                <span className="w-2 h-2 rounded-full bg-cyan-400 opacity-0 group-hover:opacity-100 group-hover:shadow-[0_0_12px_#22d3ee] transition-all duration-300" />

                <span>{link.name}</span>

                {/* Animated Gradient Underline */}
                <span className="absolute bottom-0 left-5 right-0 h-[2px] bg-gradient-to-r from-cyan-400 to-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
              </motion.a>
            ))}
          </motion.nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default MobileMenu;
