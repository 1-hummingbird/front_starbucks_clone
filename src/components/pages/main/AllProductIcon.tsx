import { Category } from "@/types/responseType";
import Link from "next/link";
import React from "react";

const AllProductIcon = ({ item }: { item: Category }) => {
  return (
    <div>
      <li className="max-h-[105.5px] w-[82.5px]" key={item.id}>
        <Link href={`/${item.url}`}>
          {item.component && <item.component />}
          <div className="mt-[5px] h-[18px] text-center">
            <p className="font-nanum text-[12px]">{item.category}</p>
          </div>
        </Link>
      </li>
    </div>
  );
};

export default AllProductIcon;
