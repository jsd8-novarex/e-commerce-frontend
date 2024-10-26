export type NavigationDataType = {
  order: number;
  name: string;
  path: string;
};

export const navigationData: NavigationDataType[] = [
  {
    order: 0,
    name: "Woman",
    path: "/collections",
  },
  {
    order: 1,
    name: "Man",
    path: "/collections",
  },
];

export const filterOptionsData: NavigationDataType[] = [
  {
    order: 0,
    name: "Sweatshirts",
    path: "/collections",
  },
  {
    order: 1,
    name: "Hoodies",
    path: "/collections",
  },
  {
    order: 2,
    name: "T-shirts",
    path: "/collections",
  },
  {
    order: 3,
    name: "Jackets",
    path: "/collections",
  },
  {
    order: 4,
    name: "Jumpers",
    path: "/collections",
  },
  {
    order: 5,
    name: "Coats",
    path: "/collections",
  },
];
