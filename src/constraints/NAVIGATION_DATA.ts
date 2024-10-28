export type NavigationDataType = {
  order: number;
  name: string;
  path: string;
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
