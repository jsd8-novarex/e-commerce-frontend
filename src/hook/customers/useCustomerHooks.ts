import { useCustomerStore } from "../../store/customers/customerStore";
import { useEffect } from "react";
import { Customer } from "../../service/customertype";

/**
 * Hook for fetching and using customer profile.
 */
export function useCustomerProfile(): {
  customer: Customer | null;
  error: string | null;
  fetchCustomerProfile: () => Promise<void>;
} {
  const { customer, error, fetchCustomerProfile } = useCustomerStore();

  useEffect(() => {
    fetchCustomerProfile();
  }, [fetchCustomerProfile]);

  return { customer, error, fetchCustomerProfile };
}

/**
 * Hook for updating customer info.
 */
export function useUpdateCustomer(): {
  updateCustomerInfo: (data: Partial<Customer>) => Promise<void>;
  error: string | null;
} {
  const { updateCustomerInfo, error } = useCustomerStore();
  return { updateCustomerInfo, error };
}

/**
 * Hook for changing customer password.
 */
export function useUpdatePassword(): {
  updatePassword: (oldPassword: string, newPassword: string) => Promise<void>;
  error: string | null;
} {
  const { updatePassword, error } = useCustomerStore();
  return { updatePassword, error };
}

/**
 * Hook for verifying customer password.
 */
export function useVerifyPassword(): {
  verifyPassword: (oldPassword: string) => Promise<boolean>;
  error: string | null;
} {
  const { verifyPassword, error } = useCustomerStore();
  return { verifyPassword, error };
}
