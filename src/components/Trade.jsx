import React from "react";
import { styles } from "../styles";
import { ArrowRight, Bitcoin, Glass, Setting2, Tether } from "iconsax-react";
import TradingViewWidget from "./TradingView";
import { Icon } from "@iconify/react";

const TradeNav = () => {
  return (
    <div className="w-[69%] py-6">
      <div className="w-full flex items-center font-DM">
        {/* THE ICON */}
        <Bitcoin color="#f7931a" size="36" variant="Bold" />
        <table className="text-gray-300">
          <thead>
            <tr className="text-left text-gray-300">
              <th className="tables1">BTC</th>
              <th className="tables1">26,847.1</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="tables2 text-xs text-inputText">Bitcoin</td>
              <td className="tables2 text-xs text-red">-1.36%</td>
            </tr>
          </tbody>
        </table>

        <hr className="border-l border-inputText h-10 mx-5" />

        <table className="w-full">
          <thead>
            <tr className="text-left text-gray-300">
              <th className="tables1 text-inputText text-xs ">
                Mark Price
              </th>
              <th className="tables1 text-inputText text-xs ">
                Index Price
              </th>
              <th className="tables1 text-inputText text-xs ">
                Volume(24h)
              </th>
              <th className="tables1 text-inputText text-xs flex gap-2 items-center">
                <p>Funding Rate(8h)</p>
                <Icon icon="line-md:question-circle" className="text-[16px] cursor-pointer"/>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className="tables2 text-gray-300">26,847.1</th>
              <th className="tables2 text-gray-300">26,845.8</th>
              <th className="tables2 text-gray-300">1,955,381.9</th>
              <th className="tables2 text-green">+0.0211%</th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

const Trade = () => {
  return (
    <div className={styles.container1}>
      {/* <Navbar /> */}

      {/* THE TOP PART WHERE THE TRADE NAV IS */}
      <TradeNav />

      {/* THE TRADING VIEW AND THE PANEL BY THE SIDE */}
      <div className="w-full h-fit flex gap-5 items-stretch justify-between">
        {/* THE TRADING VIEW */}
        <div className="w-[69%] border-grad rounded-[24px] p-[2px] flex ">
          <div className="bg-sidebar rounded-[22px] w-full overflow-hidden">
            <div className="w-full p-[2px] flex items0center justify-between  ">
              {/* THE PRICE AND FUNDING */}
              <div className=" p-4 flex items-center gap-2 justify-between font-DM">
                <button className="bg-gray-300 cursor-pointer rounded-full w-[48%] text-xs font-medium text-sidebar px-2 py-1">
                  Price
                </button>
                <button className="text-gray-400 cursor-pointer rounded-full w-[48%] text-xs px-2 py-1 text-medium">
                  Funding
                </button>
              </div>

              {/* THE GLASSES AND SWITCH */}
              <div className="flex items-center gap-2 pr-4">
                <Glass size="14" color="#D1D5DB" />
                <label class="switch">
                  <input type="checkbox" />
                  <span class="slider round"></span>
                </label>
              </div>
            </div>
            <TradingViewWidget />
          </div>
        </div>
        {/* THE PANEL ON THE RIGHT */}
        <div className="w-[31%] border-grad rounded-[14px] p-[2px] ">
          <div className="bg-sidebar rounded-[12px] w-full overflow-hidden flex flex-col items-center">
            {/* SWITCH */}
            <div className="w-full p-4 flex items-center justify-between">
              <button className="bg-buttongreen cursor-pointer rounded-full w-[48%] text-xs py-1 text-medium">
                Long
              </button>
              <button className="text-gray-400 cursor-pointer rounded-full w-[48%] text-xs py-1 text-medium">
                Short
              </button>
            </div>

            {/* THE FORM FOR THE OPTIONS */}
            <div className="w-full  p-4">
              <form>
                <div className="w-full flex items-center justify-center text-gray-300 gap-3">
                  <div className="w-1/2 flex flex-col items-start font-DM">
                    <label className="text-xs mb-2">Price</label>
                    <input
                      type="number"
                      placeholder="0.0"
                      className="text-gray-600 border-input border rounded-full w-full text-sm placeholder:text-inputText px-2 py-1"
                    />
                  </div>

                  <div className="w-1/2 flex flex-col items-start font-DM">
                    <label className="text-xs mb-2">Order Type</label>
                    <div className="text-gray-600 border-input border rounded-full w-full placeholder:text-inputText text-sm px-2 py-1 relative ">
                      <input
                        type="text"
                        placeholder="Markets"
                        className="text-inputText placeholder:text-inputText"
                      />
                    </div>
                  </div>
                </div>

                <div className="w-full flex flex-col items-start mt-8 font-DM text-gray-300">
                  <label className="text-xs mb-2">Amount</label>
                  <div className="w-full flex flex-col">
                    <div className="flex items-center gap-2 border-input border rounded-tr-2xl rounded-tl-2xl px-2 py-1  ">
                      {/* DIV FOR THE ICON AND THE TEXT */}
                      <div className="flex items-center gap-1">
                        <Bitcoin variant="Bold" color="#f7931a" size="16" />
                        <p className="text-xs text-inputText font-medium">
                          BTC
                        </p>
                      </div>
                      {/* THE MAIN INPUT FIELD */}
                      <input type="number" className="w-full" />
                    </div>
                    <div className="flex items-center gap-2 border-input border rounded-br-2xl rounded-bl-2xl px-2 py-1  ">
                      {/* DIV FOR THE ICON AND THE TEXT */}
                      <div className="flex items-center gap-1">
                        <Tether variant="Bold" color="#6DDE09" size="16" />
                        <p className="text-xs text-inputText font-medium">
                          USD
                        </p>
                      </div>
                      {/* THE MAIN INPUT FIELD */}
                      <input type="number" className="w-full " />
                    </div>
                  </div>
                </div>

                <div className="w-full flex flex-col items-start font-DM text-gray-300 mt-8">
                  <label className="text-xs mb-2">Leverage</label>
                  <input type="range" className="w-full my-range" />
                </div>
              </form>
            </div>
            <h2 className="mt-9 text-gray-300 text-left w-full px-4 text-xs font-DM mb-1">
              Summary
            </h2>
            <div className="w-full  border-t-[1px] border-input p-4 flex items-center justify-between gap-6 font-DM">
              <button className="flex bg-darkGreen flex-1 rounded-full items-center justify-center py-1 gap-2">
                <div className="text-sm  ">
                  <ArrowRight
                    size="18"
                    color="#000"
                    className="transform -rotate-45"
                  />
                </div>
                <p className="text-sm font-medium">Confirm Long</p>
              </button>
              <Setting2 size="20" className="text-gray-300" />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-fit flex gap-5 mt-4 items-stretch justify-between">
        {/* THE TRADING VIEW */}
        <div className="w-[69%] border-grad rounded-[24px] p-[2px] flex ">
          <div className="bg-sidebar rounded-[22px] w-full overflow-hidden">
            <div className="w-full p-[2px] flex items0center justify-between  ">
              {/* THE POSITION AND ORDERS */}
              <div className=" p-4 flex items-center gap-2 justify-between font-DM">
                <button className="bg-gray-300 cursor-pointer whitespace-nowrap rounded-full w-[48%] text-xs font-medium text-sidebar px-2 py-1">
                  Position
                </button>
                <button className="text-gray-400 cursor-pointer whitespace-nowrap rounded-full w-[48%] text-xs px-2 py-1 text-medium">
                  Limit Orders
                </button>
                <button className="text-gray-400 cursor-pointer rounded-full w-[48%] text-xs px-2 py-1 text-medium">
                  Fills
                </button>
              </div>
            </div>

            {/* THE DIV FOR THE CONTAINER UNDER */}
            <div className="w-full self-stretch p-4 font-DM">
              <div className="w-full h-full flex items-end justify-center">
                <p className="text-gray-400">You don't have any postions yet</p>
              </div>
            </div>
          </div>
        </div>
        {/* THE RIGHT PANEL OF TABLES */}
        <div className="w-[31%] border-grad rounded-[14px] p-[2px] ">
          <div className="bg-sidebar rounded-[12px] w-full overflow-hidden flex flex-col items-center">
            {/* MARKETS AND TRADE TIME */}
            <div className="w-full p-4 flex items-center justify-between font-DM">
              <h4 className="text-gray-300 text-sm ">Market Trades</h4>
              <p className="text-sm text-inputText font-medium font-DM">24H</p>
            </div>

            <table className="mt-5 text-gray-300 text-left w-full px-4 text-xs font-DM mb-1">
              <thead>
                <tr className="text-gray-500">
                  <th className="text-left  tables">SIZE</th>
                  <th className="text-center  tables">TIME</th>
                  <th className="text-right tables ">PRICE</th>
                </tr>
              </thead>
              <tbody>
                <tr className="w-full ">
                  <td className="text-left tables-body text-green">0.108349</td>
                  <td className="text-center tables-body text-inputText">
                    5/7 14:55
                  </td>
                  <td className="text-right tables-body text-gray-500">
                    26,839.9
                  </td>
                </tr>
                <tr className="w-full ">
                  <td className="text-left tables-body text-green">0.108349</td>
                  <td className="text-center tables-body text-inputText">
                    5/7 14:55
                  </td>
                  <td className="text-right tables-body text-gray-500">
                    26,839.9
                  </td>
                </tr>
                <tr className="w-full ">
                  <td className="text-left tables-body text-green">0.108349</td>
                  <td className="text-center tables-body text-inputText">
                    5/7 14:55
                  </td>
                  <td className="text-right tables-body text-gray-500">
                    26,839.9
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="h-14"></div>
    </div>
  );
};

export default Trade;
