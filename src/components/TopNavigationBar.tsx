import { Nav } from "@/app/types/common";
import NavList from "./nav/NavList";

const navs: Nav[] = [
  { id: 1, url: "/", label: "메인" },
  { id: 2, url: "exhibition", label: "기획전" },
  { id: 3, url: "best", label: "베스트" },
  { id: 4, url: "new", label: "새 상품" },
];

const TopNavigationBar = () => {
  return (
    <nav className="w-full sticky top-0 z-10">
      <ul className="flex justify-evenly bg-white h-[45px] w-full">
        <NavList navs={navs} />
      </ul>
    </nav>
  );
};

export default TopNavigationBar;
