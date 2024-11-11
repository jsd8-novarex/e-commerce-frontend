export type ProfileDataType = {
    uuid: string;
    name: string;
    email: string;
    address: {
      address: string;
      subdistrict: string;
      district: string;
      province: string;
      postal_code: string;
    };
    tel:string;
    dob:string;
    timestamp: string;
    creator_id: string;
    last_op_id: string;
  };
  

 export const profileData: ProfileDataType = {
    uuid: "123456",
    name: "a",
    email:"a@gmail.com",
    address: {
      address: "11/1 Sansuk Village, Soi Phatthana, Sawasdee Road,",
      subdistrict: "Sukjai",
      district: "Jamsai",
      province: "Bangkok",
      postal_code: "12345",
    },
    tel:"0123456789",
    dob:"Jan 1, 0001",
    timestamp: new Date().toISOString(),
    creator_id: "123456",
    last_op_id: "123456",
  };