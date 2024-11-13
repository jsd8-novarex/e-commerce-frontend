import { create } from "zustand";

export type ScrollLockStateType = {
  isPageScrollLocked: boolean;
  handleScrollLock: (isScrollLocked: boolean) => void;
};

export const useScrollLockStore = create<ScrollLockStateType>((set) => ({
  isPageScrollLocked: false,
  handleScrollLock: (isScrollLocked) =>
    set((state) => ({ isPageScrollLocked: (state.isPageScrollLocked = isScrollLocked) })),
}));
