import React, { useState } from "react";

const MobileProfilePage: React.FC = () => {
  const [isOrderhistoryVisible, setIsOrderhistorVisible] = useState(false);
  const [isProfileVisible, setIsProfileVisible] = useState(false);
  const [isAddressVisible, setIsAddressVisible] = useState(false);
  const [isPaymentsVisible, setIsPaymentsVisible] = useState(false);

  const toggleOrderHistory = () => setIsOrderhistorVisible(!isOrderhistoryVisible);
  const toggleProfile = () => setIsProfileVisible(!isProfileVisible);
  const toggleAddress = () => setIsAddressVisible(!isAddressVisible);
  const togglePayments = () => setIsPaymentsVisible(!isPaymentsVisible);

  return (
    <div className='flex min-h-screen flex-col items-center p-4 md:hidden'>
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
            onClick={toggleOrderHistory}
          >
            <span className='font-semibold'>Order History</span>
            <span>{isOrderhistoryVisible ? "▲" : "▼"}</span>
          </button>

          {isOrderhistoryVisible && (
            <div className='border border-t-0 p-4'>
              <p>Order history content goes here...</p>
            </div>
          )}
        </div>

        {/* Profile Information */}
        <div className='mt-4'>
          <button
            className='flex w-full items-center justify-between border-b border-t py-2 text-left'
            onClick={toggleProfile}
          >
            <span className='font-semibold'>Profile Information</span>
            <span>{isProfileVisible ? "▲" : "▼"}</span>
          </button>

          {isProfileVisible && (
            <div className='flex justify-between border border-t-0 p-4'>
              <div>
                <p>
                  <strong>Name:</strong> Mr. Name
                </p>
                <p>
                  <strong>E-mail:</strong> email@gmail.com
                </p>
                <p>
                  <strong>Telephone:</strong> +123456789
                </p>
                <p>
                  <strong>Date of birth:</strong> Jan 1, 0001
                </p>
                <p>
                  <strong>Password:</strong> ********
                </p>
                {/* <p className="mt-2 text-sm text-gray-500">
                  You're subscribed to the Hermes newsletter.
                </p> */}
                <hr className='my-4' />
                <p className='font-semibold'>Billing address</p>
                <p>Mr.Name</p>
                <p>Address</p>
                <p>+123456789</p>
                <p className='mt-2 text-sm text-gray-500'>
                  Billing name and address must match the credit card you will be using.
                </p>
              </div>
              <div>
                <button>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    stroke='currentColor'
                    className='h-6 w-6'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10'
                    />
                  </svg>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Address Book */}
        <div className='mt-4'>
          <button
            className='flex w-full items-center justify-between border-b border-t py-2 text-left'
            onClick={toggleAddress}
          >
            <span className='font-semibold'>Address Book</span>
            <span>{isAddressVisible ? "▲" : "▼"}</span>
          </button>

          {isAddressVisible && (
            <div className='border border-t-0 p-4'>
              <p>Address book content goes here...</p>
            </div>
          )}
        </div>

        {/* Payments */}
        <div className='mt-4'>
          <button
            className='flex w-full items-center justify-between border-b border-t py-2 text-left'
            onClick={togglePayments}
          >
            <span className='font-semibold'>Payments</span>
            <span>{isPaymentsVisible ? "▲" : "▼"}</span>
          </button>

          {isPaymentsVisible && (
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
