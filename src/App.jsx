import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import { SideBar } from "./components";
import ErrorScreen from "./screens/error-screen/ErrorScreen";
import MainScreenLayout from "./screens/admin/MainScreenLayout";
import { MainScreen, SubscriptionScreen } from "./screens/child-screens";

function App() {
  const router = createBrowserRouter([
    {
      path:"/admin",
      element: <MainScreenLayout />,
      errorElement: <ErrorScreen />,
      children:[
        {
          index: true,
          element: <MainScreen />
        },
        {
          path:"subscription",
          element: <SubscriptionScreen />
        }
      ]
    }
  ])
  return (
    <div className="w-full h-screen bg-primary grid place-items-end font-poppins">
      <SideBar />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
