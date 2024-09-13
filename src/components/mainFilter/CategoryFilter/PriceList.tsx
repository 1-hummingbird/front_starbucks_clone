import React from "react";
import PriceItem from "./PriceItem";

interface PriceListProps {
  prices: string[];
  selectedPrice: string | null;
  onPriceClick: (price: string) => void;
}

const PriceList: React.FC<PriceListProps> = ({
  prices,
  selectedPrice,
  onPriceClick,
}) => {
  return (
    <div className=" flex pl-4 my-3  no-scrollbar  text-nowrap">
      <div className="font-bold text-sm">가격</div>
      <div className="custom-scroll overflow-auto no-scrollbar">
        <ul className="flex text-nowrap gap-3 text-sm flex-nowrap pl-4">
          {prices.map((price) => (
            <PriceItem
              key={price}
              price={price}
              isSelected={selectedPrice === price}
              onClick={() => onPriceClick(price)}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PriceList;
