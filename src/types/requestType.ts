export interface User {
  loginID: string;
  password: string;
}

export interface RegisterRequest {
  loginID: string;
  name: string;
  nickname: string;
  birthdate: string;
  phone: string;
  email: string;
  password: string;
}

export type ProductInfoType =
  | 'options'
  | 'info'
  | 'images'
  | 'detail'
  | 'detail/wish'
  | 'detail/cart-quantity';
