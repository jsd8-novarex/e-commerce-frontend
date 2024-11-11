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

export type ProductDataType = {
  id: string;
  sku: string;
  brand_id: string;
  category_id: string;
  gender_id: string;
  name: string;
  price: number;
  description: string;
  product_choice: ProductChoiceType[];
  create_timestamp: string;
  last_updated_timestamp: string;
  creator_id: string;
  last_op_id: string;
};

export type ProductChoiceType = {
  id: string;
  sku: string;
  product_id: string;
  quantity: number;
  option: ProductOptionDataType[];
  create_timestamp: string;
  last_updated_timestamp: string;
  creator_id: string;
  last_op_id: string;
};

export type ProductOptionDataType = {
  id: string;
  type: string;
  name: string;
  create_timestamp: string;
  last_updated_timestamp: string;
  creator_id: string;
  last_op_id: string;
};

export const product_list: ProductDataType[] = [
  {
    id: "ad599766-362e-480f-a1d6-23830980307f",
    sku: "T001",
    brand_id: "-",
    category_id: "-",
    gender_id: "-",
    name: "Recycled Cashmere Cardigan",
    price: 275,
    description:
      "WRAP YOURSELF IN WARMTH WITH THE PANGAIA RECYCLED CASHMERE CARDIGAN. MADE FROM A LUXURIOUS BLEND OF RECYCLED CASHMERE, THIS CARDIGAN OFFERS SOFTNESS AND DURABLENESS IN ONE ELEGANT PIECE.",
    product_choice: [
      {
        id: "c1b9f124-45d4-4c8f-983d-2093dbe1d957",
        sku: "T001-R-M",
        product_id: "ad599766-362e-480f-a1d6-23830980307f",
        quantity: 10,
        create_timestamp: "2024-11-10 09:45:22.123456+00",
        last_updated_timestamp: "2024-11-10 09:45:22.123456+00",
        creator_id: "earth",
        last_op_id: "earth",
        option: [
          {
            id: "1a2b3c4d-5e6f-7g8h-9i0j-klmnopqrstuv",
            type: "color",
            name: "Red",
            create_timestamp: "2024-11-10 09:45:22.123456+00",
            last_updated_timestamp: "2024-11-10 09:45:22.123456+00",
            creator_id: "earth",
            last_op_id: "earth",
          },
          {
            id: "2b3c4d5e-6f7g-8h9i-0jkl-mnopqrstuvwx",
            type: "size",
            name: "Medium",
            create_timestamp: "2024-11-10 09:45:22.123456+00",
            last_updated_timestamp: "2024-11-10 09:45:22.123456+00",
            creator_id: "earth",
            last_op_id: "earth",
          },
        ],
      },
    ],
    create_timestamp: "2024-11-10 09:45:22.123456+00",
    last_updated_timestamp: "2024-11-10 09:45:22.123456+00",
    creator_id: "earth",
    last_op_id: "earth",
  },
  {
    id: "a5c3c271-76b0-47b9-b5e2-78a5060b7062",
    sku: "T002",
    brand_id: "-",
    category_id: "-",
    gender_id: "-",
    name: "365 Heavyweight Hoodie",
    price: 185,
    description:
      "THE PANGAIA 365 HEAVYWEIGHT HOODIE IN BLACK IS MADE FROM 50% ORGANIC COTTON AND 50% RECYCLED COTTON. TREATED WITH PPRMNT™ FOR ANTI-ODOR PROPERTIES, HELPING KEEP YOUR HOODIE FRESHER FOR LONGER. THE HEAVYWEIGHT FABRIC AND BRUSHED INTERIOR PROVIDE A STRUCTURED SHAPE AND SOFT FEEL. THIS GENDERLESS HOODIE PROVIDES WARMTH AND DURABLE COMFORT FOR YEAR-ROUND WEAR.",
    product_choice: [
      {
        id: "f6a7c4d2-8f9e-4d6b-8a5d-32a0e3d1b4c6",
        sku: "T002-B-L",
        product_id: "a5c3c271-76b0-47b9-b5e2-78a5060b7062",
        quantity: 10,
        create_timestamp: "2024-11-10 10:15:32.654321+00",
        last_updated_timestamp: "2024-11-10 10:15:32.654321+00",
        creator_id: "earth",
        last_op_id: "earth",
        option: [
          {
            id: "b8f9d2a7-6e7c-4f5b-9a3d-e8f7c6d2b4e9",
            type: "color",
            name: "Black",
            create_timestamp: "2024-11-10 10:15:32.654321+00",
            last_updated_timestamp: "2024-11-10 10:15:32.654321+00",
            creator_id: "earth",
            last_op_id: "earth",
          },
          {
            id: "c3d9e6b5-2f7a-4c6b-8e1f-f4a3b9d6e2a1",
            type: "size",
            name: "Large",
            create_timestamp: "2024-11-10 10:15:32.654321+00",
            last_updated_timestamp: "2024-11-10 10:15:32.654321+00",
            creator_id: "earth",
            last_op_id: "earth",
          },
        ],
      },
    ],
    create_timestamp: "2024-11-10 10:15:32.654321+00",
    last_updated_timestamp: "2024-11-10 10:15:32.654321+00",
    creator_id: "earth",
    last_op_id: "earth",
  },
  {
    id: "e60d06ca-25c2-4d7d-b8f2-4210becc8f07",
    sku: "T003",
    brand_id: "-",
    category_id: "-",
    gender_id: "-",
    name: "365 Heavyweight Track Pants",
    price: 175,
    description:
      "STEP INTO COMFORT WITH THE PANGAIA 365 HEAVYWEIGHT TRACK PANTS. MADE FROM 420 GSM HEAVYWEIGHT COTTON AND TREATED WITH PPRMNT™ FOR ANTI-ODOR PROPERTIES, HELPING KEEP YOUR TRACK PANTS FRESHER FOR LONGER, THESE TRACK PANTS BRING A WHOLE NEW LEVEL OF FRESHNESS AND SOFTNESS TO YOUR EVERYDAY WEAR.",
    product_choice: [
      {
        id: "e4d8b6c3-7f9a-4b5e-9c3d-f1e2d6a8b7c4",
        sku: "T003-B-M",
        product_id: "e60d06ca-25c2-4d7d-b8f2-4210becc8f07",
        quantity: 12,
        create_timestamp: "2024-11-10 10:20:45.987654+00",
        last_updated_timestamp: "2024-11-10 10:20:45.987654+00",
        creator_id: "earth",
        last_op_id: "earth",
        option: [
          {
            id: "d3f8b6c9-4e7b-4f2c-9d3a-b5f7c6d8e4a1",
            type: "color",
            name: "Black",
            create_timestamp: "2024-11-10 10:20:45.987654+00",
            last_updated_timestamp: "2024-11-10 10:20:45.987654+00",
            creator_id: "earth",
            last_op_id: "earth",
          },
          {
            id: "a4e7f6d5-3c8b-4d6a-8e9c-f7d2b6e4c9a2",
            type: "size",
            name: "Medium",
            create_timestamp: "2024-11-10 10:20:45.987654+00",
            last_updated_timestamp: "2024-11-10 10:20:45.987654+00",
            creator_id: "earth",
            last_op_id: "earth",
          },
        ],
      },
    ],
    create_timestamp: "2024-11-10 10:20:45.987654+00",
    last_updated_timestamp: "2024-11-10 10:20:45.987654+00",
    creator_id: "earth",
    last_op_id: "earth",
  },
  {
    id: "b1c6df09-4e9e-47c2-a5d4-7588e8f2c510",
    sku: "T004",
    brand_id: "-",
    category_id: "-",
    gender_id: "-",
    name: "365 Midweight T-shirt",
    price: 70,
    description:
      "BRIGHTEN UP YOUR LITTLE ONE’S WARDROBE WITH THE PANGAIA KIDS 365 MIDWEIGHT T-SHIRT IN BLACK. MADE FROM 100% ORGANIC COTTON AND TREATED WITH PPRMINT™ FOR LASTING FRESHNESS, THIS T-SHIRT IS DESIGNED FOR COMFORT AND DURABILITY.",
    product_choice: [
      {
        id: "c9d8b6f7-4a5e-4d7b-8a3c-d5f7b8e2c9a3",
        sku: "T004-B-M",
        product_id: "b1c6df09-4e9e-47c2-a5d4-7588e8f2c510",
        quantity: 100,
        create_timestamp: "2024-11-10 10:25:33.654321+00",
        last_updated_timestamp: "2024-11-10 10:25:33.654321+00",
        creator_id: "earth",
        last_op_id: "earth",
        option: [
          {
            id: "f3b8d7e4-9a6b-4d3c-8e5f-b6a2d5f8c7a1",
            type: "color",
            name: "Black",
            create_timestamp: "2024-11-10 10:25:33.654321+00",
            last_updated_timestamp: "2024-11-10 10:25:33.654321+00",
            creator_id: "earth",
            last_op_id: "earth",
          },
          {
            id: "a5d9c8b6-3f7a-4e1b-9c2d-f8e7b5c3d6a4",
            type: "size",
            name: "Medium",
            create_timestamp: "2024-11-10 10:25:33.654321+00",
            last_updated_timestamp: "2024-11-10 10:25:33.654321+00",
            creator_id: "earth",
            last_op_id: "earth",
          },
        ],
      },
    ],
    create_timestamp: "2024-11-10 10:25:33.654321+00",
    last_updated_timestamp: "2024-11-10 10:25:33.654321+00",
    creator_id: "earth",
    last_op_id: "earth",
  },
  {
    id: "74c2a8d5-48fd-4ca1-a2b1-f320545dfd56",
    sku: "T005",
    brand_id: "-",
    category_id: "-",
    gender_id: "-",
    name: "Recycled Cashmere Track Pants",
    price: 285,
    description:
      "STEP INTO COMFORT WITH THE PANGAIA RECYCLED CASHMERE PANTS. MADE FROM A BLEND OF RECYCLED CASHMERE, THESE PANTS OFFER THE PERFECT COMBINATION OF SOFTNESS, WARMTH, AND DURABLENESS FOR LOUNGING OR CASUAL WEAR.",
    product_choice: [
      {
        id: "d8b9e3c4-7f9a-4d6b-9c3e-f2b5d8c6e1a7",
        sku: "T005-G-L",
        product_id: "74c2a8d5-48fd-4ca1-a2b1-f320545dfd56",
        quantity: 120,
        create_timestamp: "2024-11-10 10:30:10.987654+00",
        last_updated_timestamp: "2024-11-10 10:30:10.987654+00",
        creator_id: "earth",
        last_op_id: "earth",
        option: [
          {
            id: "e2d9c7a5-6f4b-8c3d-9a6f-f7c5b8d2e4a1",
            type: "color",
            name: "Grey",
            create_timestamp: "2024-11-10 10:30:10.987654+00",
            last_updated_timestamp: "2024-11-10 10:30:10.987654+00",
            creator_id: "earth",
            last_op_id: "earth",
          },
          {
            id: "a3f6d5c8-9b7e-4c3d-8a5f-d9c7e5b2f8a4",
            type: "size",
            name: "Large",
            create_timestamp: "2024-11-10 10:30:10.987654+00",
            last_updated_timestamp: "2024-11-10 10:30:10.987654+00",
            creator_id: "earth",
            last_op_id: "earth",
          },
        ],
      },
    ],
    create_timestamp: "2024-11-10 10:30:10.987654+00",
    last_updated_timestamp: "2024-11-10 10:30:10.987654+00",
    creator_id: "earth",
    last_op_id: "earth",
  },
  {
    id: "6825d26f-4050-4e9e-bc7f-b506ebd78463",
    sku: "T006",
    brand_id: "-",
    category_id: "-",
    gender_id: "-",
    name: "DNA Heavyweight Polo Sweatshirt",
    price: 225,
    description:
      "ELEVATE YOUR CASUAL WARDROBE WITH THE PANGAIA DNA POLO NECK SWEATSHIRT IN BROWN. THIS SWEATSHIRT COMBINES THE COMFORT OF A RELAXED FIT WITH THE SOPHISTICATION OF A POLO NECK, MAKING IT A VERSATILE PIECE FOR ANY OCCASION.",
    product_choice: [
      {
        id: "b6d7f5c9-4e3b-8a1c-9f5d-e7c2b4a6d8f1",
        sku: "T006-BR-XL",
        product_id: "6825d26f-4050-4e9e-bc7f-b506ebd78463",
        quantity: 2,
        create_timestamp: "2024-11-10 10:35:50.321654+00",
        last_updated_timestamp: "2024-11-10 10:35:50.321654+00",
        creator_id: "earth",
        last_op_id: "earth",
        option: [
          {
            id: "c5f8a4d7-9b6e-4a3d-8c2b-f7d9e6b3c8a1",
            type: "color",
            name: "Brown",
            create_timestamp: "2024-11-10 10:35:50.321654+00",
            last_updated_timestamp: "2024-11-10 10:35:50.321654+00",
            creator_id: "earth",
            last_op_id: "earth",
          },
          {
            id: "d2e9b5f7-4c8a-3d9e-8a5f-b4c7e8d2f5a1",
            type: "size",
            name: "Extra Large",
            create_timestamp: "2024-11-10 10:35:50.321654+00",
            last_updated_timestamp: "2024-11-10 10:35:50.321654+00",
            creator_id: "earth",
            last_op_id: "earth",
          },
        ],
      },
    ],
    create_timestamp: "2024-11-10 10:35:50.321654+00",
    last_updated_timestamp: "2024-11-10 10:35:50.321654+00",
    creator_id: "earth",
    last_op_id: "earth",
  },
  {
    id: "d2ae5f29-3f42-4882-a5b2-71f5ac9935fe",
    sku: "T007",
    brand_id: "-",
    category_id: "-",
    gender_id: "-",
    name: "Flower-Warmth Padded Overshirt",
    price: 395,
    description:
      "THIS PADDED OVERSHIRT IS MADE WITH FLWRFILL™, A BREAKTHROUGH WADDING CREATED USING WILDFLOWERS, LYOCELL AND A BIOPOLYMER. THE OUTER SHELL IS 100% RECYCLED NYLON. DEVELOPED IN COLLABORATION WITH IMBOTEX, FLWRFILL™ OFFERS A PLANT-BASED ALTERNATIVE TO GOOSE AND DUCK DOWN—RESULTING IN A WARM AND MORE LIGHTWEIGHT OUTERWEAR STAPLE.",
    product_choice: [
      {
        id: "e5d9a6b4-8f3c-4a9d-8b7f-d2e4c6f5a8d9",
        sku: "T007-GR-L",
        product_id: "d2ae5f29-3f42-4882-a5b2-71f5ac9935fe",
        quantity: 2,
        create_timestamp: "2024-11-10 10:40:12.987654+00",
        last_updated_timestamp: "2024-11-10 10:40:12.987654+00",
        creator_id: "earth",
        last_op_id: "earth",
        option: [
          {
            id: "f4d8e6b7-2a9c-4d8e-9c5f-b7a3e6d5c9a1",
            type: "color",
            name: "Green",
            create_timestamp: "2024-11-10 10:40:12.987654+00",
            last_updated_timestamp: "2024-11-10 10:40:12.987654+00",
            creator_id: "earth",
            last_op_id: "earth",
          },
          {
            id: "c2a5d9b6-3e8f-4c2b-9d7e-f8d3b7a5e6c4",
            type: "size",
            name: "Large",
            create_timestamp: "2024-11-10 10:40:12.987654+00",
            last_updated_timestamp: "2024-11-10 10:40:12.987654+00",
            creator_id: "earth",
            last_op_id: "earth",
          },
        ],
      },
    ],
    create_timestamp: "2024-11-10 10:40:12.987654+00",
    last_updated_timestamp: "2024-11-10 10:40:12.987654+00",
    creator_id: "earth",
    last_op_id: "earth",
  },
  {
    id: "7fc080b4-31e5-4c6a-bcc3-d1e6934364d0",
    sku: "T008",
    brand_id: "-",
    category_id: "-",
    gender_id: "-",
    name: "DNA Recycled Cashmere Zip Up Sweater",
    price: 395,
    description:
      "THIS PADDED OVERSHIRT IS MADE WITH FLWRFILL™, A BREAKTHROUGH WADDING CREATED USING WILDFLOWERS, LYOCELL AND A BIOPOLYMER. THE OUTER SHELL IS 100% RECYCLED NYLON. DEVELOPED IN COLLABORATION WITH IMBOTEX, FLWRFILL™ OFFERS A PLANT-BASED ALTERNATIVE TO GOOSE AND DUCK DOWN—RESULTING IN A WARM AND MORE LIGHTWEIGHT OUTERWEAR STAPLE.",
    product_choice: [
      {
        id: "f9b3d8e6-4f7a-3d9e-8b5f-c6a7e4f8b9a1",
        sku: "T008-GR-M",
        product_id: "7fc080b4-31e5-4c6a-bcc3-d1e6934364d0",
        quantity: 5,
        create_timestamp: "2024-11-10 10:45:15.654321+00",
        last_updated_timestamp: "2024-11-10 10:45:15.654321+00",
        creator_id: "earth",
        last_op_id: "earth",
        option: [
          {
            id: "e9d8c7a5-4b3e-9d2c-8f7a-b6c5d9e7a3a2",
            type: "color",
            name: "Green",
            create_timestamp: "2024-11-10 10:45:15.654321+00",
            last_updated_timestamp: "2024-11-10 10:45:15.654321+00",
            creator_id: "earth",
            last_op_id: "earth",
          },
          {
            id: "c7a5d8f3-2e4b-6c9d-8f5a-d9c3b7a5e4f6",
            type: "size",
            name: "Medium",
            create_timestamp: "2024-11-10 10:45:15.654321+00",
            last_updated_timestamp: "2024-11-10 10:45:15.654321+00",
            creator_id: "earth",
            last_op_id: "earth",
          },
        ],
      },
    ],
    create_timestamp: "2024-11-10 10:45:15.654321+00",
    last_updated_timestamp: "2024-11-10 10:45:15.654321+00",
    creator_id: "earth",
    last_op_id: "earth",
  },
];
