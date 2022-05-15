import React from "react";

export default function ExpandButton({ showExpandButton, handleExpandCard }) {
  return (
    <button
      className={`bg-black rounded-full mt-4 flex items-center justify-center duration-200 transition-[opacity,_width,_height] ${
        showExpandButton ? "opacity-100 h-16 w-16" : "opacity-0 h-8 w-8"
      }`}
      onClick={handleExpandCard}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M21 4H14V0H25V11H21V4Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4 21L11 21L11 25L1.90735e-06 25L9.45698e-07 14L4 14L4 21Z"
          fill="white"
        />
      </svg>
    </button>
  );
}
