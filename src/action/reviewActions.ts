'use server';
export const getReviewSummary = async (productId: number) => {
  const response = await fetch(
    `${process.env.BASE_API_URL}/review/summary/${productId}`,
    {
      method: 'GET',
    },
  );

  const result = await response.json();
  return result;
};
