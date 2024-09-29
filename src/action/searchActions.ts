"use server";

export async function searchProducts(searchTerm: string) {
    const response = await fetch(`${process.env.BASE_API_URL}/product/list?productName=${searchTerm}`);
    const data = await response.json();
    return data;
}