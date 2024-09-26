import Cart from './Cart';
import HomeLogo from './HomeLogo';
import Image from 'next/image';
import { Nav } from '@/types/common';
import NavList from '@/components/nav/NavList';
import Search from './Search';
import WishList from './WishList';

const navs: Nav[] = [
  { id: 2, url: 'search', component: Search },
  { id: 3, url: 'wishlist', component: WishList },
  { id: 4, url: 'cart', component: Cart },
];

const Header = () => {
  return (
    <header className="flex h-14 w-full justify-between bg-white">
      <HomeLogo />
      <nav>
        <ul className="my-3 mr-3 flex h-8 w-full gap-1">
          <NavList navs={navs} />
        </ul>
      </nav>
    </header>
  );
};

export default Header;
