"use client";
import { useState } from "react";

const PayButton = () => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <>
      <button onClick={toggleDetails} className="ml-3 px-2 py-1 rounded">
        {showDetails ? "접기" : "더보기"}
      </button>
    </>
  );
};
export default PayButton;
