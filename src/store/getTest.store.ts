import { create } from "zustand";
import getTest from "../service/getTest";

interface GetTestStateType {
  data: { message: string } | null;
  error: string | null;
  fetchData: () => Promise<void>;
}

export const useGetTestStore = create<GetTestStateType>((set) => ({
  data: null,
  error: null,
  fetchData: async () => {
    const [response, error] = await getTest();
    set({ data: response, error: error });
  },
}));
