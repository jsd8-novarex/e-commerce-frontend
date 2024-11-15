import React from "react";
import EditButton from "../../button/EditButton";
import { profileData } from "../../../constraints/PROFILE_DATA";
function ProfileInformation() {
  return (
    <>
      <div className='h-[400px] bg-[#fdfaf5] p-8 shadow-md md:w-[540px] lg:w-[700px] xl:w-[900px]'>
        <div className='mb-6 flex items-center justify-between'>
          <h2 className='text-xl font-semibold text-gray-800'>Profile information</h2>
          <EditButton />
        </div>

        <hr className='mb-6' />

        <div className='flex'>
          <div className='w-1/2'>
            <p className='mb-8 text-gray-600'>
              <strong>Name</strong>
              <span>: {profileData.name}</span>
            </p>
            <p className='mb-8 text-gray-600'>
              <strong>Email</strong>
              <span>: {profileData.email}</span>
            </p>
            <p className='mb-8 text-gray-600'>
              <strong>Tel</strong>: {profileData.tel}
            </p>
            <p className='mb-8 text-gray-600'>
              <strong>DOB</strong>: {profileData.dob}
            </p>
            <p className='text-gray-600'>
              <strong>Password</strong>: ********
            </p>
          </div>

          <div className='flex w-1/2 flex-col gap-y-2 border-l pl-6 text-gray-600'>
            <p>
              <strong>Billing address</strong>:
            </p>
            <p>{profileData.name}</p>
            <p>
              {` 
                ${profileData.address.address}
                ${profileData.address.subdistrict}, ${profileData.address.district},
                ${profileData.address.province}, ${profileData.address.postal_code}, ${profileData.tel}`}
            </p>
            <p>Billing name and address must match the credit card you will be using.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileInformation;
