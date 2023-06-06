import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Render from "../components/Render";

const Dashboard = () => {

  const [page, setPage] = useState("")

  return (
    <div className="w-full h-screen flex items-center overflow-hidden ">
      {/* SIDEBAR */}
      <div className="w-[18%] h-full ">
        <Sidebar page={page} setPage={setPage} />
      </div>

      {/* RIGHT SIDE */}
      <div className="w-[82%] h-full">
        <Render page={page} setPage={setPage} />
      </div>
    </div>
  );
};

export default Dashboard;
