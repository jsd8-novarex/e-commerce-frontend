export interface ProductType {
  status: string;
  products: ProductDataType[];
}

export interface ProductDataType {
  _id: string;
  name: string;
  brand: string;
  category: string;
  gender: string;
  description: string;
  product_choices: ProductChoiceType[];
  create_timestamp: Date;
  last_updated_timestamp: Date;
  creator_id: string;
  last_op_id: string;
  tram_status: boolean;
}

export interface ProductChoiceType {
  _id: string;
  color: string;
  size: string;
  price: number;
  sku: string;
  quantity: number;
  images: ProductImageType[];
}

export interface ProductImageType {
  url: string;
  index: number;
}
