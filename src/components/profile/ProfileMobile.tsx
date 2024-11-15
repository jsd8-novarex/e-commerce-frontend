import React, { useState } from "react";
import OrderHistoryM from "./profileMobilecomponents/OrderHistoryM";
import ProfileM from "./profileMobilecomponents/ProfileM";
import AddressBookM from "./profileMobilecomponents/AddressBookM";
import PaymentsM from "./profileMobilecomponents/PaymentsM";

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
        <OrderHistoryM visibility={visibility} toggleVisibility={toggleVisibility} />
        {/* Profile Information */}
        <ProfileM visibility={visibility} toggleVisibility={toggleVisibility} />
        {/* Address Book */}
        <AddressBookM visibility={visibility} toggleVisibility={toggleVisibility} />
        {/* Payments */}
        <PaymentsM visibility={visibility} toggleVisibility={toggleVisibility} />
      </div>
    </div>
  );
};

export default MobileProfilePage;
