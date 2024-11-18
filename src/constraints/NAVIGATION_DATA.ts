import { FilterOptionsDataType } from "./COLLECTIONS_FILTER_DATA";

export interface NavigationDataType extends FilterOptionsDataType {
  showOnDesktop: boolean;
};

export const navigationData: NavigationDataType[] = [
  {
    order: 0,
    name: "Woman",
    path: "/collections",
    showOnDesktop: true,
  },
  {
    order: 1,
    name: "Man",
    path: "/collections",
    showOnDesktop: true,
  },
  {
    order: 2,
    name: "About",
    path: "/collections",
    showOnDesktop: false,
  },
  {
    order: 3,
    name: "Login",
    path: "/sign-in",
    showOnDesktop: false,
  },
];
