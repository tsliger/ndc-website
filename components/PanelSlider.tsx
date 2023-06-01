import React from "react";

export default function PanelSlider({ currentSlide, panelCount }) {
  return (
    <>
      {[...Array(panelCount)].map((e, i) => (
        <div
          key={i}
          className="border-[1px] lg:border-[2px] rounded-full p-1 lg:p-[4px] border-white/20"
        >
          <div
            className={`${
              currentSlide === i
                ? "bg-white/60 scale-75"
                : "bg-white/20 scale-[0.5]"
            } page-slider`}
          ></div>
        </div>
      ))}
    </>
  );
}
