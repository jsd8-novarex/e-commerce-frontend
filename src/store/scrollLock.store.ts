import { create } from "zustand";

export type ScrollLockStateType = {
  openComponents: Record<string, boolean>;
  handleScrollLock: (componentName: string, isOpen: boolean) => void;
  isAnyComponentOpen: () => boolean;
};

export const useScrollLockStore = create<ScrollLockStateType>((set, get) => ({
  openComponents: {},
  handleScrollLock: (componentName, isOpen) =>
    set((state) => ({
      openComponents: { ...state.openComponents, [componentName]: isOpen },
    })),
  isAnyComponentOpen: () => Object.values(get().openComponents).some((isOpen) => isOpen),
}));
