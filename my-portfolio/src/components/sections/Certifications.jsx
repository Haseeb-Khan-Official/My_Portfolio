// import { useState } from "react";
// import RevealOnScroll from "../RevealOnScroll";

// function Certifications() {
//   const certificationsData = [
//     {
//       title: "Programming Essentials in Python",
//       issuer: "Cisco Networking Academy",
//       date: "2024",
//       image:
//         "https://drive.google.com/thumbnail?id=1FPNhDOwihd5xAe-hZFUBjkBmMP4hOl5R&sz=w800",
//       credentialUrl:
//         "https://drive.google.com/file/d/1FPNhDOwihd5xAe-hZFUBjkBmMP4hOl5R/view?usp=sharing",
//       tags: ["Python", "Cisco", "Programming"],
//     },
//     {
//       title: "PEC Registered Engineer",
//       issuer: "Pakistan Engineering Council",
//       date: "2025",
//       image:
//         "https://drive.google.com/thumbnail?id=1xf6LBz2z-GwgM6jKg9v2qSbBbxfsm4s8&sz=w800",
//       credentialUrl:
//         "https://drive.google.com/file/d/1xf6LBz2z-GwgM6jKg9v2qSbBbxfsm4s8/view?usp=drive_link",
//       tags: ["PEC"],
//     },
//     {
//       title:
//         "Graduate Engineer Trainee (GET) - 6-Month Professional Experience",
//       issuer: "Pakistan Engineering Council (PEC)",
//       date: "2026",
//       image:
//         "https://drive.google.com/thumbnail?id=1udEt1U9NWWNOhnBXMwTw1l1HA8ifL0xE&sz=w800",
//       credentialUrl:
//         "https://drive.google.com/file/d/1udEt1U9NWWNOhnBXMwTw1l1HA8ifL0xE/view?usp=drive_link",
//       tags: ["PEC", "GET Program", "Engineering"],
//     },
//     {
//       title: "1st Young Engineers Personality Development Program",
//       issuer: "National Defence University Islamabad / PEC",
//       date: "2026",
//       image:
//         "https://drive.google.com/thumbnail?id=16wgwH7tCiC2rE3pqt3bJOrZHv3f3vkea&sz=w800",
//       credentialUrl:
//         "https://drive.google.com/file/d/16wgwH7tCiC2rE3pqt3bJOrZHv3f3vkea/view?usp=drive_link",
//       tags: ["NDU", "PEC", "Soft-Skills"],
//     },
//     {
//       title: "5-Month Industrial/Field Training (P&DD, PEDO, Irrigation, C&W)",
//       issuer: "Planning and Development Department, Khyber Pakhtunkhwa",
//       date: "2026",
//       image:
//         "https://drive.google.com/thumbnail?id=1-l5ruN60qct_5xPP-LY0T7EIfYVQ0AQm&sz=w800",
//       credentialUrl:
//         "https://drive.google.com/file/d/1-l5ruN60qct_5xPP-LY0T7EIfYVQ0AQm/view?usp=drive_link",
//       tags: ["P&D", "Public Sector", "IT Infrastructure"],
//     },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const prevSlide = () => {
//     setCurrentIndex((prev) =>
//       prev === 0 ? certificationsData.length - 1 : prev - 1,
//     );
//   };

//   const nextSlide = () => {
//     setCurrentIndex((prev) =>
//       prev === certificationsData.length - 1 ? 0 : prev + 1,
//     );
//   };

//   return (
//     <section
//       id="certification"
//       className="min-h-screen flex items-center justify-center py-20"
//     >
//       <RevealOnScroll>
//         <div className="max-w-5xl mx-auto px-4 space-y-12">
//           {/* Section Header */}
//           <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
//             Experience and Certifications
//           </h2>

//           {/* Work Experience Card */}
//           <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
//             <div className="space-y-6">
//               <h3 className="text-xl font-bold flex items-center gap-2 text-white">
//                 Work Experience
//               </h3>

//               {/* Experience Block */}
//               <div className="p-6 rounded-lg border border-white/10 space-y-6">
//                 <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-white/10 pb-4 gap-2">
//                   <div>
//                     <h4 className="text-lg font-bold text-white">
//                       Graduate Engineer Trainee{" "}
//                       <span className="text-blue-500 font-normal">
//                         (Full-Stack / Software)
//                       </span>
//                     </h4>
//                     <p className="text-gray-400 text-sm font-medium">
//                       Pakistan Engineering Council (PEC) Placement Program
//                     </p>
//                   </div>
//                   <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 border border-blue-500/20 self-start sm:self-auto">
//                     Jan 2026 – July 2026
//                   </span>
//                 </div>

//                 {/* PEDO Placement */}
//                 <div className="space-y-2">
//                   {/* <h5 className="text-sm font-semibold text-blue-500">
//                     Pakhtunkhwa Energy Development Organization (PEDO) – IT &
//                     Infrastructure
//                   </h5> */}
//                   <div className="flex flex-wrap items-center justify-between gap-2">
//                     <h5 className="text-sm font-semibold text-blue-500">
//                       Pakhtunkhwa Energy Development Organization (PEDO) – IT &
//                       Infrastructure
//                     </h5>
//                     <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-gray-900/40 text-blue-400 border border-blue-500/20">
//                       Jan 2026 – Mar 2026
//                     </span>
//                   </div>
//                   <ul className="list-disc list-inside space-y-2 text-gray-400 text-sm leading-relaxed pl-1">
//                     <li>
//                       Engineered{" "}
//                       <strong className="text-white font-medium">
//                         PEDO HydroNet
//                       </strong>
//                       , a full-stack hydrological analytics system (React, PHP,
//                       MySQL, Chart.js) to digitize daily gauge flow data,
//                       automate rating curve calculations, and render hydrograph
//                       reports.
//                     </li>
//                     <li>
//                       Designed scalable MySQL relational schemas and optimized
//                       stored procedures for continuous hydrology data
//                       processing, replacing manual tracking workflows.
//                     </li>
//                     <li>
//                       Developed a modern{" "}
//                       <strong className="text-white font-medium">
//                         Full-stack Complaint Management System
//                       </strong>
//                       , establishing a digital helpdesk pipeline to track ticket
//                       lifecycles, user requests, and IT infrastructure updates.
//                     </li>
//                   </ul>
//                 </div>

//                 {/* Rotational Placements */}
//                 <div className="space-y-2">
//                   {/* <h5 className="text-sm font-semibold text-blue-500">
//                     Multi-Department Rotational Placements (Planning &
//                     Development, Irrigation, C&W)
//                   </h5> */}
//                   <div className="flex flex-wrap items-center justify-between gap-2">
//                     <h5 className="text-sm font-semibold text-blue-500">
//                       Multi-Department Rotational Placements (Planning &
//                       Development, Irrigation, C&W)
//                     </h5>
//                     <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-gray-900/40 text-blue-400 border border-blue-500/20">
//                       Apr 2026 – May 2026
//                     </span>
//                   </div>
//                   <ul className="list-disc list-inside space-y-2 text-gray-400 text-sm leading-relaxed pl-1">
//                     <li>
//                       Evaluated public sector IT workflows and infrastructure
//                       operations, identifying automation opportunities across
//                       department-wide technical systems.
//                     </li>
//                     <li>
//                       Collaborated with cross-functional engineering leads to
//                       standardize digital asset management and project
//                       monitoring reporting.
//                     </li>
//                   </ul>
//                 </div>

//                 {/* Soft Skills Training Placements */}
//                 <div className="space-y-2">
//                   <div className="flex flex-wrap items-center justify-between gap-2">
//                     <h5 className="text-sm font-semibold text-blue-500">
//                       Professional Development & Soft Skills Training (PEC &
//                       NDU)
//                     </h5>
//                     <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
//                       July 2026
//                     </span>
//                   </div>
//                   <ul className="list-disc list-inside space-y-2 text-gray-400 text-sm leading-relaxed pl-1">
//                     <li>
//                       Completed specialized training in leadership, technical
//                       documentation, agile teamwork, and public sector
//                       administrative workflows.
//                     </li>
//                   </ul>
//                 </div>

//                 {/* Credentials List */}
//                 {/* <div className="pt-4 border-t border-white/10 space-y-3">
//                   <h5 className="text-sm font-semibold text-blue-500">
//                     Professional Status
//                   </h5>
//                   <ul className="list-disc list-inside space-y-2 text-gray-400 text-sm leading-relaxed pl-1">
//                     <li>
//                       Registered Engineer —{" "}
//                       <strong className="text-white font-medium">
//                         Pakistan Engineering Council (PEC)
//                       </strong>
//                     </li>
//                   </ul>
//                 </div> */}
//               </div>
//             </div>
//           </div>

//           {/* Carousel Certifications Section */}
//           <div className="space-y-6">
//             <div className="flex justify-between items-center">
//               <h3 className="text-xl font-bold flex items-center gap-2 text-white">
//                 Certifications & Credentials
//               </h3>

//               {/* Navigation Arrows */}
//               <div className="flex gap-2">
//                 <button
//                   onClick={prevSlide}
//                   className="p-2 rounded-full border border-white/10 hover:border-blue-500/30 hover:bg-blue-500/10 text-gray-300 hover:text-blue-500 transition cursor-pointer"
//                   aria-label="Previous Certification"
//                 >
//                   ←
//                 </button>
//                 <button
//                   onClick={nextSlide}
//                   className="p-2 rounded-full border border-white/10 hover:border-blue-500/30 hover:bg-blue-500/10 text-gray-300 hover:text-blue-500 transition cursor-pointer"
//                   aria-label="Next Certification"
//                 >
//                   →
//                 </button>
//               </div>
//             </div>

//             {/* Carousel Viewport */}
//             <div className="relative overflow-hidden rounded-xl">
//               <div
//                 className="flex transition-transform duration-500 ease-out"
//                 style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//               >
//                 {certificationsData.map((cert, index) => (
//                   <div key={index} className="w-full shrink-0">
//                     <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
//                       {/* Image Preview Container */}
//                       <div className="overflow-hidden rounded-lg mb-4 border border-white/10">
//                         <img
//                           src={cert.image}
//                           alt={cert.title}
//                           className="w-full h-56 object-cover object-center hover:scale-105 transition-transform duration-300"
//                         />
//                       </div>

//                       <div className="flex justify-between items-start mb-2">
//                         <h3 className="text-xl font-bold">{cert.title}</h3>
//                         <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-500 border border-blue-500/20 shrink-0">
//                           {cert.date}
//                         </span>
//                       </div>

//                       <p className="text-gray-400 mb-3">{cert.issuer}</p>

//                       <div className="flex flex-wrap gap-2 mb-4">
//                         {cert.tags.map((tag, key) => (
//                           <span
//                             key={key}
//                             className="bg-blue-500/10 text-blue-500 py-1 p-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all cursor-pointer"
//                           >
//                             {tag}
//                           </span>
//                         ))}
//                       </div>

//                       <div className="flex justify-between items-center">
//                         <a
//                           href={cert.credentialUrl}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="text-sm text-blue-500 hover:text-blue-400 transition-colors my-4"
//                         >
//                           View Credential →
//                         </a>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Pagination Indicators (Dots) */}
//             <div className="flex justify-center gap-2 pt-2">
//               {certificationsData.map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setCurrentIndex(index)}
//                   className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
//                     currentIndex === index
//                       ? "w-8 bg-blue-500"
//                       : "w-2 bg-white/20 hover:bg-white/40"
//                   }`}
//                   aria-label={`Go to slide ${index + 1}`}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </RevealOnScroll>
//     </section>
//   );
// }

// export default Certifications;

import { useState } from "react";
import RevealOnScroll from "../RevealOnScroll";

function Certifications() {
  const certificationsData = [
    {
      title: "Programming Essentials in Python",
      issuer: "Cisco Networking Academy",
      date: "2024",
      image:
        "https://drive.google.com/thumbnail?id=1FPNhDOwihd5xAe-hZFUBjkBmMP4hOl5R&sz=w800",
      credentialUrl:
        "https://drive.google.com/file/d/1FPNhDOwihd5xAe-hZFUBjkBmMP4hOl5R/view?usp=sharing",
      tags: ["Python", "Cisco", "Programming"],
    },
    {
      title: "PEC Registered Engineer",
      issuer: "Pakistan Engineering Council",
      date: "2025",
      image:
        "https://drive.google.com/thumbnail?id=1xf6LBz2z-GwgM6jKg9v2qSbBbxfsm4s8&sz=w800",
      credentialUrl:
        "https://drive.google.com/file/d/1xf6LBz2z-GwgM6jKg9v2qSbBbxfsm4s8/view?usp=drive_link",
      tags: ["PEC"],
    },
    {
      title:
        "Graduate Engineer Trainee (GET) - 6-Month Professional Experience",
      issuer: "Pakistan Engineering Council (PEC)",
      date: "2026",
      image:
        "https://drive.google.com/thumbnail?id=1udEt1U9NWWNOhnBXMwTw1l1HA8ifL0xE&sz=w800",
      credentialUrl:
        "https://drive.google.com/file/d/1udEt1U9NWWNOhnBXMwTw1l1HA8ifL0xE/view?usp=drive_link",
      tags: ["PEC", "GET Program", "Engineering"],
    },
    {
      title: "1st Young Engineers Personality Development Program",
      issuer: "National Defence University Islamabad / PEC",
      date: "2026",
      image:
        "https://drive.google.com/thumbnail?id=16wgwH7tCiC2rE3pqt3bJOrZHv3f3vkea&sz=w800",
      credentialUrl:
        "https://drive.google.com/file/d/16wgwH7tCiC2rE3pqt3bJOrZHv3f3vkea/view?usp=drive_link",
      tags: ["NDU", "PEC", "Soft-Skills"],
    },
    {
      title: "5-Month Industrial/Field Training (P&DD, PEDO, Irrigation, C&W)",
      issuer: "Planning and Development Department, Khyber Pakhtunkhwa",
      date: "2026",
      image:
        "https://drive.google.com/thumbnail?id=1-l5ruN60qct_5xPP-LY0T7EIfYVQ0AQm&sz=w800",
      credentialUrl:
        "https://drive.google.com/file/d/1-l5ruN60qct_5xPP-LY0T7EIfYVQ0AQm/view?usp=drive_link",
      tags: ["P&D", "Public Sector", "IT Infrastructure"],
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? certificationsData.length - 1 : prev - 1,
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === certificationsData.length - 1 ? 0 : prev + 1,
    );
  };

  // Helper function to calculate slide style relative to active index
  const getCardStyle = (index) => {
    const total = certificationsData.length;
    // Calculate shortest distance in loop
    let diff = index - currentIndex;

    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;

    // Center active card
    if (diff === 0) {
      return "z-30 scale-100 opacity-100 blur-0 translate-x-0 cursor-default";
    }
    // Left adjacent card
    if (diff === -1) {
      return "z-20 scale-85 opacity-50 blur-[2px] -translate-x-[60%] sm:-translate-x-[70%] cursor-pointer hover:opacity-75";
    }
    // Right adjacent card
    if (diff === 1) {
      return "z-20 scale-85 opacity-50 blur-[2px] translate-x-[60%] sm:translate-x-[70%] cursor-pointer hover:opacity-75";
    }
    // Hidden background cards
    return "z-10 scale-75 opacity-0 blur-md pointer-events-none";
  };

  return (
    <section
      id="certification"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4 space-y-12">
          {/* Section Header */}
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Experience and Certifications
          </h2>

          {/* Work Experience Card */}
          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
            <div className="space-y-6">
              <h3 className="text-xl font-bold flex items-center gap-2 text-white">
                Work Experience
              </h3>

              {/* Experience Block */}
              <div className="p-6 rounded-lg border border-white/10 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-white/10 pb-4 gap-2">
                  <div>
                    <h4 className="text-lg font-bold text-white">
                      Graduate Engineer Trainee{" "}
                      <span className="text-blue-500 font-normal">
                        (Full-Stack / Software)
                      </span>
                    </h4>
                    <p className="text-gray-400 text-sm font-medium">
                      Pakistan Engineering Council (PEC) Placement Program
                    </p>
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 border border-blue-500/20 self-start sm:self-auto">
                    Jan 2026 – July 2026
                  </span>
                </div>

                {/* PEDO Placement */}
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h5 className="text-sm font-semibold text-blue-500">
                      Pakhtunkhwa Energy Development Organization (PEDO) – IT &
                      Infrastructure
                    </h5>
                    <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-gray-900/40 text-blue-400 border border-blue-500/20">
                      Jan 2026 – Mar 2026
                    </span>
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-gray-400 text-sm leading-relaxed pl-1">
                    <li>
                      Engineered{" "}
                      <strong className="text-white font-medium">
                        PEDO HydroNet
                      </strong>
                      , a full-stack hydrological analytics system (React, PHP,
                      MySQL, Chart.js) to digitize daily gauge flow data,
                      automate rating curve calculations, and render hydrograph
                      reports.
                    </li>
                    <li>
                      Designed scalable MySQL relational schemas and optimized
                      stored procedures for continuous hydrology data
                      processing, replacing manual tracking workflows.
                    </li>
                    <li>
                      Developed a modern{" "}
                      <strong className="text-white font-medium">
                        Full-stack Complaint Management System
                      </strong>
                      , establishing a digital helpdesk pipeline to track ticket
                      lifecycles, user requests, and IT infrastructure updates.
                    </li>
                  </ul>
                </div>

                {/* Rotational Placements */}
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h5 className="text-sm font-semibold text-blue-500">
                      Multi-Department Rotational Placements (Planning &
                      Development, Irrigation, C&W)
                    </h5>
                    <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-gray-900/40 text-blue-400 border border-blue-500/20">
                      Apr 2026 – May 2026
                    </span>
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-gray-400 text-sm leading-relaxed pl-1">
                    <li>
                      Evaluated public sector IT workflows and infrastructure
                      operations, identifying automation opportunities across
                      department-wide technical systems.
                    </li>
                    <li>
                      Collaborated with cross-functional engineering leads to
                      standardize digital asset management and project
                      monitoring reporting.
                    </li>
                  </ul>
                </div>

                {/* Soft Skills Training Placements */}
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h5 className="text-sm font-semibold text-blue-500">
                      Professional Development & Soft Skills Training (PEC &
                      NDU)
                    </h5>
                    <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      July 2026
                    </span>
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-gray-400 text-sm leading-relaxed pl-1">
                    <li>
                      Completed specialized training in leadership, technical
                      documentation, agile teamwork, and public sector
                      administrative workflows.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Coverflow Certifications Section */}
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold flex items-center gap-2 text-white">
                Certifications & Credentials
              </h3>

              {/* Navigation Arrows */}
              <div className="flex gap-2 z-40">
                <button
                  onClick={prevSlide}
                  className="p-2 rounded-full border border-white/10 hover:border-blue-500/30 hover:bg-blue-500/10 text-gray-300 hover:text-blue-500 transition cursor-pointer"
                  aria-label="Previous Certification"
                >
                  ←
                </button>
                <button
                  onClick={nextSlide}
                  className="p-2 rounded-full border border-white/10 hover:border-blue-500/30 hover:bg-blue-500/10 text-gray-300 hover:text-blue-500 transition cursor-pointer"
                  aria-label="Next Certification"
                >
                  →
                </button>
              </div>
            </div>

            {/* 3D Coverflow Viewport */}
            <div className="relative min-h-[500px] flex items-center justify-center overflow-hidden py-4">
              {certificationsData.map((cert, index) => {
                const cardStyle = getCardStyle(index);

                return (
                  <div
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`absolute w-[80%] max-w-lg transition-all duration-500 ease-out transform ${cardStyle}`}
                  >
                    <div className="p-6 rounded-xl border border-white/10 bg-slate-950/80 backdrop-blur-md hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                      {/* Image Preview Container */}
                      <div className="overflow-hidden rounded-lg mb-4 border border-white/10">
                        <img
                          src={cert.image}
                          alt={cert.title}
                          className="w-full h-52 object-cover object-center"
                        />
                      </div>

                      <div className="flex justify-between items-start mb-2 gap-2">
                        <h3 className="text-lg font-bold text-white line-clamp-2">
                          {cert.title}
                        </h3>
                        <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-500 border border-blue-500/20 shrink-0">
                          {cert.date}
                        </span>
                      </div>

                      <p className="text-gray-400 text-sm mb-3 line-clamp-1">
                        {cert.issuer}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {cert.tags.map((tag, key) => (
                          <span
                            key={key}
                            className="bg-blue-500/10 text-blue-500 py-0.5 px-2.5 rounded-full text-xs font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex justify-between items-center pt-2 border-t border-white/10">
                        <a
                          href={cert.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="text-sm text-blue-500 hover:text-blue-400 transition-colors"
                        >
                          View Credential →
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Pagination Indicators (Dots) */}
            <div className="flex justify-center gap-2 pt-2">
              {certificationsData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    currentIndex === index
                      ? "w-8 bg-blue-500"
                      : "w-2 bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}

export default Certifications;