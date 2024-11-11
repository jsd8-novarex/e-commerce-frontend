import React, { useState } from "react";
import EditButton from "../button/EditButton";
import { profileData } from "../../constraints/PROFILE_DATA";

interface VisibilityState {
  isOrderHistoryVisible: boolean;
  isProfileVisible: boolean;
  isAddressVisible: boolean;
  isPaymentsVisible: boolean;
}

const MobileProfilePage: React.FC = () => {
  const [visibility, setVisibility] = useState<VisibilityState>({
    isOrderHistoryVisible: false,
    isProfileVisible: false,
    isAddressVisible: false,
    isPaymentsVisible: false,
  });

  const toggleVisibility = (checked: keyof VisibilityState) => {
    setVisibility((prev) => ({
      ...prev,
      [checked]: !prev[checked],
    }));
  };

  return (
    <div className='flex h-full flex-col items-center py-4 md:hidden'>
      <div className='w-full max-w-xl bg-white p-6 shadow-md'>
        {/* Account Section */}
        <div className='flex items-center justify-between border-b py-2'>
          <h2 className='text-lg font-bold'>Account</h2>
          <a href='#' className='text-sm text-gray-500 hover:underline'>
            Sign-out
          </a>
        </div>

        {/* Order History */}
        <div className='mt-4'>
          <button
            className='flex w-full items-center justify-between border-b border-t py-2 text-left'
            onClick={() => toggleVisibility("isOrderHistoryVisible")}
          >
            <span className='font-semibold'>Order History</span>
            <span>{visibility.isOrderHistoryVisible ? "▲" : "▼"}</span>
          </button>

          {visibility.isOrderHistoryVisible && (
            <div className='border border-t-0 p-4'>
              <p>Order history content goes here...</p>
            </div>
          )}
        </div>

        {/* Profile Information */}
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
                  {profileData.address.address}
                  {profileData.address.subdistrict}, {profileData.address.district}
                  {profileData.address.province}, {profileData.address.postal_code}
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

        {/* Address Book */}
        <div className='mt-4'>
          <button
            className='flex w-full items-center justify-between border-b border-t py-2 text-left'
            onClick={() => toggleVisibility("isAddressVisible")}
          >
            <span className='font-semibold'>Address Book</span>
            <span>{visibility.isAddressVisible ? "▲" : "▼"}</span>
          </button>

          {visibility.isAddressVisible && (
            <div className='border border-t-0 p-4'>
              <p>Address book content goes here...</p>
            </div>
          )}
        </div>

        {/* Payments */}
        <div className='mt-4'>
          <button
            className='flex w-full items-center justify-between border-b border-t py-2 text-left'
            onClick={() => toggleVisibility("isPaymentsVisible")}
          >
            <span className='font-semibold'>Payments</span>
            <span>{visibility.isPaymentsVisible ? "▲" : "▼"}</span>
          </button>

          {visibility.isPaymentsVisible && (
            <div className='border border-t-0 p-4'>
              <p>Payment information goes here...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MobileProfilePage;
