'use server';
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
};

export const isEmailValid = async (email: string, code: string) => {
  const response = await fetch(
    `${process.env.BASE_API_URL}/auth/email/request`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, code }),
    },
  );

  console.log(response);
};
