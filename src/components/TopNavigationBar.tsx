import { Nav } from '@/types/common';
import NavList from './nav/NavList';

const navs: Nav[] = [
  { id: 1, url: '/', label: '메인', isActive: true },
  { id: 2, url: 'exhibition', label: '기획전', isActive: false },
  { id: 3, url: 'best', label: '베스트', isActive: false },
  { id: 4, url: 'new', label: '새 상품', isActive: false },
];

const TopNavigationBar = () => {
  return (
    <nav className="m-0 p-0">
      <ul className="flex h-[45px] w-full justify-evenly bg-white">
        <NavList navs={navs} />
      </ul>
    </nav>
  );
};

export default TopNavigationBar;
