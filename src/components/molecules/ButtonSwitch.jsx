import React from "react";

const ButtonSwitch = ({ handleNext, handlePrevious, value }) => {
  return (
    <div className="bg-white rounded-full h-fit flex items-center">
      <button onClick={handlePrevious} className="w-full text-left px-4 py-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-chevron-down"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          stroke-width="3.5"
          stroke="#6f32be"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M6 9l6 6l6 -6" />
        </svg>
      </button>
      <p className="min-w-[120px] text-center font-light py-4 px-2 border-x">
        {value}
      </p>
      <button onClick={handleNext} className="w-full text-left px-4 py-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-chevron-up"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          stroke-width="3.5"
          stroke="#6f32be"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M6 15l6 -6l6 6" />
        </svg>
      </button>
    </div>
  );
};

export default ButtonSwitch;
