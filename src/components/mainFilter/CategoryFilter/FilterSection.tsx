import React from "react";
import CategoryList from "./CategoryList";
import PriceList from "./PriceList";

interface FilterSectionProps {
  categories: string[];
  prices: string[];
  seasons: string[];
  selectedParentCategory: string | null;
  selectedPrice: string | null;
  selectedSeason: string | null;
  onCategoryClick: (category: string, index: number) => void;
  onPriceClick: (price: string) => void;
  onReset: () => void;
}

const FilterSection: React.FC<FilterSectionProps> = ({
  categories,
  prices,
  selectedParentCategory,
  selectedPrice,
  onCategoryClick,
  onPriceClick,
}) => {
  return (
    <div>
      <CategoryList
        categories={categories}
        selectedCategory={selectedParentCategory}
        onCategoryClick={onCategoryClick}
      />
      <hr className="border-border-solid z-20 border-t-[1px] border-t-slate-400" />

      <PriceList
        prices={prices}
        selectedPrice={selectedPrice}
        onPriceClick={onPriceClick}
      />
      <hr className="border-border-solid z-20 border-t-[1px] border-t-slate-400" />
    </div>
  );
};

export default FilterSection;
