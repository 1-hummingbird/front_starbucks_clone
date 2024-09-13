import React from "react";

interface PriceItemProps {
  price: string;
  isSelected: boolean;
  onClick: () => void;
}

const PriceItem: React.FC<PriceItemProps> = ({
  price,
  isSelected,
  onClick,
}) => {
  return (
    <li
      className={`cursor-pointer ${isSelected ? "text-green-600" : ""}`}
      onClick={onClick}
    >
      {price}
    </li>
  );
};

export default PriceItem;
