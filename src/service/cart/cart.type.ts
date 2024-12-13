export interface ItemToCartPropsType {
  customerId: string;
  productChoiceId: string;
  quantity: number;
}

export interface CartReturnMessageType {
  success: boolean;
  message: string;
}

export interface CartType {
  success: boolean;
  cart: CartDataType;
}

export interface CartDataType {
  _id: string;
  customer_id: string;
  status: string;
  payment_method: string;
  payment_status: string;
  payment_timestamp: null;
  total_price: number;
  create_timestamp: Date;
  last_updated_timestamp: Date;
  creator_id: string;
  last_op_id: string;
  tram_status: boolean;
  cart_item: CartItemType[];
}

export interface CartItemType {
  id: string;
  product_choice_id: string;
  quantity: number;
  color: string;
  size: string;
  price: number;
  image_url: string;
  product_name: string;
}
