import { useCustomerAddressStore } from "../../store/customers/CustomerAddressStore";
import { useEffect } from "react";
import { CustomerAddress } from "../../service/customerAddressType";

/**
 * Hook for fetching customer addresses by customer ID.
 */
export function useFetchAddresses(customerId: string): {
  addresses: CustomerAddress[];
  error: string | null;
  fetchAddressesByCustomerId: (customerId: string) => Promise<void>;
} {
  const { addresses, error, fetchAddressesByCustomerId } = useCustomerAddressStore();

  useEffect(() => {
    if (customerId) fetchAddressesByCustomerId(customerId);
  }, [customerId, fetchAddressesByCustomerId]);

  return { addresses, error, fetchAddressesByCustomerId };
}

/**
 * Hook for creating a new customer address.
 */
export function useCreateAddress(): {
  createAddress: (addressData: Partial<CustomerAddress>) => Promise<void>;
  error: string | null;
} {
  const { createAddress, error } = useCustomerAddressStore();
  return { createAddress, error };
}

/**
 * Hook for updating an existing customer address.
 */
export function useUpdateAddress(): {
  updateAddress: (customerId: string, addressData: Partial<CustomerAddress>) => Promise<void>;
  error: string | null;
} {
  const { updateAddress, error } = useCustomerAddressStore();
  return { updateAddress, error };
}

/**
 * Hook for deleting a customer address.
 */
