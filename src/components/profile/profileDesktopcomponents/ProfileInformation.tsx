import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCustomerProfile, Customer } from "../../../service/customerService";
import EditButton from "../../button/EditButton";

const ProfileInformation: React.FC = () => {
  const navigate = useNavigate();
  const [customer, setCustomer] = useState<Customer | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const [data, err] = await getCustomerProfile();
      if (err) {
        if (err.message === "Email is missing. Please log in again.") {
          navigate("/login");
        } else {
          setError(err.message || "Failed to fetch customer profile");
        }
      } else {
        setCustomer(data);
      }
    };

    fetchProfile();
  }, [navigate]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!customer) {
    return <div>Loading...</div>;
  }

  return (
    <div className='h-[400px] bg-[#fdfaf5] p-8 shadow-md md:w-[540px] lg:w-[700px] xl:w-[900px]'>
      <div className='mb-6 flex items-center justify-between'>
        <h2 className='text-xl font-semibold text-gray-800'>Profile Information</h2>
        <EditButton />
      </div>

      <hr className='mb-6' />

      {customer && (
        <div className='flex'>
          <div className='w-1/2'>
            <p className='mb-8 text-gray-600'>
              <strong>Name</strong>: {customer.name}
            </p>
            <p className='mb-8 text-gray-600'>
              <strong>Email</strong>: {customer.email}
            </p>
            <p className='mb-8 text-gray-600'>
              <strong>Tel</strong>: {customer.mobile_phone || "No mobile phone"}
            </p>
            <p className='mb-8 text-gray-600'>
              <strong>DOB</strong>: {customer.date_of_birth || "No DOB"}
            </p>
            <p className='text-gray-600'>
              <strong>Password</strong>: ********
            </p>
          </div>

          <div className='flex w-1/2 flex-col gap-y-2 border-l pl-6 text-gray-600'>
            <p>
              <strong>Billing address</strong>:
            </p>
            <p>{customer.name}</p>
            <p>Billing name and address must match the credit card you will be using.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileInformation;
