import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { styles } from "../styles";
import { coins } from "../data";
import { GlobalContext } from "../context";
import { ArrowLeft2, ArrowRight2, SearchNormal1 } from "iconsax-react";
import Logo from "../assets/logo.png";

const SidebarSwitch = ({ openNav }) => {
  return (
    <div
      className="bg-sidebarDark cursor-pointer w-8 h-14 rounded-tr-[8px] 
    flex items-center justify-center rounded-br-[8px] border border-inputText"
    >
      {openNav === true ? (
        <ArrowLeft2 color="#aaa" size="20" />
      ) : (
        <ArrowRight2 color="#aaa" size="20" />
      )}
    </div>
  );
};

const Sidebar = ({ setPage, toggleSideBar, openNav }) => {
  const navigate = useNavigate();
  const { setSymbol } = useContext(GlobalContext);

  const location = window.location.pathname;
  const [openTrade, setOpenTrade] = useState(false);
  // const [id, setId] = useState(false)

  console.log(location);

  useEffect(() => {
    if (location === "/trade") {
      setOpenTrade(true);
    } else {
      setOpenTrade(false);
    }
  }, [location]);

  return (
    <div
      className="w-[full] h-full relative bg-sidebar pt-[20px] 
      pb-[30%] flex flex-col gap-4 border-r
     border-inputText text-sidebarText font-Lato scroll-yy"
    >
      <div
        onClick={toggleSideBar}
        className={`absolute z-30 md:left-[100%] ${
          openNav ? "left-[150px]" : "left-[250px]"
        } top-20`}
      >
        <SidebarSwitch openNav={openNav} />
      </div>
      <div className={`flex justify-center pb-[60px]`}>
        <img src={Logo} alt="" className={`w-[200px]`} />
      </div>
      <p
        onClick={() => {
          navigate("/");
          toggleSideBar();
        }}
        className={`${location === "/" ? styles.menuTextHi : styles.menuText}`}
      >
        Home
      </p>

      <div className={location === "/trade" && openTrade === true && "trade"}>
        <p
          onClick={() => {
            navigate("/trade");
            setOpenTrade(!openTrade);
          }}
          className={`${
            location === "/trade" ? styles.menuTextHi : styles.menuText
          }`}
        >
          Trade
        </p>
        <div
          className={
            location === "/trade" && openTrade === true
              ? "trade-drop"
              : "trade-drop-close"
          }
        >
          <div className="w-[88%] mx-auto mt-4">
            {coins &&
              coins.map((item) => (
                <div
                  className="w-full flex items-center 
                  hover:bg-input rounded-xl gap-2 p-2 cursor-pointer"
                  onClick={() => setSymbol(item.symbol)}
                >
                  <div
                    key={item.id}
                    className="w-full flex items-center hover:bg-input rounded-xl gap-2 p-2"
                  >
                    {item.icon}
                    <h4 className={styles.tradeCoin}>{item.code}</h4>
                    <div className="flex flex-col items-end gap">
                      <p className="text-xs font-medium text-gray-400">
                        ${item.price}
                      </p>
                      {parseFloat(item.percent) > 0.3 ? (
                        <span className="text-xs text-green">
                          +{item.percent}%
                        </span>
                      ) : (
                        <span className="text-xs text-red">
                          -{item.percent}%
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>

      <p
        onClick={() => {
          // navigate("/stake");
        }}
        className={`${
          location === "/stake" ? styles.menuTextHi : styles.comingSoon
        }`}
      >
        {/* Stake */}
        Trade Stocks
        <br /> <span className="text-[12px]">Coming Soon</span>
      </p>
      <p
        onClick={() => {
          // navigate("/stake");
        }}
        className={`${
          location === "/stake" ? styles.menuTextHi : styles.comingSoon
        }`}
      >
        {/* Stake */}
        Copytrading
        <br /> <span className="text-[12px]">Coming Soon</span>
      </p>

      <p
        onClick={() => {
          navigate("/dash");
          toggleSideBar();
        }}
        className={`${
          location === "/dash" ? styles.menuTextHi : styles.menuText
        }`}
      >
        Dashboard
      </p>
    </div>
  );
};

export default Sidebar;
