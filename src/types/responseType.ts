export interface CommonResType<T> {
  httpStatus: string;
  isSuccess: boolean;
  message: string;
  code: number;
  result: T;
}

export interface IsValueAvaiable {
  available: boolean;
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

export interface productThumnailType {
  productId: number;
  src: string;
}

export interface ProductImagesType {
  url: string;
  isMainImage?: boolean;
}

export interface ProductDetailType {
  name: string;
  price: number;
  isNew: boolean;
  shortDescription: string | null;
  isDiscounted: boolean;
  discountRate: number;
  wishCount: number | null;
}
