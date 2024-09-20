export interface CommonResType<T> {
  httpStatus: string;
  isSuccess: boolean;
  message: string;
  code: number;
  result: T;
}

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

export interface UserDataType {
  accessToken: string;
  name: string;
  uuid: string;
  email?: string;
}
