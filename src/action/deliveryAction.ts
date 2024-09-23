"use server";
import { Delivery } from "@/types/delivery";
import { DeliveryDto } from "@/types/deliveryDto";
import { getServerSession } from "next-auth/next";
import { options } from "@/app/api/auth/[...nextauth]/options"; // Adjust this import path as needed

interface ApiResponse {
  result: {
    shippingAddressList: Delivery[];
  };
}

// Define the interface for the update delivery address request payload
interface UpdateDeliveryAddressRequest {
    shippingAddressID: number;
    addressNickname?: string;
    name?: string;
    address?: string;
    phone?: string;
    memo?: string;
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
      if (data.result.shippingAddressList.length === 0) {
        return [];
      }
      else {
        return data.result.shippingAddressList.map(delivery => ({
          ...delivery,
          type: delivery.addressNickname === "Home" || delivery.addressNickname === "집" ? "a" : undefined
        }));
      }
    } catch (error) {
      console.error('Error fetching deliveries:', error);
      return [];
    }
  }

async function deleteDeliveryAddress(addressId: number): Promise<ApiResponse> {
    const session = await getServerSession(options);
    if (!session || !session.user) {
        throw new Error("User is not authenticated");
    }

    const token = session.user.accessToken;
    const response = await fetch(`${process.env.BASE_API_URL}/shipping/delete/`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ shippingAddressID: addressId })
    });

    if (!response.ok) {
        throw new Error(`Failed to delete delivery address: ${response.statusText}`);
    }

    return response.json();
}

async function addDeliveryAddress(delivery: DeliveryDto): Promise<ApiResponse> {
    const session = await getServerSession(options);
    if (!session || !session.user) {
        throw new Error("User is not authenticated");
    }

    const token = session.user.accessToken;
    const response = await fetch(`${process.env.BASE_API_URL}/shipping/add`, {  
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(delivery)
    }); 

    if (!response.ok) {
        throw new Error(`Failed to add delivery address: ${response.statusText}`);
    }

    return response.json();
}

// update delivery address
async function updateDeliveryAddress(delivery: UpdateDeliveryAddressRequest): Promise<ApiResponse> {
    const session = await getServerSession(options);
    if (!session || !session.user) {
        throw new Error("User is not authenticated");
    }

    const token = session.user.accessToken;
    const response = await fetch(`${process.env.BASE_API_URL}/shipping/update`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(delivery)
    });

    if (!response.ok) {
        throw new Error(`Failed to update delivery address: ${response.statusText}`);
    }

    return response.json();
}   

// set default delivery address

async function setDefaultDeliveryAddress(addressId: number): Promise<ApiResponse> {
    const session = await getServerSession(options);
    if (!session || !session.user) {
        throw new Error("User is not authenticated");
    }

    const token = session.user.accessToken;
    const response = await fetch(`${process.env.BASE_API_URL}/shipping/set-default`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ shippingAddressID: addressId })
    });

    if (!response.ok) {
        throw new Error(`Failed to set default delivery address: ${response.statusText}`);
    }

    return response.json();
}

// get default delivery address
async function getDefaultDeliveryAddress(): Promise<Delivery> {
    const session = await getServerSession(options);
    if (!session || !session.user) {
        throw new Error("User is not authenticated");
    }

    const token = session.user.accessToken;
    const response = await fetch(`${process.env.BASE_API_URL}/shipping/get-default`, {  
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });

    if (!response.ok) {
        throw new Error(`Failed to get default delivery address: ${response.statusText}`);
    }

    const data = await response.json();
    return data.result; 
}


export default fetchDeliveries;
export { deleteDeliveryAddress, addDeliveryAddress, updateDeliveryAddress, setDefaultDeliveryAddress, getDefaultDeliveryAddress };

