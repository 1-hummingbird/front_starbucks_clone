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

// cart
export interface ShippingAddressType {
  addressNickname: string;
  name: string;
  address: string;
  memo: string;
  phone: string;
}

export interface CartListType {
  cartIds: number[];
}

export interface CartItemType {
  cartId: number;
  inputData: string;
  productId: number;
  productName: string;
  optionId: number;
  optionName: string;
  cartQuantity: number;
  price: number;
  discountRate: number;
}

export interface ImageByCartIdType {
  cartId: number;
  productImg: string;
}

export interface PayItemType {
  id: 0;
  name: 'string';
  price: 0;
  discountRate: 0;
  isInputOption: true;
}

export interface ShippingDefaultIDType {
  shippingDefaultID: number;
}

export interface OrderListType {
  purchaseCode: 'string';
  purchaseDate: '2024-09-27T06:26:45.430Z';
  totalPrice: 0;
  purchaseItems: [
    {
      optionId: 0;
      productImage: 'string';
      optionName: 'string';
      price: 0;
      qty: 0;
      isReviewable: true;
    },
  ];
}

export interface ProductImagesType {
  url: string;
  isMainImage?: boolean;
}

export interface ProductTitleType {
  name: string;
  price: number;
  isNew: boolean;
  shortDescription: string | null;
  isDiscounted: boolean;
  discountRate: number;
  wishCount: number | null;
}

export interface ProductDetailType {
  detail: string;
}

export interface ReviewTitleType {
  reviewCount: number;
  photoReviewCount: number;
  averageStar: number;
}

export interface ReviewListType {
  content: number[];
  pageable: {
    pageNumber: number;
    pageSize: number;
    sort: object;
    offset: number;
    paged: boolean;
    unpaged: boolean;
  };
  numberOfElements: number;
  size: number;
  number: number;
  sort: { unsorted: boolean; sorted: boolean; empty: boolean };
  first: boolean;
  last: boolean;
  empty: boolean;
}

export interface ReviewContentType {
  nickName: string;
  star: number;
  createAt: string;
  content: string;
  commentCount: number;
}

export interface ExhibitionListType {
  id: number;
  number: string;
  detail: string;
}

export interface ProductThumbnailType {
  productId: number;
  src: string;
}
