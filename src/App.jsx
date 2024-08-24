import React from "react";
import MainScreen from "./screens/main-screen/MainScreen";
import { SideBar } from "./components";

function App() {
  return (
    <div className="w-full h-screen bg-primary grid place-items-end font-poppins">
      <SideBar />
      <MainScreen />
    </div>
  );
}

export default App;
