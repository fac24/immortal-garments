import React from "react";

export default function ProgressBar({ completed }) {
  const fillerStyles = {
    width: `${completed}%`,
    borderRadius: "inherit",
    textAlign: "right",
    transition: "width 1s ease-in-out",
  };

  const labelStyles = {
    left: `calc(${completed}% - 5px)`,
  };

  return (
    <div className="relative h-2 rounded-full bg-[#e0e0de]">
      <div className="h-full bg-lightGreen" style={fillerStyles}>
        <span style={labelStyles}>
          {/* role="progressbar" aria-valuenow=${completed}
          aria-valuemin="0" aria-valuemax="100" */}
        </span>
      </div>
      <span
        className="absolute text-sm font-bold pt-1"
        style={labelStyles}
      >{`${completed}%`}</span>
    </div>
  );
}
