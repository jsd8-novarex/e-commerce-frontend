  export type ProductsDataType = {
    id: string;
    sku: string;
    brand_id: string;
    category_id: string;
    name: string;
    quantity: number;
    price: number;
    description: string;
    size: string;
    create_timestamp: string;
    last_updated_timestamp: string;
    creator_id: string;
    last_op_id: string;
  };
  
  export const productsData: ProductsDataType[] = [
    {
      id: "1",
      sku: "1",
      brand_id: "1",
      category_id: "1",
      name: "Mens Recycled Cashmere Cardigan - Black",
      quantity: 10,
      price: 275,
      size: "",
      description:
        "WRAP YOURSELF IN WARMTH WITH THE PANGAIA RECYCLED CASHMERE CARDIGAN. MADE FROM A LUXURIOUS BLEND OF RECYCLED CASHMERE, THIS CARDIGAN OFFERS SOFTNESS AND DURABLENESS IN ONE ELEGANT PIECE.",
      create_timestamp: "27-10-2024",
      last_updated_timestamp: "27-10-2024",
      creator_id: "earth.",
      last_op_id: "earth.",
    },
  ];