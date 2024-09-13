import React from "react";
import CategoryItem from "./CategoryItem";

interface CategoryListProps {
  categories: string[];
  selectedCategory: string | null;
  onCategoryClick: (category: string, index: number) => void;
}

const CategoryList: React.FC<CategoryListProps> = ({
  categories,
  selectedCategory,
  onCategoryClick,
}) => {
  return (
    <div className="custom-scroll pl-4 my-3 overflow-auto no-scrollbar font-bold">
      <ul className="flex text-nowrap gap-3 text-sm flex-nowrap">
        {categories.map((category, index) => (
          <CategoryItem
            key={category}
            category={category}
            isSelected={selectedCategory === category}
            onClick={() => onCategoryClick(category, index)}
          />
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
