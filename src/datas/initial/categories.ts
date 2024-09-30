import { Category } from "@/types/responseType";
import Bakery from "@/components/icons/productCategory/Bakery";
import Beverage from "@/components/icons/productCategory/Beverage";
import CoffeeSupplies from "@/components/icons/productCategory/CoffeeSupplies";
import Dessert from "@/components/icons/productCategory/Dessert";
import EGift from "@/components/icons/productCategory/EGift";
import LifeStyle from "@/components/icons/productCategory/LifeStyle";
import Mugcup from "@/components/icons/productCategory/Mugcup";
import Tumbler from "@/components/icons/productCategory/Tumbler";

export const categories: Category[] = [
  {
    id: 1,
    category: "텀블러/보온병",
    url: "category/tumbler/1",
    component: Tumbler,
  },
  { id: 2, category: "컵/머그", url: "category/cup/1", component: Mugcup },
  {
    id: 3,
    category: "커피/티용품",
    url: "category/equipment/1",
    component: CoffeeSupplies,
  },
  {
    id: 4,
    category: "라이프스타일",
    url: "category/life-style/1",
    component: LifeStyle,
  },
  { id: 5, category: "e-gift", url: "category/gift/1", component: EGift },
  { id: 6, category: "디저트", url: "category/dessert/1", component: Dessert },
  // { id: 7, category: "베이커리", url: "category/bakery", component: Bakery },
  // {
  //   id: 8,
  //   category: "음료/요거트",
  //   url: "category/beverage",
  //   component: Beverage,
  // },
];
