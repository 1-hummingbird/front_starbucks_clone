import React from "react";
import Link from "next/link";
import { Nav } from "@/types/common";

const NavItem = ({ item }: { item: Nav }) => {
  return (
    <Link href={`/${item.url}`}>
      {item.component && <item.component />}
      {item.label && (
        <p className="mx-[5px] my-3.5 h-[17px] text-black">{item.label}</p>
      )}
    </Link>
  );
};

export default NavItem;
