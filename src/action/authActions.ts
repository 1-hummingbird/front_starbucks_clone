'use server';

import { CommonResType, IsValueAvaiable } from '@/types/responseType';

import { RegisterRequest } from '@/types/requestType';

export const sendVerificationCode = async (email: string) => {
  const response = await fetch(
    `${process.env.BASE_API_URL}/auth/email/request`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    },
  );

  const result = await response.json();
  return result;
};

export const isEmailValid = async (
  email: string,
  verificationCode: string,
): Promise<CommonResType<null>> => {
  const response = await fetch(`${process.env.BASE_API_URL}/auth/email/check`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, verificationCode }),
  });

  const result = await response.json();
  return result;
};

export const isValueAvailable = async (
  valueType: string,
  value: string,
): Promise<CommonResType<IsValueAvaiable>> => {
  const response = await fetch(
    `${process.env.BASE_API_URL}/auth/${valueType}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(value),
    },
  );

  const result = await response.json();
  return result;
};

export const registerUser = async (
  values: RegisterRequest,
): Promise<CommonResType<null>> => {
  const response = await fetch(`${process.env.BASE_API_URL}/auth/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(values),
  });

  const result = await response.json();
  return result;
};
