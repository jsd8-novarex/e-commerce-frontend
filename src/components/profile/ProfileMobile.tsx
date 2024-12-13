import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProfileM from "./profileMobilecomponents/ProfileM";
import AddressBookM from "./profileMobilecomponents/AddressBookM";

interface VisibilityStateType {
  isOrderHistoryVisible: boolean;
  isProfileVisible: boolean;
  isAddressVisible: boolean;
  isPaymentsVisible: boolean;
}

function MobileProfilePage() {
  const [visibility, setVisibility] = useState<VisibilityStateType>({
    isOrderHistoryVisible: false,
    isProfileVisible: true,
    isAddressVisible: true,
    isPaymentsVisible: false,
  });

  const navigate = useNavigate();

  const handleSignOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    navigate("/sign-in");
  };

  const toggleVisibility = (checked: keyof VisibilityStateType) => {
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
          <button className='text-sm text-gray-500 hover:underline' onClick={handleSignOut}>
            Sign-out
          </button>
        </div>

        {/* Order History */}
        {/* <OrderHistoryM visibility={visibility} toggleVisibility={toggleVisibility} /> */}
        {/* Profile Information */}
        <ProfileM visibility={visibility} toggleVisibility={toggleVisibility} />
        {/* Address Book */}
        <AddressBookM visibility={visibility} toggleVisibility={toggleVisibility} />
        {/* Payments */}
        {/* <PaymentsM visibility={visibility} toggleVisibility={toggleVisibility} /> */}
      </div>
    </div>
  );
}

export default MobileProfilePage;
