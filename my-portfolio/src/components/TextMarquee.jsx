import React from "react";

function TextMarquee({
  text = "ENGR. HASEEB KHAN • SOFTWARE ENGINEER • MERN STACK • PEC ENGINEER • ",
  direction = "left",
  speed = "65s",
}) {
  const isLeft = direction === "left";

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        userSelect: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 0,
        opacity: 0.25,
        overflow: "hidden",
      }}
    >
      <style>{`
        @keyframes marqueeScrollLeft {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        @keyframes marqueeScrollRight {
          0% { transform: translate3d(-50%, 0, 0); }
          100% { transform: translate3d(0, 0, 0); }
        }
        .marquee-stroke-text {
          -webkit-text-stroke: 1.8px #00b2fb;
          color: transparent !important;
        }
      `}</style>

      <div
        className="whitespace-nowrap flex w-max text-6xl sm:text-8xl md:text-[10rem] font-black uppercase tracking-tight"
        style={{
          animation: `${
            isLeft ? "marqueeScrollLeft" : "marqueeScrollRight"
          } ${speed} linear infinite`,
        }}
      >
        <span className="marquee-stroke-text pr-16">{text.repeat(4)}</span>
        <span className="marquee-stroke-text pr-16">{text.repeat(4)}</span>
      </div>
    </div>
  );
}

export default TextMarquee;
