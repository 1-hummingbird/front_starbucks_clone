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

// export interface EmailCheck  {
//   status: 200,
//   statusText: '',
//   headers: Headers {
//     vary: 'Origin, Access-Control-Request-Method, Access-Control-Request-Headers',
//     'x-content-type-options': 'nosniff',
//     'x-xss-protection': '0',
//     'cache-control': 'no-cache, no-store, max-age=0, must-revalidate',
//     pragma: 'no-cache',
//     expires: '0',
//     'strict-transport-security': 'max-age=31536000 ; includeSubDomains',
//     'x-frame-options': 'DENY',
//     'content-type': 'application/json',
//     'transfer-encoding': 'chunked',
//     date: 'Tue, 24 Sep 2024 03:22:48 GMT',
//     'keep-alive': 'timeout=60',
//     connection: 'keep-alive'
//   },
//   body: ReadableStream { locked: false, state: 'readable', supportsBYOB: true },
//   bodyUsed: false,
//   ok: true,
//   redirected: false,
//   type: 'basic',
//   url: 'https://api.team-hummingbird.shop/api/v1/auth/email/check'
// }
