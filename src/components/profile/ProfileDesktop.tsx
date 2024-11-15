import React, { useState } from "react";
import ProfileSidebar from "./profileDesktopcomponents/ProfileSidebar";
import ProfileInformation from "./profileDesktopcomponents/ProfileInformation";
import AddressBook from "./profileDesktopcomponents/AddressBook";
import OrederHistory from "./profileDesktopcomponents/OrderHistory";
import Payments from "./profileDesktopcomponents/Payments";

const DesktopProfilePage: React.FC = () => {
  const [activePage, setActivePage] = useState<"profile" | "address" | "orderhistory" | "payments">(
    "profile",
  );

  return (
    <main className='hidden bg-white sm:mx-auto sm:mb-36 sm:mt-16 md:mx-auto md:block lg:mx-auto'>
      <div className='flex items-center justify-center gap-x-2'>
        {/* Left bar */}
        <ProfileSidebar activePage={activePage} setActivePage={setActivePage} />

        {/* Right content */}
        <div>
          {activePage === "profile" && <ProfileInformation />}
          {activePage === "address" && <AddressBook />}
          {activePage === "orderhistory" && <OrederHistory />}
          {activePage === "payments" && <Payments />}
        </div>
      </div>
    </main>
  );
};

export default DesktopProfilePage;
