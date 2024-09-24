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
