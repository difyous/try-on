import React from "react";
import CustomButton from "../components/atoms/CustomButton";

const Navbar = () => {
  return (
    // <div className="h-20 bg-gradient-to-t from-violet-950 to-black  text-white  col-span-full flex items-center justify-start px-4  space-x-4 !bg-red-400 ">
    <div className="py-4 !w-full flex items-center justify-between px-6 text-white">
      <div className="flex items-center space-x-14">
        <div className="space-x-2 flex items-center">
          {/* <img
          src="/logoattt.svg"
          alt="Logo"
          className="w-[70px] rounded-lg object-cover"
        /> */}

          <h2 className="font-bold text-3xl">Catalogue AT</h2>
        </div>

        <ul className="flex items-center space-x-14 text-lg font-medium">
          <li>Lorem.</li>
          <li>Lorem.</li>
          <li>Lorem.</li>
          <li>Lorem.</li>
        </ul>
      </div>
      <CustomButton
        title="buy now"
        css=""
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-shopping-bag"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#fff"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M6.331 8h11.339a2 2 0 0 1 1.977 2.304l-1.255 8.152a3 3 0 0 1 -2.966 2.544h-6.852a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304z" />
            <path d="M9 11v-5a3 3 0 0 1 6 0v5" />
          </svg>
        }
      />
    </div>
  );
};

export default Navbar;
