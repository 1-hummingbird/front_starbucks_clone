import React from "react";

interface ChildrenCategoryListProps {
  childrenCategories: string[];
  selectedChildCategories: string[]; // 다중 선택용 배열
  onChildCategoryClick: (child: string) => void;
}

const ChildrenCategoryList: React.FC<ChildrenCategoryListProps> = ({
  childrenCategories,
  selectedChildCategories,
  onChildCategoryClick,
}) => {
  return (
    <div className=" flex pl-4 my-3 text-sm">
      <div className="font-bold text-nowrap pr-3">카테고리</div>
      <ul className=" custom-scroll flex text-nowrap overflow-auto gap-3 flex-nowrap">
        {childrenCategories.map((child) => (
          <li
            key={child}
            className={`cursor-pointer ${
              selectedChildCategories.includes(child) ? "text-green-600" : ""
            }`}
            onClick={() => onChildCategoryClick(child)}
          >
            {child}
          </li>
        ))}
      </ul>
      <hr className="border-border-solid border-t-[1px] z-20 border-t-slate-400" />
    </div>
  );
};

export default ChildrenCategoryList;
