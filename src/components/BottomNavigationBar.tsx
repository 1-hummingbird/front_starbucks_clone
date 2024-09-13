import { Nav } from "../app/types/common";
import Category from "./icons/bottomNavigationBar/Category";
import Home from "./icons/bottomNavigationBar/Home";
import MyPage from "./icons/bottomNavigationBar/MyPage";
import Order from "./icons/bottomNavigationBar/Order";
import RecentViewedProduct from "./icons/bottomNavigationBar/RecentViewedProduct";

const navs: Nav[] = [
  { id: 1, label: "카테고리", component: Category },
  { id: 2, label: "주문내역", component: Order },
  { id: 3, label: "홈", component: Home },
  { id: 4, label: "MY", component: MyPage },
  { id: 5, label: "최근본", component: RecentViewedProduct },
];

const BottomNavigationBar = () => {
  return (
    <nav className="fixed bottom-0 bg-[#F5F5F5] w-full z-[999]">
      <ul className="flex justify-evenly mt-1 mb-1.5 h-[45px]">
        {navs.map((item) => {
          return (
            <li key={item.id}>
              <div
                tabIndex={0}
                className="flex flex-col justify-center items-center w-12 sm:w-[78px] focus:outline-none focus:ring-0 focus:border-b-2 focus:border-[#006241] pb-1 transition-colors"
              >
                {item.component && <item.component />}
                <p className="text-[11px] h-[13px] text-[#777777]">
                  {item.label}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default BottomNavigationBar;
