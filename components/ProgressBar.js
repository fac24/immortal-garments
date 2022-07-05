import React from "react";

export default function ProgressBar({ completed }) {
  const fillerStyles = {
    width: `${completed}%`,
    transition: "width 1s ease-in-out",
  };

  const labelStyles = {
    left: `calc(${completed}% - 8px)`,
  };

  return (
    <>
      <div className="relative h-2 rounded-full bg-[#e0e0de] w-[16rem]">
        <div
          className="h-full bg-lightGreen rounded-full text-right"
          style={fillerStyles}
        >
          <span
            style={labelStyles}
            role="progressbar"
            aria-valuenow={completed}
            aria-valuemin="0"
            aria-valuemax="100"
          ></span>
        </div>
      </div>
    </>
  );
}
