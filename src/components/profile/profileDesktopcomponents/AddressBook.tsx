// import React from "react";
// import EditButton from "../../button/EditButton";
// import { profileData } from "../../../constraints/PROFILE_DATA";
// function AddressBook() {
//   return (
//     <>
//       <div className='h-[400px] bg-[#fdfaf5] p-8 shadow-md md:w-[540px] lg:w-[700px] xl:w-[900px]'>
//         <div className='mb-6 flex items-center justify-between'>
//           <h2 className='text-xl font-semibold text-gray-800'>Address book</h2>
//         </div>

//         <hr className='mb-6' />

//         <div>
//           <div className='w-full'>
//             <p className='mb-8 text-gray-600'>
//               <strong>Add,delete or change your addresses here.</strong>
//             </p>
//             <div className='flex justify-between border p-4'>
//               <div>
//                 <p>{profileData.name}</p>
//                 <p className='text-gray-600'>{profileData.email}</p>
//                 <p className='text-gray-600'>{profileData.tel}</p>
//               </div>
//               <div>
//                 <EditButton />
//               </div>
//             </div>
//           </div>
//           <div className='my-4 flex justify-center'>
//             <button className='btn btn-wide rounded-none bg-[#fdfaf5]'>Add an address</button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default AddressBook;
// import React, { useEffect, useState } from "react";
// import EditButton from "../../button/EditButton";
// import { useCustomerProfile } from "../../../hook/customers/useCustomerHooks";
// import customerAddressService from "../../../service/customerAddressService";

// function AddressBook() {
//   const [isEditing, setIsEditing] = useState(false);
//   const [provinces, setProvinces] = useState([]);
//   const [amphures, setAmphures] = useState([]);
//   const [tambons, setTambons] = useState([]);
//   const [addresses, setAddresses] = useState([]); // State to store customer addresses
//   const [selected, setSelected] = useState({
//     province_id: undefined,
//     amphure_id: undefined,
//     tambon_id: undefined,
//     address: "",
//     postalCode: "",
//   });
//   const { customer, error: fetchError } = useCustomerProfile();

//   useEffect(() => {
//     fetch(
//       "https://raw.githubusercontent.com/kongvut/thai-province-data/master/api_province_with_amphure_tambon.json",
//     )
//       .then((response) => response.json())
//       .then((result) => {
//         // Map province, amphure, and tambon data to ensure IDs are correctly set
//         const mappedProvinces = result.map((province) => ({
//           id: province.id || province.province_id, // Use `id` or fallback to `province_id`
//           name_th: province.name_th,
//           name_en: province.name_en,
//           amphure: province.amphure.map((amphure) => ({
//             id: amphure.id || amphure.amphure_id,
//             name_th: amphure.name_th,
//             name_en: amphure.name_en,
//             tambon: amphure.tambon.map((tambon) => ({
//               id: tambon.id || tambon.tambon_id,
//               name_th: tambon.name_th,
//               name_en: tambon.name_en,
//             })),
//           })),
//         }));

//         setProvinces(mappedProvinces);
//       })
//       .catch((error) => console.error("Failed to fetch provinces:", error));
//   }, []);

//   useEffect(() => {
//     // Fetch customer addresses using customer ID
//     if (customer?._id) {
//       customerAddressService.getAddressesByCustomerId(customer._id).then(([data, error]) => {
//         if (error) {
//           console.error("Failed to fetch customer addresses:", error);
//         } else {
//           setAddresses(data);
//         }
//       });
//     }
//   }, [customer]);

//   const DropdownList = ({ label, id, list, child, childsId = [], setChilds = [] }) => {
//     const onChangeHandle = (event) => {
//       setChilds.forEach((setChild) => setChild([]));
//       const entries = childsId.map((child) => [child, undefined]);
//       const unSelectChilds = Object.fromEntries(entries);

//       const input = event.target.value;
//       const dependId = input ? Number(input) : undefined;
//       setSelected((prev) => ({ ...prev, ...unSelectChilds, [id]: dependId }));

//       if (!input) return;

//       if (child) {
//         const parent = list.find((item) => item.id === dependId);
//         const { [child]: childs } = parent;
//         const [setChild] = setChilds;
//         setChild(childs);
//       }
//     };

//     return (
//       <>
//         <label htmlFor={label}>{label}</label>
//         <select value={selected[id]} onChange={onChangeHandle}>
//           <option label='Select ...' />
//           {list &&
//             list.map((item) => (
//               <option key={item.id} value={item.id} label={`${item.name_th} - ${item.name_en}`} />
//             ))}
//         </select>
//       </>
//     );
//   };

//   const handleEditToggle = () => setIsEditing((prev) => !prev);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setSelected((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSave = async () => {
//     if (!customer?._id) return;

//     const { province_id, amphure_id, tambon_id, address, postalCode } = selected;
//     const addressData = {
//       province_id,
//       amphure_id,
//       tambon_id,
//       address,
//       postalCode,
//     };

//     const [updatedAddress, error] = await customerAddressService.updateAddress({
//       customer_id: customer._id,
//       data: addressData,
//     });

//     if (error) {
//       console.error("Failed to update address:", error);
//     } else {
//       console.log("Updated Address:", updatedAddress);

//       // Fetch updated addresses
//       try {
//         const [data, fetchError] = await customerAddressService.getAddressesByCustomerId(
//           customer._id,
//         );
//         if (fetchError) {
//           console.error("Failed to fetch updated addresses:", fetchError);
//         } else {
//           setAddresses(data); // Update the addresses state with the latest data
//           console.log("Addresses updated:", data);
//         }
//       } catch (e) {
//         console.error("Error fetching updated addresses:", e);
//       }

//       setIsEditing(false); // Close the editing state
//     }
//   };

//   return (
//     <div className='h-[400px] bg-[#fdfaf5] p-8 shadow-md md:w-[540px] lg:w-[700px] xl:w-[900px]'>
//       <div className='mb-6 flex items-center justify-between'>
//         <h2 className='text-xl font-semibold text-gray-800'>Address book</h2>
//       </div>
//       <hr className='mb-6' />
//       {isEditing ? (
//         <div className='p-4'>
//           <DropdownList
//             label='Province: '
//             id='province_id'
//             list={provinces}
//             child='amphure'
//             childsId={["amphure_id", "tambon_id"]}
//             setChilds={[setAmphures, setTambons]}
//           />
//           <br />
//           <DropdownList
//             label='District: '
//             id='amphure_id'
//             list={amphures}
//             child='tambon'
//             childsId={["tambon_id"]}
//             setChilds={[setTambons]}
//           />
//           <br />
//           <DropdownList label='Sub-district: ' id='tambon_id' list={tambons} />
//           <br />
//           <label>Address:</label>
//           <input
//             type='text'
//             name='address'
//             value={selected.address}
//             onChange={handleInputChange}
//             className='w-full border p-2'
//           />
//           <br />
//           <label>Postal Code:</label>
//           <input
//             type='text'
//             name='postalCode'
//             value={selected.postalCode}
//             onChange={handleInputChange}
//             className='w-full border p-2'
//           />
//           <br />
//           <button onClick={handleSave} className='btn btn-primary mt-4'>
//             Save
//           </button>
//         </div>
//       ) : (
//         <div>
//           <p>{customer?.name}</p>
//           <p className='text-gray-600'>{customer?.email}</p>
//           <p className='text-gray-600'>{customer?.mobile_phone}</p>
//           <div className='text-gray-600'>
//             <h3>Addresses:</h3>
//             {addresses.length > 0 ? (
//               <p>
//                 {addresses
//                   .map(
//                     (addr) =>
//                       `${addr.address}, ${addr.subdistrict}, ${addr.district}, ${addr.province} ${addr.postal_code}`,
//                   )
//                   .join(" | ")}
//               </p>
//             ) : (
//               <p>No address available.</p>
//             )}
//           </div>

//           <EditButton onClick={handleEditToggle} />
//         </div>
//       )}
//     </div>
//   );
// }

// export default AddressBook;

// import React, { useEffect, useState } from "react";
// import EditButton from "../../button/EditButton";
// import { useCustomerProfile } from "../../../hook/customers/useCustomerHooks";
// import customerAddressService from "../../../service/customerAddressService";

// function AddressBook() {
//   const [isEditing, setIsEditing] = useState(false);
//   const [address, setAddress] = useState({
//     province: "",
//     district: "",
//     subdistrict: "",
//     address: "",
//     postalCode: "",
//   }); // State to store the customer's address
//   const { customer, error: fetchError } = useCustomerProfile();

//   useEffect(() => {
//     // Fetch the customer's address using their ID
//     if (customer?._id) {
//       customerAddressService.getAddressesByCustomerId(customer._id).then(([data, error]) => {
//         if (error) {
//           console.error("Failed to fetch customer address:", error);
//         } else if (data && data.length > 0) {
//           setAddress({
//             province: data[0].province || "",
//             district: data[0].district || "",
//             subdistrict: data[0].subdistrict || "",
//             address: data[0].address || "",
//             postalCode: data[0].postal_code || "",
//           });
//         }
//       });
//     }
//   }, [customer]);

//   const handleEditToggle = () => setIsEditing((prev) => !prev);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setAddress((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSave = async () => {
//     if (!customer?._id) return;

//     const { province, district, subdistrict, address: addr, postalCode } = address;
//     const addressData = {
//       province,
//       district,
//       subdistrict,
//       address: addr,
//       postalCode,
//     };

//     const [updatedAddress, error] = await customerAddressService.updateAddress({
//       customer_id: customer._id,
//       data: addressData,
//     });

//     if (error) {
//       console.error("Failed to update address:", error);
//     } else {
//       console.log("Updated Address:", updatedAddress);
//       setIsEditing(false); // Close the editing state
//     }
//   };

//   return (
//     <div className='h-[400px] bg-[#fdfaf5] p-8 shadow-md md:w-[540px] lg:w-[700px] xl:w-[900px]'>
//       <div className='mb-6 flex items-center justify-between'>
//         <h2 className='text-xl font-semibold text-gray-800'>Address book</h2>
//       </div>
//       <hr className='mb-6' />
//       {isEditing ? (
//         <div className='p-4'>
//           <label>Province:</label>
//           <input
//             type='text'
//             name='province'
//             value={address.province}
//             onChange={handleInputChange}
//             className='w-full border p-2'
//           />
//           <br />
//           <label>District:</label>
//           <input
//             type='text'
//             name='district'
//             value={address.district}
//             onChange={handleInputChange}
//             className='w-full border p-2'
//           />
//           <br />
//           <label>Sub-district:</label>
//           <input
//             type='text'
//             name='subdistrict'
//             value={address.subdistrict}
//             onChange={handleInputChange}
//             className='w-full border p-2'
//           />
//           <br />
//           <label>Address:</label>
//           <input
//             type='text'
//             name='address'
//             value={address.address}
//             onChange={handleInputChange}
//             className='w-full border p-2'
//           />
//           <br />
//           <label>Postal Code:</label>
//           <input
//             type='text'
//             name='postalCode'
//             value={address.postalCode}
//             onChange={handleInputChange}
//             className='w-full border p-2'
//           />
//           <br />
//           <button onClick={handleSave} className='btn btn-primary mt-4'>
//             Save
//           </button>
//         </div>
//       ) : (
//         <div>
//           <p>{customer?.name}</p>
//           <p className='text-gray-600'>{customer?.email}</p>
//           <p className='text-gray-600'>{customer?.mobile_phone}</p>
//           <div className='text-gray-600'>
//             <h3>Address:</h3>
//             <p>
//               {address.address}, {address.subdistrict}, {address.district}, {address.province}{" "}
//               {address.postalCode}
//             </p>
//           </div>

//           <EditButton onClick={handleEditToggle} />
//         </div>
//       )}
//     </div>
//   );
// }

// export default AddressBook;

// import React, { useEffect, useState } from "react";
// import EditButton from "../../button/EditButton";
// import { useCustomerProfile } from "../../../hook/customers/useCustomerHooks";
// import customerAddressService from "../../../service/customerAddressService";

// function AddressBook() {
//   const [isEditing, setIsEditing] = useState(false);
//   const [address, setAddress] = useState({
//     province: "",
//     district: "",
//     subdistrict: "",
//     address: "",
//     postalCode: "",
//   }); // State to store the customer's address
//   const { customer, error: fetchError } = useCustomerProfile();

//   useEffect(() => {
//     // Fetch the customer's address using their ID
//     if (customer?._id) {
//       customerAddressService.getAddressesByCustomerId(customer._id).then(([data, error]) => {
//         if (error) {
//           console.error("Failed to fetch customer address:", error);
//         } else if (data && data.length > 0) {
//           setAddress({
//             province: data[0].province || "",
//             district: data[0].district || "",
//             subdistrict: data[0].subdistrict || "",
//             address: data[0].address || "",
//             postalCode: data[0].postal_code || "",
//           });
//         }
//       });
//     }
//   }, [customer]);

//   const handleEditToggle = () => setIsEditing((prev) => !prev);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setAddress((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSave = async () => {
//     if (!customer?._id) return;

//     const { province, district, subdistrict, address: addr, postalCode } = address;
//     const addressData = {
//       province,
//       district,
//       subdistrict,
//       address: addr,
//       postalCode,
//     };

//     const [updatedAddress, error] = await customerAddressService.updateAddress({
//       customer_id: customer._id,
//       data: addressData,
//     });

//     if (error) {
//       console.error("Failed to update address:", error);
//     } else {
//       console.log("Updated Address:", updatedAddress);
//       setIsEditing(false); // Close the editing state
//     }
//   };

//   return (
//     <div className='h-[400px] bg-[#fdfaf5] p-8 shadow-md md:w-[540px] lg:w-[700px] xl:w-[900px]'>
//       <div className='mb-6 flex items-center justify-between'>
//         <h2 className='text-xl font-semibold text-gray-800'>Address book</h2>
//       </div>

//       <hr className='mb-6' />

//       {isEditing ? (
//         <div className='p-4'>
//           <label>Province:</label>
//           <input
//             type='text'
//             name='province'
//             value={address.province}
//             onChange={handleInputChange}
//             className='w-full border p-2'
//           />
//           <br />
//           <label>District:</label>
//           <input
//             type='text'
//             name='district'
//             value={address.district}
//             onChange={handleInputChange}
//             className='w-full border p-2'
//           />
//           <br />
//           <label>Sub-district:</label>
//           <input
//             type='text'
//             name='subdistrict'
//             value={address.subdistrict}
//             onChange={handleInputChange}
//             className='w-full border p-2'
//           />
//           <br />
//           <label>Address:</label>
//           <input
//             type='text'
//             name='address'
//             value={address.address}
//             onChange={handleInputChange}
//             className='w-full border p-2'
//           />
//           <br />
//           <label>Postal Code:</label>
//           <input
//             type='text'
//             name='postalCode'
//             value={address.postalCode}
//             onChange={handleInputChange}
//             className='w-full border p-2'
//           />
//           <br />
//           <button onClick={handleSave} className='btn btn-primary mt-4'>
//             Save
//           </button>
//         </div>
//       ) : (
//         <div>
//           <div className='mb-8 text-gray-600'>
//             <strong>Add, delete or change your addresses here.</strong>
//           </div>
//           <div className='flex justify-between border p-4'>
//             <div>
//               <p>{customer?.name}</p>
//               <p className='text-gray-600'>{customer?.email}</p>
//               <p className='text-gray-600'>{customer?.mobile_phone}</p>
//               <p>
//                 {address.address}, {address.subdistrict}, {address.district}, {address.province}{" "}
//                 {address.postalCode}
//               </p>
//             </div>
//             <div>
//               <EditButton onClick={handleEditToggle} />
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default AddressBook;

// import React, { useEffect, useState } from "react";
// import EditButton from "../../button/EditButton";
// import { useCustomerProfile } from "../../../hook/customers/useCustomerHooks";
// import customerAddressService from "../../../service/customerAddressService";

// function AddressBook() {
//   const [isEditing, setIsEditing] = useState(false);
//   const [address, setAddress] = useState({
//     province: "",
//     district: "",
//     subdistrict: "",
//     address: "",
//     postalCode: "",
//   }); // State to store the customer's address
//   const { customer, error: fetchError } = useCustomerProfile();

//   useEffect(() => {
//     // Fetch the customer's address using their ID
//     if (customer?._id) {
//       customerAddressService.getAddressesByCustomerId(customer._id).then(([data, error]) => {
//         if (error) {
//           console.error("Failed to fetch customer address:", error);
//         } else if (data && data.length > 0) {
//           setAddress({
//             province: data[0].province || "",
//             district: data[0].district || "",
//             subdistrict: data[0].subdistrict || "",
//             address: data[0].address || "",
//             postalCode: data[0].postal_code || "",
//           });
//         }
//       });
//     }
//   }, [customer]);

//   const handleEditToggle = () => setIsEditing((prev) => !prev);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setAddress((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSave = async () => {
//     if (!customer?._id) return;

//     const { province, district, subdistrict, address: addr, postalCode } = address;
//     const addressData = {
//       province,
//       district,
//       subdistrict,
//       address: addr,
//       postalCode,
//     };

//     const [updatedAddress, error] = await customerAddressService.updateAddress({
//       customer_id: customer._id,
//       data: addressData,
//     });

//     if (error) {
//       console.error("Failed to update address:", error);
//     } else {
//       console.log("Updated Address:", updatedAddress);
//       setIsEditing(false); // Close the editing state
//     }
//   };

//   return (
//     <div className='h-[400px] bg-[#fdfaf5] p-8 shadow-md md:w-[540px] lg:w-[700px] xl:w-[900px]'>
//       <div className='mb-6 flex items-center justify-between'>
//         <h2 className='text-xl font-semibold text-gray-800'>Address book</h2>
//       </div>

//       <hr className='mb-6' />

//       {isEditing ? (
//         <div className='grid grid-cols-1 gap-2 p-4 sm:grid-cols-2'>
//           <div>
//             <label className='block text-sm font-medium text-gray-700'>Province:</label>
//             <input
//               type='text'
//               name='province'
//               value={address.province}
//               onChange={handleInputChange}
//               className='mt-1 block w-full border-gray-300 p-1 shadow-sm sm:text-lg'
//             />
//           </div>
//           <div>
//             <label className='block text-sm font-medium text-gray-700'>District:</label>
//             <input
//               type='text'
//               name='district'
//               value={address.district}
//               onChange={handleInputChange}
//               className='mt-1 block w-full border-gray-300 p-1 shadow-sm sm:text-lg'
//             />
//           </div>
//           <div>
//             <label className='block text-sm font-medium text-gray-700'>Sub-district:</label>
//             <input
//               type='text'
//               name='subdistrict'
//               value={address.subdistrict}
//               onChange={handleInputChange}
//               className='mt-1 block w-full border-gray-300 p-1 shadow-sm sm:text-lg'
//             />
//           </div>
//           <div>
//             <label className='block text-sm font-medium text-gray-700'>Address:</label>
//             <input
//               type='text'
//               name='address'
//               value={address.address}
//               onChange={handleInputChange}
//               className='mt-1 block w-full border-gray-300 p-1 shadow-sm sm:text-lg'
//             />
//           </div>
//           <div>
//             <label className='block text-sm font-medium text-gray-700'>Postal Code:</label>
//             <input
//               type='text'
//               name='postalCode'
//               value={address.postalCode}
//               onChange={handleInputChange}
//               className='mt-1 block w-full border-gray-300 p-1 shadow-sm sm:text-lg'
//             />
//           </div>
//           <div className='sm:col-span-2'>
//             <button
//               onClick={handleSave}
//               className='btn btn-primary w-full rounded-none bg-black text-white hover:bg-gray-500 hover:ring-green-500 focus:ring-green-500'
//             >
//               Save
//             </button>
//           </div>
//         </div>
//       ) : (
//         <div>
//           <div className='mb-8'>
//             <strong> change your addresses here.</strong>
//           </div>
//           <div className='flex justify-between border p-4'>
//             <div>
//               <p className='text-xl'>{customer?.name}</p>
//               <p className='text-xl'>{customer?.mobile_phone}</p>
//               <p className='text-xl'>
//                 {address.address}, {address.subdistrict}, {address.district}, {address.province}{" "}
//                 {address.postalCode}
//               </p>
//             </div>
//             <div>
//               <EditButton onClick={handleEditToggle} />
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default AddressBook;
// import React, { useEffect, useState } from "react";
// import EditButton from "../../button/EditButton";
// import { useCustomerProfile } from "../../../hook/customers/useCustomerHooks";
// import {
//   useFetchAddresses,
//   useUpdateAddress,
// } from "../../../hook/customers/UseCustomerAddressHooks";

// function AddressBook() {
//   const [isEditing, setIsEditing] = useState(false);
//   const [address, setAddress] = useState({
//     province: "",
//     district: "",
//     subdistrict: "",
//     address: "",
//     postal_code: "",
//   }); // เก็บข้อมูลที่อยู่ใน state

//   const { customer } = useCustomerProfile(); // ดึงข้อมูลลูกค้า
//   const {
//     addresses,
//     fetchAddressesByCustomerId,
//     error: fetchError,
//   } = useFetchAddresses(customer?._id || "");
//   const { updateAddress, error: updateError } = useUpdateAddress();

//   useEffect(() => {
//     // เรียกดึงข้อมูลที่อยู่โดยใช้ customer ID
//     if (customer?._id) {
//       fetchAddressesByCustomerId(customer._id);
//     }
//   }, [customer, fetchAddressesByCustomerId]);

//   useEffect(() => {
//     // อัปเดต state address เมื่อมีข้อมูล addresses
//     if (addresses && addresses.length > 0) {
//       const primaryAddress = addresses[0]; // ใช้ที่อยู่แรกในลิสต์
//       setAddress({
//         province: primaryAddress.province || "",
//         district: primaryAddress.district || "",
//         subdistrict: primaryAddress.subdistrict || "",
//         address: primaryAddress.address || "",
//         postal_code: primaryAddress.postal_code || "",
//       });
//     }
//   }, [addresses]);

//   const handleEditToggle = () => setIsEditing((prev) => !prev); // เปิด/ปิดโหมดแก้ไข

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setAddress((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSave = async () => {
//     if (!customer?._id) return; // ตรวจสอบว่ามี customer ID ก่อน

//     try {
//       await updateAddress(customer._id, address); // เรียกใช้ hook สำหรับอัปเดตที่อยู่
//       await fetchAddressesByCustomerId(customer._id); // ดึงข้อมูลที่อยู่ใหม่หลังอัปเดตสำเร็จ
//       setIsEditing(false); // ปิดโหมดแก้ไขเมื่อบันทึกสำเร็จ
//     } catch (error) {
//       console.error("Failed to update address:", error || updateError);
//     }
//   };

//   return (
//     <div className='h-[400px] bg-[#fdfaf5] p-8 shadow-md md:w-[540px] lg:w-[700px] xl:w-[900px]'>
//       <div className='mb-6 flex items-center justify-between'>
//         <h2 className='text-xl font-semibold text-gray-800'>Address book</h2>
//       </div>

//       <hr className='mb-6' />

//       {isEditing ? (
//         <div className='grid grid-cols-1 gap-2 p-4 sm:grid-cols-2'>
//           {["province", "district", "subdistrict", "address", "postal_code"].map((field) => (
//             <div key={field}>
//               <label className='block text-sm font-medium text-gray-700'>
//                 {field.replace("_", " ").charAt(0).toUpperCase() + field.replace("_", " ").slice(1)}
//                 :
//               </label>
//               <input
//                 type='text'
//                 name={field}
//                 value={address[field]}
//                 onChange={handleInputChange}
//                 className='mt-1 block w-full border-gray-300 p-1 shadow-sm sm:text-lg'
//               />
//             </div>
//           ))}
//           <div className='sm:col-span-2'>
//             <button
//               onClick={handleSave}
//               className='btn btn-primary w-full rounded-none bg-black text-white hover:bg-gray-500 hover:ring-green-500 focus:ring-green-500'
//             >
//               Save
//             </button>
//           </div>
//         </div>
//       ) : (
//         <div>
//           <div className='mb-8'>
//             <strong>Change your addresses here.</strong>
//           </div>
//           <div className='flex justify-between border p-4'>
//             <div>
//               <p className='text-xl'>{customer?.name}</p>
//               <p className='text-xl'>{customer?.mobile_phone}</p>
//               <p className='text-xl'>
//                 {address.address}, {address.subdistrict}, {address.district}, {address.province}{" "}
//                 {address.postal_code}
//               </p>
//             </div>
//             <div>
//               <EditButton onClick={handleEditToggle} />
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default AddressBook;
import React, { useEffect, useState } from "react";
import EditButton from "../../button/EditButton";
import { useCustomerProfile } from "../../../hook/customers/useCustomerHooks";
import {
  useFetchAddresses,
  useUpdateAddress,
} from "../../../hook/customers/UseCustomerAddressHooks";
import { Address } from "../../../service/customerAddressType";

function AddressBook() {
  const [isEditing, setIsEditing] = useState(false);
  const [address, setAddress] = useState<Address>({
    province: "",
    district: "",
    subdistrict: "",
    address: "",
    postal_code: "",
  }); // เก็บข้อมูลที่อยู่ใน state

  const { customer } = useCustomerProfile(); // ดึงข้อมูลลูกค้า
  const { addresses, fetchAddressesByCustomerId } = useFetchAddresses(customer?._id || "");
  const { updateAddress, error: updateError } = useUpdateAddress();

  useEffect(() => {
    // เรียกดึงข้อมูลที่อยู่โดยใช้ customer ID
    if (customer?._id) {
      fetchAddressesByCustomerId(customer._id);
    }
  }, [customer?._id, fetchAddressesByCustomerId]);

  useEffect(() => {
    // อัปเดต state address เมื่อมีข้อมูล addresses
    if (addresses && addresses.length > 0) {
      const primaryAddress = addresses[0]; // ใช้ที่อยู่แรกในลิสต์
      setAddress((prevAddress) => {
        if (
          prevAddress.province !== primaryAddress.province ||
          prevAddress.district !== primaryAddress.district ||
          prevAddress.subdistrict !== primaryAddress.subdistrict ||
          prevAddress.address !== primaryAddress.address ||
          prevAddress.postal_code !== primaryAddress.postal_code
        ) {
          return {
            province: primaryAddress.province || "",
            district: primaryAddress.district || "",
            subdistrict: primaryAddress.subdistrict || "",
            address: primaryAddress.address || "",
            postal_code: primaryAddress.postal_code || "",
          };
        }
        return prevAddress;
      });
    }
  }, [addresses]);

  const handleEditToggle = () => setIsEditing((prev) => !prev);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAddress((prev) => ({
      ...prev,
      [name as keyof Address]: value, // บอก TypeScript ว่า key อยู่ใน type Address
    }));
  };

  const handleSave = async () => {
    if (!customer?._id) return; // ตรวจสอบว่ามี customer ID ก่อน

    try {
      await updateAddress(customer._id, address); // เรียกใช้ hook สำหรับอัปเดตที่อยู่
      await fetchAddressesByCustomerId(customer._id); // ดึงข้อมูลที่อยู่ใหม่หลังอัปเดตสำเร็จ
      setIsEditing(false); // ปิดโหมดแก้ไขเมื่อบันทึกสำเร็จ
    } catch (error) {
      console.error("Failed to update address:", error || updateError);
    }
  };

  return (
    <div className='h-[400px] bg-[#fdfaf5] p-8 shadow-md md:w-[540px] lg:w-[700px] xl:w-[900px]'>
      <div className='mb-6 flex items-center justify-between'>
        <h2 className='text-xl font-semibold text-gray-800'>Address book</h2>
      </div>

      <hr className='mb-6' />

      {isEditing ? (
        <div className='grid grid-cols-1 gap-2 p-4 sm:grid-cols-2'>
          {["province", "district", "subdistrict", "address", "postal_code"].map((field) => (
            <div key={field}>
              <label className='block text-sm font-medium text-gray-700'>
                {field.replace("_", " ").charAt(0).toUpperCase() + field.replace("_", " ").slice(1)}
                :
              </label>
              <input
                type='text'
                name={field}
                value={address[field as keyof Address] || ""}
                onChange={handleInputChange}
                className='mt-1 block w-full border-gray-300 p-1 shadow-sm sm:text-lg'
              />
            </div>
          ))}
          <div className='sm:col-span-2'>
            <button
              onClick={handleSave}
              className='btn btn-primary w-full rounded-none border-none bg-black text-white hover:bg-gray-500 hover:ring-green-500 focus:ring-green-500'
            >
              Save
            </button>
          </div>
        </div>
      ) : (
        <div>
          <div className='mb-8'>
            <strong>Change your addresses here.</strong>
          </div>
          <div className='flex justify-between border p-4'>
            <div>
              <p className='text-xl'>{customer?.name}</p>
              <p className='text-xl'>{customer?.mobile_phone}</p>
              <p className='text-xl'>
                {address.address}, {address.subdistrict}, {address.district}, {address.province}{" "}
                {address.postal_code}
              </p>
            </div>
            <div>
              <EditButton onClick={handleEditToggle} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddressBook;
