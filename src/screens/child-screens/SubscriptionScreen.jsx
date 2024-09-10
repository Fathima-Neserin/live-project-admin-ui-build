import React, { useState } from "react";
import SubscriptionHead from "../../components/subscription/SubscriptionHead";
import SubscriptionTable from "../../components/subscription/SubscriptionTable";
import SubscriptionAdd from "../../components/subscription/SubscriptionAdd";

function SubscriptionScreen() {
  const [addValue, setAddValue] = useState(false);
  return (
    <>
      <div className="relative w-[90%] h-full mx-auto">
        <div className={`grid gap-10 ${addValue ? "blur-lg" : ""}`}>
          <SubscriptionHead setValue={setAddValue} />
          <SubscriptionTable />
        </div>
        {addValue && (
          <div className="w-full absolute top-10 ">
            <SubscriptionAdd setValue={setAddValue} />
          </div>
        )}
      </div>
    </>
  );
}

export default SubscriptionScreen;