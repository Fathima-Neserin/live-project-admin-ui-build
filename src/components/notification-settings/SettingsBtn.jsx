import React from "react";
import { IoCheckmarkSharp } from "react-icons/io5";
function SettingsBtn() {
  return (
    <div className="w-fit mt-5">
      <button className="px-5 py-3 flex justify-center gap-3 items-center bg-green-400 text-white tracking-wide rounded-lg">
        <span className="text-xl font-bold">
          <IoCheckmarkSharp />
        </span>
        Update
      </button>
    </div>
  );
}

export default SettingsBtn;