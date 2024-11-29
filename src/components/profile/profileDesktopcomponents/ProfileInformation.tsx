import { useEffect, useState } from "react";
import EditButton from "../../button/EditButton";
import { getCustomerById } from "../../../service/customerService";

interface CustomerProfile {
  id: string;
  name: string;
  email: string;
  mobile_phone: string;
  date_of_birth: string;
  password: string;
}

function ProfileInformation() {
  const [profileData, setProfileData] = useState<CustomerProfile | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(function () {
    async function fetchProfile() {
      try {
        setLoading(true);
        const [data, apiError] = await getCustomerById("1"); // Replace "1" with dynamic ID if needed
        if (apiError) {
          setError(apiError);
        } else {
          setProfileData(data);
        }
      } catch (err: unknown) {
        console.error("Error fetching profile:", err);
        setError("Failed to fetch profile data.");
      } finally {
        setLoading(false);
      }
    }

    fetchProfile();
  }, []);

  if (loading) return <p>Loading profile...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className='h-[400px] bg-[#fdfaf5] p-8 shadow-md md:w-[540px] lg:w-[700px] xl:w-[900px]'>
      <div className='mb-6 flex items-center justify-between'>
        <h2 className='text-xl font-semibold text-gray-800'>Profile Information</h2>
        <EditButton />
      </div>

      <hr className='mb-6' />

      {profileData && (
        <div className='flex'>
          <div className='w-1/2'>
            <p className='mb-8 text-gray-600'>
              <strong>Name</strong>: {profileData.name}
            </p>
            <p className='mb-8 text-gray-600'>
              <strong>Email</strong>: {profileData.email}
            </p>
            <p className='mb-8 text-gray-600'>
              <strong>Tel</strong>: {profileData.mobile_phone}
            </p>
            <p className='mb-8 text-gray-600'>
              <strong>DOB</strong>: {profileData.date_of_birth}
            </p>
            <p className='text-gray-600'>
              <strong>Password</strong>: {profileData.password}
            </p>
          </div>

          <div className='flex w-1/2 flex-col gap-y-2 border-l pl-6 text-gray-600'>
            <p>
              <strong>Billing address</strong>:
            </p>
            <p>{profileData.name}</p>
            <p>Billing name and address must match the credit card you will be using.</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProfileInformation;
