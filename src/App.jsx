import React from "react";
import { Route, Routes } from "react-router-dom";


import { SideBar } from "./components";
import UserManagementScreen from "./screens/user-management-screen/UserManagementScreen";
import UserProfileScreen from "./screens/user-profile-screen/UserProfileScreen";
import MainScreen from "./screens/main-screen/MainScreen";
import EditProfileScreen from "./screens/edit-profile-screen/EditProfileScreen";

function App() {
  return (
    <div className="w-full h-screen text-textColor bg-primary grid place-items-end font-poppins">
      <SideBar />
      <Routes>
        <Route path="/" element={<MainScreen />} />
        <Route path="/admin/profile" element={<EditProfileScreen />} />
        <Route path="/admin/users" element={<UserManagementScreen />} />
        <Route path="/admin/users/profile" element={<UserProfileScreen />} />
      </Routes>
    </div>
  );
}

export default App;
