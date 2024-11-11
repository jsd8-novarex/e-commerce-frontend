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
    sku: "-",
    brand_id: "-",
    category_id: "-",
    gender_id: "-",
    name: "Mens Recycled Cashmere Cardigan",
    quantity: 1,
    price: 275,
    description:
      "WRAP YOURSELF IN WARMTH WITH THE PANGAIA RECYCLED CASHMERE CARDIGAN. MADE FROM A LUXURIOUS BLEND OF RECYCLED CASHMERE, THIS CARDIGAN OFFERS SOFTNESS AND DURABLENESS IN ONE ELEGANT PIECE.",
    create_timestamp: "2024-05-03 13:03:53.259615+00",
    last_updated_timestamp: "2024-05-03 13:03:53.259615+00",
    creator_id: "earth",
    last_op_id: "earth",
  },
  {
    id: "a5c3c271-76b0-47b9-b5e2-78a5060b7062",
    sku: "-",
    brand_id: "-",
    category_id: "-",
    gender_id: "-",
    name: "Mens 365 Heavyweight Hoodie",
    quantity: 10,
    price: 185,
    description:
      "THE PANGAIA 365 HEAVYWEIGHT HOODIE IN BLACK IS MADE FROM 50% ORGANIC COTTON AND 50% RECYCLED COTTON. TREATED WITH PPRMNT™ FOR ANTI-ODOR PROPERTIES, HELPING KEEP YOUR HOODIE FRESHER FOR LONGER. THE HEAVYWEIGHT FABRIC AND BRUSHED INTERIOR PROVIDE A STRUCTURED SHAPE AND SOFT FEEL. THIS GENDERLESS HOODIE PROVIDES WARMTH AND DURABLE COMFORT FOR YEAR-ROUND WEAR.",
    create_timestamp: "2024-05-03 13:03:53.259615+00",
    last_updated_timestamp: "2024-05-03 13:03:53.259615+00",
    creator_id: "earth",
    last_op_id: "earth",
  },
  {
    id: "e60d06ca-25c2-4d7d-b8f2-4210becc8f07",
    sku: "-",
    brand_id: "-",
    category_id: "-",
    gender_id: "-",
    name: "Mens 365 Heavyweight Track Pants",
    quantity: 12,
    price: 175,
    description:
      "STEP INTO COMFORT WITH THE PANGAIA 365 HEAVYWEIGHT TRACK PANTS. MADE FROM 420 GSM HEAVYWEIGHT COTTON AND TREATED WITH PPRMNT™ FOR ANTI-ODOR PROPERTIES, HELPING KEEP YOUR TRACK PANTS FRESHER FOR LONGER, THESE TRACK PANTS BRING A WHOLE NEW LEVEL OF FRESHNESS AND SOFTNESS TO YOUR EVERYDAY WEAR.",
    create_timestamp: "2024-05-03 13:03:53.259615+00",
    last_updated_timestamp: "2024-05-03 13:03:53.259615+00",
    creator_id: "earth",
    last_op_id: "earth",
  },
  {
    id: "b1c6df09-4e9e-47c2-a5d4-7588e8f2c510",
    sku: "-",
    brand_id: "-",
    category_id: "-",
    gender_id: "-",
    name: "Mens 365 Midweight T-shirt",
    quantity: 100,
    price: 70,
    description:
      "BRIGHTEN UP YOUR LITTLE ONE’S WARDROBE WITH THE PANGAIA KIDS 365 MIDWEIGHT T-SHIRT IN BLACK. MADE FROM 100% ORGANIC COTTON AND TREATED WITH PPRMINT™ FOR LASTING FRESHNESS, THIS T-SHIRT IS DESIGNED FOR COMFORT AND DURABILITY.",
    create_timestamp: "2024-05-03 13:03:53.259615+00",
    last_updated_timestamp: "2024-05-03 13:03:53.259615+00",
    creator_id: "earth",
    last_op_id: "earth",
  },
  {
    id: "74c2a8d5-48fd-4ca1-a2b1-f320545dfd56",
    sku: "-",
    brand_id: "-",
    category_id: "-",
    gender_id: "-",
    name: "Mens Recycled Cashmere Track Pants",
    quantity: 120,
    price: 285,
    description:
      "STEP INTO COMFORT WITH THE PANGAIA RECYCLED CASHMERE PANTS. MADE FROM A BLEND OF RECYCLED CASHMERE, THESE PANTS OFFER THE PERFECT COMBINATION OF SOFTNESS, WARMTH, AND DURABLENESS FOR LOUNGING OR CASUAL WEAR.",
    create_timestamp: "2024-05-03 13:03:53.259615+00",
    last_updated_timestamp: "2024-05-03 13:03:53.259615+00",
    creator_id: "earth",
    last_op_id: "earth",
  },
  {
    id: "6825d26f-4050-4e9e-bc7f-b506ebd78463",
    sku: "-",
    brand_id: "-",
    category_id: "-",
    gender_id: "-",
    name: "Mens DNA Heavyweight Polo Sweatshirt",
    quantity: 2,
    price: 225,
    description:
      "ELEVATE YOUR CASUAL WARDROBE WITH THE PANGAIA DNA POLO NECK SWEATSHIRT IN BROWN. THIS SWEATSHIRT COMBINES THE COMFORT OF A RELAXED FIT WITH THE SOPHISTICATION OF A POLO NECK, MAKING IT A VERSATILE PIECE FOR ANY OCCASION.",
    create_timestamp: "2024-05-03 13:03:53.259615+00",
    last_updated_timestamp: "2024-05-03 13:03:53.259615+00",
    creator_id: "earth",
    last_op_id: "earth",
  },
  {
    id: "d2ae5f29-3f42-4882-a5b2-71f5ac9935fe",
    sku: "-",
    brand_id: "-",
    category_id: "-",
    gender_id: "-",
    name: "Mens Flower-Warmth Padded Overshirt",
    quantity: 2,
    price: 395,
    description:
      "THIS PADDED OVERSHIRT IS MADE WITH FLWRFILL™, A BREAKTHROUGH WADDING CREATED USING WILDFLOWERS, LYOCELL AND A BIOPOLYMER. THE OUTER SHELL IS 100% RECYCLED NYLON. DEVELOPED IN COLLABORATION WITH IMBOTEX, FLWRFILL™ OFFERS A PLANT-BASED ALTERNATIVE TO GOOSE AND DUCK DOWN—RESULTING IN A WARM AND MORE LIGHTWEIGHT OUTERWEAR STAPLE.",
    create_timestamp: "2024-05-03 13:03:53.259615+00",
    last_updated_timestamp: "2024-05-03 13:03:53.259615+00",
    creator_id: "earth",
    last_op_id: "earth",
  },
  {
    id: "7fc080b4-31e5-4c6a-bcc3-d1e6934364d0",
    sku: "-",
    brand_id: "-",
    category_id: "-",
    gender_id: "-",
    name: "Mens DNA Recycled Cashmere Zip Up Sweater",
    quantity: 5,
    price: 395,
    description:
      "THIS PADDED OVERSHIRT IS MADE WITH FLWRFILL™, A BREAKTHROUGH WADDING CREATED USING WILDFLOWERS, LYOCELL AND A BIOPOLYMER. THE OUTER SHELL IS 100% RECYCLED NYLON. DEVELOPED IN COLLABORATION WITH IMBOTEX, FLWRFILL™ OFFERS A PLANT-BASED ALTERNATIVE TO GOOSE AND DUCK DOWN—RESULTING IN A WARM AND MORE LIGHTWEIGHT OUTERWEAR STAPLE.",
    create_timestamp: "2024-05-03 13:03:53.259615+00",
    last_updated_timestamp: "2024-05-03 13:03:53.259615+00",
    creator_id: "earth",
    last_op_id: "earth",
  },
  {
    id: "b09c1f95-d6da-408f-b4c3-51e3cc443f90",
    sku: "-",
    brand_id: "-",
    category_id: "-",
    gender_id: "-",
    name: "Womens DNA Regenerative Merino Wool Hoodie",
    quantity: 50,
    price: 240,
    description:
      "WRAP YOURSELF IN COMFORT WITH THE PANGAIA REGENERATIVE MERINO WOOL HOODIE IN NAVY. MADE FROM NATIVA™-CERTIFIED REGENERATIVE MERINO WOOL, THIS HOODIE OFFERS SOFTNESS, WARMTH, AND DURABLENESS IN ONE VERSATILE PIECE.",
    create_timestamp: "2024-05-03 13:03:53.259615+00",
    last_updated_timestamp: "2024-05-03 13:03:53.259615+00",
    creator_id: "earth",
    last_op_id: "earth",
  },
  {
    id: "c3ed41b2-3a52-45f3-bdd2-71cd97ab62f0",
    sku: "-",
    brand_id: "-",
    category_id: "-",
    gender_id: "-",
    name: "Womens DNA Regenerative Merino Wool Track Pants",
    quantity: 150,
    price: 230,
    description:
      "EXPERIENCE THE COMFORT OF THE PANGAIA REGENERATIVE MERINO WOOL TRACK PANTS IN CAMEL. THESE TRACK PANTS ARE MADE FROM REGENERATIVE MERINO WOOL, OFFERING WARMTH, SOFTNESS, AND A RELAXED FIT THAT’S PERFECT FOR LOUNGING OR LIGHT ACTIVITY.",
    create_timestamp: "2024-05-03 13:03:53.259615+00",
    last_updated_timestamp: "2024-05-03 13:03:53.259615+00",
    creator_id: "earth",
    last_op_id: "earth",
  },
];
