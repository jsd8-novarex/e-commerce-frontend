export interface ShowCaseSectionDataType {
  name: string;
  information: string;
  url: string;
  alternate: string;
  positionImg: string;
};

export type ShowCaseSectionType = ShowCaseSectionDataType[];

export const ShowCaseSectionData: ShowCaseSectionType = [
  {
    name: "Casual Wear Collection",
    information:
      "Soft and comfortable long-sleeve top, Perfect for everyday wear and any casual occasion.",
    url: "https://images.unsplash.com/photo-1726706265802-7c110dce774e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alternate:
      "https://unsplash.com/photos/a-woman-standing-in-front-of-a-tree-in-a-greenhouse-HoXhrlPnQAE",
    positionImg: "object-[65%] sm:object-center",
  },
  {
    name: "zzz",
    information: "zzz",
    url: "https://images.pexels.com/photos/952212/pexels-photo-952212.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alternate: "https://www.pexels.com/photo/grayscale-photo-of-person-sitting-on-chair-952212/",
    positionImg: "object-[58%] sm:object-center",
  },
  {
    name: "zzz",
    information: "zzz",
    url: "https://images.unsplash.com/photo-1463100099107-aa0980c362e6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alternate:
      "https://unsplash.com/photos/black-and-black-and-white-converse-all-star-high-top-sneakers-mWYhrOiAgmA",
    positionImg: "",
  },
];
