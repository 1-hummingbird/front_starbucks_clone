"use server";
import { Delivery } from "@/types/delivery";
import { getServerSession } from "next-auth/next";
import { options } from "@/app/api/auth/[...nextauth]/options"; // Adjust this import path as needed

interface ApiResponse {
  result: {
    shippingAddressList: Delivery[];
  };
}

async function fetchDeliveries(): Promise<Delivery[]> {
    try {
        // Get the session
        const session = await getServerSession(options);
        console.log("session : ", session);
        if (!session || !session.user) {
            throw new Error('Authentication required');
        }

      // Get the token from the session
      const token = session.user.accessToken; // Adjust this based on your token storage method
      console.log("token : ", token);
      if (!token) {
        throw new Error('Authentication token not found');
      }

      const response = await fetch(`${process.env.BASE_API_URL}/shipping/list`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`, // Add the Authentication header
        },
        cache: 'no-store', // This ensures the request is not cached
      });
  
      if (!response.ok) {
        throw new Error('Failed to fetch deliveries');
      }
  
      const data: ApiResponse = await response.json();

      console.log("delivery -- return : ", data);
      return [];
      
      return data.result.shippingAddressList.map(delivery => ({
        ...delivery,
        type: delivery.addressNickname === "Home" || delivery.addressNickname === "집" ? "a" : undefined
      }));
    } catch (error) {
      console.error('Error fetching deliveries:', error);
      return [];
    }
  }

  export default fetchDeliveries;