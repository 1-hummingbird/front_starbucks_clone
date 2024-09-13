export interface ExhibitionCardType {
  backgroundImg: string;
}

export interface Category {
  id: number;
  category: string;
  url: string;
  component: () => JSX.Element;
}

export interface Product {
  id: number;
  productId: string;
  name: string;
  price: number;
  icon: {
    media: string;
  };
  link: string;
}
