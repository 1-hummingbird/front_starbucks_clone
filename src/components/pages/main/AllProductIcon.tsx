import { Category } from "@/app/types/responseType";
import Link from "next/link";
import React from "react";

const AllProductIcon = ({ item }: { item: Category }) => {
  return (
    <div>
      <li className="w-[82.5px] max-h-[105.5px]" key={item.id}>
        <Link href={`/${item.url}`}>
          {item.component && <item.component />}
          <div className="text-center h-[18px] mt-[5px]">
            <p className="font-nanum text-[12px]">{item.category}</p>
          </div>
        </Link>
      </li>
    </div>
  );
};

export default AllProductIcon;
