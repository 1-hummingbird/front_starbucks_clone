// Define the interface for the update delivery address request payload
interface UpdateDeliveryAddressRequest {
    shippingAddressID: number;
    addressNickname?: string;
    name?: string;
    address?: string;
    phone?: string;
    memo?: string;
}

export type { UpdateDeliveryAddressRequest };