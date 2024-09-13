import React from "react";
import Link from "next/link";
import { Nav } from "@/app/types/common";

const NavItem = ({ item }: { item: Nav }) => {
  return (
    <Link href={`/${item.url}`}>
      {item.component && <item.component />}
      {item.label && (
        <p className="text-black my-3.5 mx-[5px] h-[17px]">{item.label}</p>
      )}
    </Link>
  );
};

export default NavItem;
