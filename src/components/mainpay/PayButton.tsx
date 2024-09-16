import { useState } from "react";

const PayButton = ({ toggleOrderDetails }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
    toggleOrderDetails(); // 부모 컴포넌트의 상태도 변경
  };

  return (
    <>
      <button onClick={toggleDetails} className="rounded">
        {showDetails ? (
          <img
            src="https://img.icons8.com/?size=100&id=15830&format=png&color=000000"
            alt="화살표"
            className="w-8 h-8"
          />
        ) : (
          <img
            src="https://img.icons8.com/?size=100&id=37351&format=png&color=000000"
            alt="아래 화살표"
            className="w-8 h-8"
          />
        )}
      </button>
      {showDetails && <div className="details"></div>}
    </>
  );
};

export default PayButton;
