import { create } from "zustand";
import * as customerService from "../../service/customerService";
import { Customer } from "../../service/customertype";

interface CustomerStoreState {
  customer: Customer | null;
  error: string | null;
  fetchCustomerProfile: () => Promise<void>;
  updateCustomerInfo: (data: Partial<Customer>) => Promise<void>;
  updatePassword: (oldPassword: string, newPassword: string) => Promise<void>;
  verifyPassword: (oldPassword: string) => Promise<boolean>;
}

export const useCustomerStore = create<CustomerStoreState>((set) => ({
  customer: null,
  error: null,

  fetchCustomerProfile: async () => {
    const [customer, error] = await customerService.getCustomerProfile();
    set({ customer, error: error || null });
  },

  updateCustomerInfo: async (data: Partial<Customer>) => {
    const { customer } = useCustomerStore.getState();
    if (!customer?._id) {
      console.error("Customer data is missing or not initialized.");
      throw new Error("Customer data is missing. Please refresh and try again.");
    }

    const [, error] = await customerService.updateCustomer({ id: customer._id, data });

    if (!error) {
      set((state) => ({
        customer: { ...state.customer, ...data } as Customer,
      }));
    } else {
      set({ error: error.message });
      throw error;
    }
  },

  updatePassword: async (oldPassword: string, newPassword: string) => {
    const { customer } = useCustomerStore.getState();
    if (!customer?._id) throw new Error("No customer to update password");

    const [, error] = await customerService.updatePassword({
      id: customer._id,
      oldPassword,
      newPassword,
    });

    if (error) {
      set({ error: error.message });
      throw error;
    }
  },

  verifyPassword: async (oldPassword: string) => {
    const { customer } = useCustomerStore.getState();
    if (!customer?._id) throw new Error("No customer to verify password");

    const [isValid, error] = await customerService.verifyOldPassword({
      id: customer._id,
      oldPassword,
    });

    if (error) {
      set({ error: error.message });
      throw error;
    }

    return isValid ?? false;
  },
}));
