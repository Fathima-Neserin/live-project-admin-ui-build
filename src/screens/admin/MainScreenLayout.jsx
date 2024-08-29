import React from "react";
import { Outlet } from "react-router-dom";
import { TopBar } from "../../components";

function MainScreenLayout() {
  return (
    <div className="w-[calc(100vw-4rem)] h-full overflow-auto ">
      <div className="w-full h-24 ">
        <TopBar />
      </div>
      <Outlet />
    </div>
  );
}

export default MainScreenLayout;
