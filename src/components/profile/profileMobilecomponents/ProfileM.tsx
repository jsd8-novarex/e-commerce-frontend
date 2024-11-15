import React from "react";
import EditButton from "../../button/EditButton";
import { profileData } from "../../../constraints/PROFILE_DATA";

interface ProfileMProps {
  visibility: {
    isProfileVisible: boolean;
  };
  toggleVisibility: (checked: "isProfileVisible") => void;
}

const ProfileM: React.FC<ProfileMProps> = ({ visibility, toggleVisibility }) => {
  return (
    <div className='mt-4'>
      <button
        className='flex w-full items-center justify-between border-b border-t py-2 text-left'
        onClick={() => toggleVisibility("isProfileVisible")}
      >
        <span className='font-semibold'>Profile Information</span>
        <span>{visibility.isProfileVisible ? "▲" : "▼"}</span>
      </button>

      {visibility.isProfileVisible && (
        <div className='flex justify-between border border-t-0 p-4'>
          <div>
            <p>
              <strong>Name:</strong> {profileData.name}
            </p>
            <p>
              <strong>E-mail:</strong> {profileData.email}
            </p>
            <p>
              <strong>Telephone:</strong> {profileData.tel}
            </p>
            <p>
              <strong>Date of birth:</strong> {profileData.dob}
            </p>
            <p>
              <strong>Password:</strong> ********
            </p>
            <hr className='my-4' />
            <p className='font-semibold'>Billing address</p>
            <p>{profileData.name}</p>
            <p>
              {`
                ${profileData.address.address}
                ${profileData.address.subdistrict}, ${profileData.address.district}
                ${profileData.address.province}, ${profileData.address.postal_code}, ${profileData.tel}`}
            </p>
            <p>{profileData.tel}</p>
            <p className='mt-2 text-sm text-gray-500'>
              Billing name and address must match the credit card you will be using.
            </p>
          </div>
          <div>
            <EditButton />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileM;
