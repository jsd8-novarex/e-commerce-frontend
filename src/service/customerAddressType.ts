export interface CustomerAddress {
  _id: string;
  customer_id: string;
  postal_code: string;
  province: string;
  district: string;
  subdistrict: string;
  address: string;
  creator_id: string;
  last_op_id: string;
  create_timestamp: string;
  last_update_timestamp: string;
}

export interface Address {
  province: string;
  district: string;
  subdistrict: string;
  address: string;
  postal_code: string;
}
