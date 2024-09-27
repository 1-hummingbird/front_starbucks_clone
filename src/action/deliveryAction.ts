"use server";
import { AddDeliveryRequest } from "@/types/addDeliveryRequest";
import { DeliveryDto } from "@/types/deliveryDto";
import { UpdateDeliveryAddressRequest } from "@/types/updateDeliveryAddressRequest";
import { getServerSession } from "next-auth/next";
import { options } from "@/app/api/auth/[...nextauth]/options"; // Adjust this import path as needed

interface Deliveries {
  result: DeliveryDto[];
}


async function fetchDeliveries(): Promise<DeliveryDto[]> {
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

      const response = await fetch(`${process.env.BASE_API_URL}/shipping/list`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, // Add the Authentication header
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch deliveries');
      }
      
      let data: Deliveries;
      try {
        const apiresponse = await response.json();
        data = apiresponse.result;
      } catch (parseError) {
        console.error('Error parsing JSON:', parseError);
        return [];
      }
      if (!data || !Array.isArray(data)) {
        console.error('Unexpected data structure:', data);
        return [];
      }

      if (data.length === 0) {
        return [];
      }
      const defaultDeliveryAddressId = await getDefaultDeliveryAddressId();
      const result = data.map(deliveryDto => {
        const isDefault = deliveryDto.id === defaultDeliveryAddressId;
        return {
            ...deliveryDto,
            type: isDefault ? "default" : undefined
        };
        });
        return result;
    } catch (error) {
      console.error('Error fetching deliveries:', error);
      return [];
    }
  }

async function deleteDeliveryAddress(addressId: number): Promise<Response> {
    const session = await getServerSession(options);
    if (!session || !session.user) {
        throw new Error("User is not authenticated");
    }

    const token = session.user.accessToken;
    const response = await fetch(`${process.env.BASE_API_URL}/shipping/delete`, {
        method: 'POST',
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

async function addDeliveryAddress(delivery: AddDeliveryRequest): Promise<Response> {
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
async function updateDeliveryAddress(delivery: UpdateDeliveryAddressRequest): Promise<Response> {
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

async function setDefaultDeliveryAddress(addressId: number): Promise<Response> {
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
async function getDetailDeliveryAddress(deliveryId: number): Promise<DeliveryDto> {
    const session = await getServerSession(options);
    if (!session || !session.user) {
        throw new Error("User is not authenticated");
    }

    const token = session.user.accessToken;
    const response = await fetch(`${process.env.BASE_API_URL}/shipping/get-detail`, {  
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ shippingAddressID: deliveryId })
    });

    if (!response.ok) {
        throw new Error(`Failed to get detail delivery address: ${response.statusText}`);
    }

    const data = await response.json();
    return data.result; 
}

// get Default Delivery Address's Id
async function getDefaultDeliveryAddressId(): Promise<number> {
    const session = await getServerSession(options);
    if (!session || !session.user) {
        throw new Error("User is not authenticated");
    }

    const token = session.user.accessToken;
    const response = await fetch(`${process.env.BASE_API_URL}/shipping/default-id`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });

    if (!response.ok) {
        throw new Error(`Failed to get default delivery address: ${response.statusText}`);
    }

    const data = await response.json();
    return data.result.shippingDefaultID;
}   


export default fetchDeliveries;
export { deleteDeliveryAddress, addDeliveryAddress, updateDeliveryAddress, setDefaultDeliveryAddress, getDetailDeliveryAddress };

