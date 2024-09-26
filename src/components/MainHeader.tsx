import Cart from './icons/header/Cart';
import HomeLogo from './icons/header/HomeLogo';
import Image from 'next/image';
import { Nav } from '../types/common';
import NavList from './nav/NavList';
import Search from './icons/header/Search';
import WishList from './icons/header/WishList';

const navs: Nav[] = [
  { id: 2, url: 'search', component: Search },
  { id: 3, url: 'wishlist', component: WishList },
  { id: 4, url: 'cart', component: Cart },
];

const Header = () => {
  return (
    <header className="flex h-14 w-full justify-between bg-white">
      <Image
        src={'https://drive.google.com/uc?id=1EiEp9lciZDWsjZZFrtgrqD2ZQXin0fri'}
        alt=""
        width={120}
        height={50}
        className="ml-2 mt-2"
      />
      <nav>
        <ul className="my-3 mr-3 flex h-8 w-full gap-1">
          <NavList navs={navs} />
        </ul>
      </nav>
    </header>
  );
};

export default Header;
