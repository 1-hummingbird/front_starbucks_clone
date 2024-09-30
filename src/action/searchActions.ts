"use server";

import { getServerSession } from "next-auth/next";
import { options } from "@/app/api/auth/[...nextauth]/options";

export async function searchProducts(searchTerm: string) {
    const response = await fetch(`${process.env.BASE_API_URL}/product/list?productName=${searchTerm}`);
    const data = await response.json();
    return data;
}

export const getRecentSearches = async (): Promise<string[]> => {
    try {
        // Get the session
        const session = await getServerSession(options);
        if (!session || !session.user) {
            throw new Error('Authentication required');
        }

      // Get the token from the session
      const token = session.user.accessToken; // Adjust this based on your token storage method
      if (!token) {
        throw new Error('Authentication token not found');
      }

      const response = await fetch(`${process.env.BASE_API_URL}/product/search/list`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, // Add the Authentication header
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch recent searches');
      }

      const responseJson = await response.json();
      console.log(responseJson.result.searchWordDetails);
      return responseJson.result.searchWordDetails;
    } catch (error) {
        console.error('Error getting recent searches:', error);
        return [];
    }
};

export const saveRecentSearch = async (searchTerm: string) => {
    try {
         // Get the session
         const session = await getServerSession(options);
         if (!session || !session.user) {
             throw new Error('Authentication required');
         }
 
       // Get the token from the session
       const token = session.user.accessToken; // Adjust this based on your token storage method
       if (!token) {
         throw new Error('Authentication token not found');
       }
 
       const response = await fetch(`${process.env.BASE_API_URL}/product/search/word`, {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json',
           'Authorization': `Bearer ${token}`, // Add the Authentication header
         },
         body: searchTerm
       });
 
       if (!response.ok) {
         throw new Error('Failed to save recent search');
       }
 
       const responseJson = await response.json();
       return responseJson;
    } catch (error) {
        console.error('Error saving recent search:', error);
        return [];
    }
};

export async function deleteRecentSearch(searchTerm: string) {
    try {
        // Get the session
        const session = await getServerSession(options);
        if (!session || !session.user) {
            throw new Error('Authentication required');
        }

      // Get the token from the session
      const token = session.user.accessToken; // Adjust this based on your token storage method
      if (!token) {
        throw new Error('Authentication token not found');
      }

      const response = await fetch(`${process.env.BASE_API_URL}/product/search/word/delete`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, // Add the Authentication header
        },
        body: searchTerm
      });

      if (!response.ok) {
        throw new Error('Failed to save recent search');
      }

      const responseJson = await response.json();
      return responseJson;
   } catch (error) {
       console.error('Error saving recent search:', error);
       return [];
   }
}

export async function deleteAllRecentSearches() {
    try {
        // Get the session
        const session = await getServerSession(options);
        if (!session || !session.user) {
            throw new Error('Authentication required');
        }

      // Get the token from the session
      const token = session.user.accessToken; // Adjust this based on your token storage method
      if (!token) {
        throw new Error('Authentication token not found');
      }

      const response = await fetch(`${process.env.BASE_API_URL}/product/search/word/delete-all`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, // Add the Authentication header
        },
      });

      if (!response.ok) {
        throw new Error('Failed to delete all recent searches');
      }

      const responseJson = await response.json();
        return responseJson;
    } catch (error) {
        console.error('Error deleting all recent searches:', error);
        return [];
    }
}

