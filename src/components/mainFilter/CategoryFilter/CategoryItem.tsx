import React from "react";

interface CategoryItemProps {
  category: string;
  isSelected: boolean;
  onClick: () => void;
}

const CategoryItem: React.FC<CategoryItemProps> = ({
  category,
  isSelected,
  onClick,
}) => {
  return (
    <li
      className={`cursor-pointer ${isSelected ? "text-green-600" : ""}`}
      onClick={onClick}
    >
      {category}
    </li>
  );
};

export default CategoryItem;
