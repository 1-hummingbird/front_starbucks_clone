import { Nav } from "../app/types/common";
import Cart from "./icons/header/Cart";
import HomeLogo from "./icons/header/HomeLogo";
import Search from "./icons/header/Search";
import WishList from "./icons/header/WishList";
import NavList from "./nav/NavList";

const navs: Nav[] = [
  { id: 2, url: "search", component: Search },
  { id: 3, url: "wishlist", component: WishList },
  { id: 4, url: "cart", component: Cart },
];

const Header = () => {
  return (
    <header className="w-full flex justify-between bg-white h-14">
      <HomeLogo />
      <nav>
        <ul className="flex gap-1 w-full h-8 my-3 mr-3">
          <NavList navs={navs} />
        </ul>
      </nav>
    </header>
  );
};

export default Header;
