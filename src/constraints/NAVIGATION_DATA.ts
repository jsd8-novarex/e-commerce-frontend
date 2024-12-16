import { FilterOptionsDataType } from "./COLLECTIONS_FILTER_DATA";

export interface NavigationDataType extends FilterOptionsDataType {
  showOnDesktop: boolean;   
}

export const navigationData: NavigationDataType[] = [
  {
    order: 0,
    name: "All",
    path: "/collections",
    showOnDesktop: true,
  },
  {
    order: 1,
    name: "Woman",
    path: "/collections",
    showOnDesktop: true,
  },
  {
    order: 2,
    name: "Man",
    path: "/collections",
    showOnDesktop: true,
  },
  {
    order: 3,
    name: "About",
    path: "/about",
    showOnDesktop: false,
  },
  {
    order: 4,
    name: "Sign in",
    path: "/sign-in",
    showOnDesktop: false,
  }
];
