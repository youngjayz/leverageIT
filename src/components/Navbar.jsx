import React, { useContext, useState } from "react";
import cogWheel from "../assets/cogWheel.svg";
import { Icon } from "@iconify/react";
import { GlobalContext } from "../context";
import { Web3Button } from "@web3modal/react";

const Navbar = ({ page }) => {
  const { wallet, connectWalletHandler } = useContext(GlobalContext);
  const [connectLoading, setConnectLoading] = useState(false);

  const truncatedWallet =
    wallet && `${wallet.slice(0, 9)}...${wallet.slice(-2)}`;
  return (
    <div className="w-full py-6 flex items-center justify-between">
      <h2 className="text-white text-sm lg:text-[24px] font-medium">{page}</h2>
      <div
        className={`hidden md:flex flex-row items-center text-white space-x-[20px]`}
      >
        <p className={`cursor-pointer`}>InVest Tutorials</p>
        <p className={`cursor-pointer`}>Blog</p>
        {page === "Home" ? null : <p className={`cursor-pointer`}>CopyTrade</p>}
        <p className={`cursor-pointer`}>Leaderboard</p>
        <p className={`cursor-pointer`}>Stake IT</p>
      </div>
      <div className="flex items-center gap-4">
        {/* BUTTON WITH GRADIENT BORDER */}
        <div
          className="w-[160px] p-[2px] rounded-full cursor-pointer"
          // onClick={openModal}
        >
          <Web3Button />
        </div>
        <div className="h-[60px] w-[60px] object-contain cursor-pointer">
          <img src={cogWheel} alt="cogwheel" className="h-full" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
