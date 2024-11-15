import React from "react";

interface ProfileSidebarProps {
  activePage: "profile" | "address" | "orderhistory" | "payments";
  setActivePage: React.Dispatch<
    React.SetStateAction<"profile" | "address" | "orderhistory" | "payments">
  >;
}

const ProfileSidebar: React.FC<ProfileSidebarProps> = ({ activePage, setActivePage }) => {
  return (
    <>
      <div className='md:min-w-48 lg:mr-8 xl:mr-12 xl:min-w-60'>
        <h1 className='mb-5 text-2xl uppercase text-gray-800'>Account</h1>
        <div>
          <button
            onClick={() => setActivePage("orderhistory")}
            className={`mb-3 flex h-12 w-full items-center text-gray-700 ${activePage === "orderhistory" ? "font-bold" : ""}`}
          >
            <p className='uppercase'>Order history</p>
          </button>
          <button
            onClick={() => setActivePage("profile")}
            className={`mb-3 flex h-12 w-full items-center text-gray-700 ${activePage === "profile" ? "font-bold" : ""}`}
          >
            <p className='uppercase'>Profile information</p>
          </button>
          <button
            onClick={() => setActivePage("address")}
            className={`mb-3 flex h-12 w-full items-center text-gray-700 ${activePage === "address" ? "font-bold" : ""}`}
          >
            <p className='uppercase'>Address book</p>
          </button>
          <button
            onClick={() => setActivePage("payments")}
            className={`mb-3 flex h-12 w-full items-center text-gray-700 ${activePage === "payments" ? "font-bold" : ""}`}
          >
            <p className='uppercase'>Payments</p>
          </button>

          <hr className='my-6' />

          <div>
            <button className='text-gray-600 underline'>
              <span>Sign-out</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileSidebar;
