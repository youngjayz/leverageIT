import React from "react";
import cogWheel from "../assets/cogWheel.svg";
import { Icon } from "@iconify/react";

const Navbar = ({page}) => {
  return (
    <div className="w-full py-6 flex items-center justify-between ">
      <h2 className="text-white text-[24px] font-medium flex-1">{page}</h2>
      <div className="flex items-center gap-4 ">
        {/* BUTTON WITH GRADIENT BORDER */}
        <div className="border-grad w-[160px] p-[2px] rounded-full ">
          <div className="w-full h-full bg-sidebar rounded-full flex items-center justify-end gap-1 px-2 py-1 ">
            <p className="text-white font-bold text-sm">Ethereum</p>
            <Icon icon="bx:chevron-down" className="text-accent"/>
          </div>
        </div>
        {/* BUTTON WITH GRADIENT BORDER */}
        <div className="border-grad w-[160px] p-[2px] rounded-full ">
          <p className="w-full h-full text-sm bg-sidebar rounded-full text-white font-bold px-4 py-1">
            0x1234...567
          </p>
        </div>
        <div className="h-[60px] w-[60px] object-contain cursor-pointer">
          <img src={cogWheel} alt="cogwheel" className="h-full" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
