import React from "react";

const CustomButton = ({ title = "", icon = null, css = "" }) => {
  return (
    <button
      className={`rounded-full text-white font-medium px-8 py-3 bg-[#7765F3] ${css} flex items-center space-x-2`}
    >
      <p className="text-lg first-letter:capitalize">{title}</p>
      {icon}
    </button>
  );
};

export default CustomButton;
