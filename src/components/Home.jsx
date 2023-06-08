import React, { useEffect } from "react";
import { styles } from "../styles";
import Navbar from "./Navbar";
import homeEth from "../assets/homeEth.svg";
import hatGuy from "../assets/HatGuy.svg";
import brain from "../assets/brain.svg";
import { Icon } from "@iconify/react";
import handCoin from "../assets/handCoin.svg";

const Home = ({ setPage, page }) => {
  useEffect(() => {
    setPage("Home");
  });

  return (
    <div className={`${styles.container}`}>
      <Navbar page={page} />
      <div className="w-full">
        {/* THE OUTER DIV THAT FORMS THE BORDER */}
        <div className="w-full border-grad p-[3px] rounded-[24px]">
          {/* THE INNER DIV THAT  HAS THE CONTENTS */}
          <div className="w-full h-full flex flex-col-reverse text-center lg:text-left lg:flex-row items-center justify-between rounded-[22px] py-7 px-8 bg-sidebar">
            <div className="flex flex-col gap-5 items-start text-white">
              <h2 className="text-[24px] lg:text-[38px] font-medium font-DM">
                Invest in $IT.Leverage IT. MakeIT
              </h2>
              <p className="text-[31px] font-DM">HAVE FUN. MAKE MONEY</p>
              <div className="flex flex-col lg:flex-row items-center w-full justify-start gap-3 h-fit">
                <div className="border-grad-vert  bg-yellow-300 h-[3px] lg:h-[50px] w-full lg:w-[3px]" />
                <p className="font-DM text-base lg:text-[24px] font-medium ">
                  Decentralised leverage protocol <br /> for crypto, stocks and
                  more
                </p>
              </div>
            </div>
            {/* FOR THE ETH IMG */}
            <div className="h-[240px] w-[240px] ">
              <img src={homeEth} alt="homeEth" />
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col lg:flex-row items-center justify-between mt-5 ">
          {/* THE LEFT OUTER DIV THAT FORMS THE BORDER */}
          <div className="w-full lg:w-[49%] mt-5 lg:mt-0 border-grad p-[3px] rounded-[24px] text-white font-DM">
            {/* THE INNER DIV THAT  HAS THE CONTENTS */}
            <div className="w-full h-full  flex items-end justify-between rounded-[22px] py-7 px-8 bg-sidebar">
              <div className="flex flex-col items-start">
                <h2 className="text-[28px] 2xl:text-3xl whitespace-nowrap font-medium mb-4">
                  ZK Trade Anonymously
                </h2>
                <p className="leading-4 mb-1">
                  Trade Anonymously ensuring your <br /> identity and trading
                  activity are private
                </p>
                <button className="button-grad rounded-full flex items-center gap-2 mt-2 px-2 py-1 ">
                  <p>Coming Soon</p>
                  {/* <Icon icon="mdi:arrow-right-thin" className="text-xl" /> */}
                </button>
              </div>
              {/* ICON PART */}
              <div className="w-[80px] mb-1">
                <img src={hatGuy} alt="hatguy.svg" className="w-full" />
              </div>
            </div>
          </div>

          {/* THE RIGHT OUTER DIV THAT FORMS THE BORDER */}
          <div className="w-full lg:w-[49%] border-grad p-[3px] mt-5 lg:mt-0 rounded-[24px] text-white font-DM">
            {/* THE INNER DIV THAT  HAS THE CONTENTS */}
            <div className="w-full h-full flex items-end justify-between rounded-[22px] py-7 px-8 bg-sidebar">
              <div className="flex flex-col items-start">
                <h2 className="text-[28px] 2xl:text-3xl whitespace-nowrap font-medium mb-4">
                  AI Trading Bot
                </h2>
                <p className="leading-4 mb-1">
                  Trade Anonymously ensuring your <br /> identity and trading
                  activity are private
                </p>
                <button className="button-grad rounded-full flex items-center gap-4 mt-2 px-10 py-1 ">
                  <p>Coming Soon</p>
                </button>
              </div>
              {/* ICON PART */}
              <div className="w-[80px] mb-1">
                <img src={brain} alt="hatguy.svg" />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-[49%] mt-5 border-grad p-[3px] rounded-[24px] text-white font-DM">
          {/* THE INNER DIV THAT  HAS THE CONTENTS */}
          <div className="w-full h-full flex items-end justify-between rounded-[22px] py-7 px-8 bg-sidebar">
            <div className="flex flex-col items-start">
              <h2 className="text-[28px] 2xl:text-3xl whitespace-nowrap font-medium -mb-3">
                Stake IT
              </h2>
              <p className="text-sidebarText font-DM font-medium text-sm">
                Coming Soon
              </p>
            </div>
            {/* ICON PART */}
            <div className="w-[50px] mb-1">
              <img src={handCoin} alt="hatguy.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
