import React from "react";
import NavItem from "./NavItem";
import { Nav } from "@/types/common";

const NavList = ({ navs }: { navs: Nav[] }) => {
  return (
    <>
      {navs.map((item) => {
        return (
          <li key={item.id}>
            <NavItem item={item} />
          </li>
        );
      })}
    </>
  );
};

export default NavList;
