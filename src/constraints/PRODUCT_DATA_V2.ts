export interface DefaultColumnType {
  create_timestamp: string;
  last_updated_timestamp: string;
  creator_id: string;
  last_op_id: string;
  tram_status: boolean;
}

export interface ProductDataType extends DefaultColumnType {
  id: string;
  brand_id: string;
  category_id: string;
  gender_id: string;
  name: string;
  description: string;
  product_choice: ProductChoiceType[];
};

export interface ProductChoiceType extends DefaultColumnType {
  id: string;
  product_id: string;
  sku: string;
  size: string;
  color: string;
  price: number;
  quantity: number;
};

export interface SizeDataType extends DefaultColumnType {
  id: string;
  name: string;
};

export interface ColorDataType extends DefaultColumnType {
  id: string;
  name: string;
};

export const product_list: ProductDataType[] = [
  {
    id: "ad599766-362e-480f-a1d6-23830980307f",
    brand_id: "-",
    category_id: "-",
    gender_id: "-",
    name: "Recycled Cashmere Cardigan",
    description:
      "WRAP YOURSELF IN WARMTH WITH THE PANGAIA RECYCLED CASHMERE CARDIGAN. MADE FROM A LUXURIOUS BLEND OF RECYCLED CASHMERE, THIS CARDIGAN OFFERS SOFTNESS AND DURABLENESS IN ONE ELEGANT PIECE.",
    product_choice: [
      {
        id: "c1b9f124-45d4-4c8f-983d-2093dbe1d957",
        product_id: "ad599766-362e-480f-a1d6-23830980307f",
        sku: "T001-Oatmeal-M",
        size: "Medium",
        color: "Oatmeal",
        price: 275,
        quantity: 10,
        create_timestamp: "2024-11-10 09:45:22.123456+00",
        last_updated_timestamp: "2024-11-10 09:45:22.123456+00",
        creator_id: "earth",
        last_op_id: "earth",
        tram_status: false,
      },
    ],
    create_timestamp: "2024-11-10 09:45:22.123456+00",
    last_updated_timestamp: "2024-11-10 09:45:22.123456+00",
    creator_id: "earth",
    last_op_id: "earth",
    tram_status: false,
  },
  {
    id: "a5c3c271-76b0-47b9-b5e2-78a5060b7062",
    brand_id: "-",
    category_id: "-",
    gender_id: "-",
    name: "365 Heavyweight Hoodie",
    description:
      "THE PANGAIA 365 HEAVYWEIGHT HOODIE IN BLACK IS MADE FROM 50% ORGANIC COTTON AND 50% RECYCLED COTTON. TREATED WITH PPRMNT™ FOR ANTI-ODOR PROPERTIES, HELPING KEEP YOUR HOODIE FRESHER FOR LONGER. THE HEAVYWEIGHT FABRIC AND BRUSHED INTERIOR PROVIDE A STRUCTURED SHAPE AND SOFT FEEL. THIS GENDERLESS HOODIE PROVIDES WARMTH AND DURABLE COMFORT FOR YEAR-ROUND WEAR.",
    product_choice: [
      {
        id: "f6a7c4d2-8f9e-4d6b-8a5d-32a0e3d1b4c6",
        product_id: "ad599766-362e-480f-a1d6-23830980307f",
        sku: "T002-B-L",
        size: "Large",
        color: "Black",
        price: 185,
        quantity: 10,
        create_timestamp: "2024-11-10 09:45:22.123456+00",
        last_updated_timestamp: "2024-11-10 09:45:22.123456+00",
        creator_id: "earth",
        last_op_id: "earth",
        tram_status: false,
      },
    ],
    create_timestamp: "2024-11-10 09:45:22.123456+00",
    last_updated_timestamp: "2024-11-10 09:45:22.123456+00",
    creator_id: "earth",
    last_op_id: "earth",
    tram_status: false,
  },
  {
    id: "e60d06ca-25c2-4d7d-b8f2-4210becc8f07",
    brand_id: "-",
    category_id: "-",
    gender_id: "-",
    name: "365 Heavyweight Track Pants",
    description:
      "STEP INTO COMFORT WITH THE PANGAIA 365 HEAVYWEIGHT TRACK PANTS. MADE FROM 420 GSM HEAVYWEIGHT COTTON AND TREATED WITH PPRMNT™ FOR ANTI-ODOR PROPERTIES, HELPING KEEP YOUR TRACK PANTS FRESHER FOR LONGER, THESE TRACK PANTS BRING A WHOLE NEW LEVEL OF FRESHNESS AND SOFTNESS TO YOUR EVERYDAY WEAR.",
    product_choice: [
      {
        id: "e4d8b6c3-7f9a-4b5e-9c3d-f1e2d6a8b7c4",
        product_id: "ad599766-362e-480f-a1d6-23830980307f",
        sku: "T003-B-M",
        size: "Medium",
        color: "Black",
        price: 175,
        quantity: 12,
        create_timestamp: "2024-11-10 09:45:22.123456+00",
        last_updated_timestamp: "2024-11-10 09:45:22.123456+00",
        creator_id: "earth",
        last_op_id: "earth",
        tram_status: false,
      },
    ],
    create_timestamp: "2024-11-10 09:45:22.123456+00",
    last_updated_timestamp: "2024-11-10 09:45:22.123456+00",
    creator_id: "earth",
    last_op_id: "earth",
    tram_status: false,
  },
  {
    id: "b1c6df09-4e9e-47c2-a5d4-7588e8f2c510",
    brand_id: "-",
    category_id: "-",
    gender_id: "-",
    name: "365 Midweight T-shirt",
    description:
      "BRIGHTEN UP YOUR LITTLE ONE’S WARDROBE WITH THE PANGAIA KIDS 365 MIDWEIGHT T-SHIRT IN BLACK. MADE FROM 100% ORGANIC COTTON AND TREATED WITH PPRMINT™ FOR LASTING FRESHNESS, THIS T-SHIRT IS DESIGNED FOR COMFORT AND DURABILITY.",
    product_choice: [
      {
        id: "c9d8b6f7-4a5e-4d7b-8a3c-d5f7b8e2c9a3",
        product_id: "ad599766-362e-480f-a1d6-23830980307f",
        sku: "T004-B-M",
        size: "Medium",
        color: "Black",
        price: 70,
        quantity: 100,
        create_timestamp: "2024-11-10 09:45:22.123456+00",
        last_updated_timestamp: "2024-11-10 09:45:22.123456+00",
        creator_id: "earth",
        last_op_id: "earth",
        tram_status: false,
      },
    ],
    create_timestamp: "2024-11-10 09:45:22.123456+00",
    last_updated_timestamp: "2024-11-10 09:45:22.123456+00",
    creator_id: "earth",
    last_op_id: "earth",
    tram_status: false,
  },
  {
    id: "74c2a8d5-48fd-4ca1-a2b1-f320545dfd56",
    brand_id: "-",
    category_id: "-",
    gender_id: "-",
    name: "Recycled Cashmere Track Pants",
    description:
      "STEP INTO COMFORT WITH THE PANGAIA RECYCLED CASHMERE PANTS. MADE FROM A BLEND OF RECYCLED CASHMERE, THESE PANTS OFFER THE PERFECT COMBINATION OF SOFTNESS, WARMTH, AND DURABLENESS FOR LOUNGING OR CASUAL WEAR.",
    product_choice: [
      {
        id: "d8b9e3c4-7f9a-4d6b-9c3e-f2b5d8c6e1a7",
        product_id: "ad599766-362e-480f-a1d6-23830980307f",
        sku: "T005-G-L",
        size: "Medium",
        color: "Black",
        price: 285,
        quantity: 120,
        create_timestamp: "2024-11-10 09:45:22.123456+00",
        last_updated_timestamp: "2024-11-10 09:45:22.123456+00",
        creator_id: "earth",
        last_op_id: "earth",
        tram_status: false,
      },
    ],
    create_timestamp: "2024-11-10 09:45:22.123456+00",
    last_updated_timestamp: "2024-11-10 09:45:22.123456+00",
    creator_id: "earth",
    last_op_id: "earth",
    tram_status: false,
  },
  {
    id: "6825d26f-4050-4e9e-bc7f-b506ebd78463",
    brand_id: "-",
    category_id: "-",
    gender_id: "-",
    name: "DNA Heavyweight Polo Sweatshirt",
    description:
      "ELEVATE YOUR CASUAL WARDROBE WITH THE PANGAIA DNA POLO NECK SWEATSHIRT IN BROWN. THIS SWEATSHIRT COMBINES THE COMFORT OF A RELAXED FIT WITH THE SOPHISTICATION OF A POLO NECK, MAKING IT A VERSATILE PIECE FOR ANY OCCASION.",
    product_choice: [
      {
        id: "b6d7f5c9-4e3b-8a1c-9f5d-e7c2b4a6d8f1",
        product_id: "ad599766-362e-480f-a1d6-23830980307f",
        sku: "T006-BR-XL",
        size: "Extra Large",
        color: "Brown",
        price: 225,
        quantity: 2,
        create_timestamp: "2024-11-10 09:45:22.123456+00",
        last_updated_timestamp: "2024-11-10 09:45:22.123456+00",
        creator_id: "earth",
        last_op_id: "earth",
        tram_status: false,
      },
    ],
    create_timestamp: "2024-11-10 09:45:22.123456+00",
    last_updated_timestamp: "2024-11-10 09:45:22.123456+00",
    creator_id: "earth",
    last_op_id: "earth",
    tram_status: false,
  },
  {
    id: "d2ae5f29-3f42-4882-a5b2-71f5ac9935fe",
    brand_id: "-",
    category_id: "-",
    gender_id: "-",
    name: "Flower-Warmth Padded Overshirt",
    description:
      "THIS PADDED OVERSHIRT IS MADE WITH FLWRFILL™, A BREAKTHROUGH WADDING CREATED USING WILDFLOWERS, LYOCELL AND A BIOPOLYMER. THE OUTER SHELL IS 100% RECYCLED NYLON. DEVELOPED IN COLLABORATION WITH IMBOTEX, FLWRFILL™ OFFERS A PLANT-BASED ALTERNATIVE TO GOOSE AND DUCK DOWN—RESULTING IN A WARM AND MORE LIGHTWEIGHT OUTERWEAR STAPLE.",
    product_choice: [
      {
        id: "e5d9a6b4-8f3c-4a9d-8b7f-d2e4c6f5a8d9",
        product_id: "ad599766-362e-480f-a1d6-23830980307f",
        sku: "T007-B-L",
        size: "Large",
        color: "Black",
        price: 395,
        quantity: 2,
        create_timestamp: "2024-11-10 09:45:22.123456+00",
        last_updated_timestamp: "2024-11-10 09:45:22.123456+00",
        creator_id: "earth",
        last_op_id: "earth",
        tram_status: false,
      },
    ],
    create_timestamp: "2024-11-10 09:45:22.123456+00",
    last_updated_timestamp: "2024-11-10 09:45:22.123456+00",
    creator_id: "earth",
    last_op_id: "earth",
    tram_status: false,
  },
  {
    id: "7fc080b4-31e5-4c6a-bcc3-d1e6934364d0",
    brand_id: "-",
    category_id: "-",
    gender_id: "-",
    name: "DNA Recycled Cashmere Zip Up Sweater",
    description:
      "THIS PADDED OVERSHIRT IS MADE WITH FLWRFILL™, A BREAKTHROUGH WADDING CREATED USING WILDFLOWERS, LYOCELL AND A BIOPOLYMER. THE OUTER SHELL IS 100% RECYCLED NYLON. DEVELOPED IN COLLABORATION WITH IMBOTEX, FLWRFILL™ OFFERS A PLANT-BASED ALTERNATIVE TO GOOSE AND DUCK DOWN—RESULTING IN A WARM AND MORE LIGHTWEIGHT OUTERWEAR STAPLE.",
    product_choice: [
      {
        id: "f9b3d8e6-4f7a-3d9e-8b5f-c6a7e4f8b9a1",
        product_id: "ad599766-362e-480f-a1d6-23830980307f",
        sku: "T008-Ecru Ivory-M",
        size: "Medium",
        color: "Ecru Ivory",
        price: 395,
        quantity: 5,
        create_timestamp: "2024-11-10 09:45:22.123456+00",
        last_updated_timestamp: "2024-11-10 09:45:22.123456+00",
        creator_id: "earth",
        last_op_id: "earth",
        tram_status: false,
      },
    ],
    create_timestamp: "2024-11-10 09:45:22.123456+00",
    last_updated_timestamp: "2024-11-10 09:45:22.123456+00",
    creator_id: "earth",
    last_op_id: "earth",
    tram_status: false,
  },
];
