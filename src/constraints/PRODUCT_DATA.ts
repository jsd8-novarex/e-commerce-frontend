export type ProductsDataType = {
    id: string;
    sku: string;
    brand_id: string;
    category_id: string;
    gender_id: string;
    name: string;
    quantity: number;
    price: number;
    description: string;
    create_timestamp: string;
    last_updated_timestamp: string;
    creator_id: string;
    last_op_id: string;
  };
  
  export type BrandDataType = {
    id: string;
    name: string;
    create_timestamp: string;
    last_updated_timestamp: string;
    creator_id: string;
    last_op_id: string;
  };
  
  export type CategoryDataType = {
    id: string;
    name: string;
    create_timestamp: string;
    last_updated_timestamp: string;
    creator_id: string;
    last_op_id: string;
  };
  
  export const product_list: ProductsDataType[] = [
    {
      id: "ad599766-362e-480f-a1d6-23830980307f",
      sku: "abc-defg",
      brand_id: "c980df29-aeb0-429f-a05f-8fe2523f12e2",
      category_id: "1d34a07a-b06a-4be9-84e1-b0193eb3b75b",
      gender_id: "-",
      name: "Mens Recycled Cashmere Cardigan - Black",
      quantity: 1,
      price: 275,
      description:
        " WRAP YOURSELF IN WARMTH WITH THE PANGAIA RECYCLED CASHMERE CARDIGAN. MADE FROM A LUXURIOUS BLEND OF RECYCLED CASHMERE, THIS CARDIGAN OFFERS SOFTNESS AND DURABLENESS IN ONE ELEGANT PIECE.",
      create_timestamp: "2024-05-03 13:03:53.259615+00",
      last_updated_timestamp: "2024-05-03 13:03:53.259615+00",
      creator_id: "earth",
      last_op_id: "earth",
    },
  ];