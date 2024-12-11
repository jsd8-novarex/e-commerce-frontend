import { create } from "zustand";
import customerAddressService from "../../service/customerAddressService";
import { CustomerAddress } from "../../service/customerAddressType";

interface CustomerAddressStoreState {
  addresses: (CustomerAddress | null)[];
  error: string | null;
  fetchAddressesByCustomerId: (customerId: string) => Promise<void>;
  createAddress: (addressData: Partial<CustomerAddress>) => Promise<void>;
  updateAddress: (customerId: string, addressData: Partial<CustomerAddress>) => Promise<void>;
}

export const useCustomerAddressStore = create<CustomerAddressStoreState>((set) => ({
  addresses: [],
  error: null,

  fetchAddressesByCustomerId: async (customerId: string) => {
    const [data, error] = await customerAddressService.getAddressesByCustomerId(customerId);

    if (error) {
      set({ error: error });
      console.error("Failed to fetch addresses:", error);
      return;
    }

    set({ addresses: data || [], error: null });
  },

  createAddress: async (addressData: Partial<CustomerAddress>) => {
    const [newAddress, error] = await customerAddressService.createAddress(addressData);

    if (error) {
      set({ error: error });
      console.error("Failed to create address:", error);
      return;
    }

    set((state) => ({ addresses: [...state.addresses, newAddress], error: null }));
  },

  updateAddress: async (customerId: string, addressData: Partial<CustomerAddress>) => {
    const [updatedAddress, error] = await customerAddressService.updateAddress({
      customer_id: customerId,
      data: addressData,
    });

    if (error) {
      set({ error: error });
      console.error("Failed to update address:", error);
      return;
    }

    set((state) => ({
      addresses: state.addresses.map((address) =>
        address && address._id === updatedAddress?._id ? updatedAddress : address,
      ),
      error: null,
    }));
  },
}));
