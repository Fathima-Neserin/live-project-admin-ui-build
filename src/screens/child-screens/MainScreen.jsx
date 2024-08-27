import React from "react";
import {
  TopContainer,
  MiddleContainer,
  BottomContainer,
} from "../../components";

function MainScreen() {
  return (
    <>
      <div className="w-full h-full  flex flex-col items-center">
        <TopContainer />
        <MiddleContainer />
      </div>
      <div className="w-full h-[55%] mt-10">
        <BottomContainer />
      </div>
    </>
  );
}

export default MainScreen;
