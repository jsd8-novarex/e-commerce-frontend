import React, { useEffect, useState } from "react";
import {
  useCustomerProfile,
  useUpdateCustomer,
  useUpdatePassword,
  useVerifyPassword,
} from "../../../hook/customers/useCustomerHooks";
import { useFetchAddresses } from "../../../hook/customers/UseCustomerAddressHooks";
import EditButton from "../../button/EditButton";
import dayjs from "dayjs";
import { isPasswordValid } from "../profileDesktopcomponents/ProfileInformation";

interface ProfileMProps {
  visibility: {
    isProfileVisible: boolean;
  };
  toggleVisibility: (checked: "isProfileVisible") => void;
}

const ProfileM: React.FC<ProfileMProps> = ({ visibility, toggleVisibility }) => {
  const { customer } = useCustomerProfile();
  const { updateCustomerInfo, error: updateError } = useUpdateCustomer();
  const { updatePassword, error: passwordError } = useUpdatePassword();
  const { verifyPassword } = useVerifyPassword();
  const { addresses, fetchAddressesByCustomerId } = useFetchAddresses(customer?._id || "");

  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [isEditingPassword, setIsEditingPassword] = useState(false);

  const [profileData, setProfileData] = useState({
    name: customer?.name || "",
    mobile_phone: customer?.mobile_phone || "",
    date_of_birth: customer?.date_of_birth || "",
  });

  const [passwords, setPasswords] = useState({
    oldPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  useEffect(() => {
    if (customer?._id) {
      fetchAddressesByCustomerId(customer._id);
    }
  }, [customer, fetchAddressesByCustomerId]);

  useEffect(() => {
    if (customer) {
      setProfileData({
        name: customer.name || "",
        mobile_phone: customer.mobile_phone || "",
        date_of_birth: customer.date_of_birth
          ? dayjs(customer.date_of_birth).format("YYYY-MM-DD")
          : "",
      });
    }
  }, [customer]);

  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({
      ...prev,
      [name]: name === "date_of_birth" && value ? dayjs(value).format("YYYY-MM-DD") : value,
    }));
  };

  const handleProfileSubmit = async () => {
    try {
      await updateCustomerInfo(profileData);
      alert("Profile updated successfully!");
      setIsEditingProfile(false);
    } catch (err) {
      console.error("Error updating profile:", err);
      alert(updateError || "An unexpected error occurred.");
    }
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPasswords((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitPasswordChange = async () => {
    const { oldPassword, newPassword, confirmNewPassword } = passwords;

    if (!isPasswordValid(newPassword)) {
      alert(
        "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.",
      );
      return;
    }

    if (newPassword !== confirmNewPassword) {
      alert("New passwords do not match!");
      return;
    }

    try {
      const isValid = await verifyPassword(oldPassword);
      if (!isValid) {
        alert("The old password is incorrect.");
        return;
      }

      await updatePassword(oldPassword, newPassword);
      alert("Password updated successfully!");
      setIsEditingPassword(false);
    } catch (err) {
      console.error("Error updating password:", err);
      alert(passwordError || "An unexpected error occurred.");
    }
  };

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
        <div className='flex flex-col border border-t-0 p-4'>
          {isEditingProfile ? (
            <div className='flex flex-col gap-4'>
              <input
                type='text'
                name='name'
                value={profileData.name}
                placeholder='Name'
                onChange={handleProfileChange}
                className='border p-2'
              />
              <input
                type='text'
                name='mobile_phone'
                value={profileData.mobile_phone}
                placeholder='Mobile Phone'
                onChange={handleProfileChange}
                className='border p-2'
              />
              <input
                type='date'
                name='date_of_birth'
                value={profileData.date_of_birth || ""}
                onChange={handleProfileChange}
                className='border p-2'
              />
              <div className='flex justify-end gap-4'>
                <button
                  className='bg-black px-4 py-2 text-white hover:bg-green-600'
                  onClick={handleProfileSubmit}
                >
                  Save
                </button>
                <button
                  className='bg-gray-300 px-4 py-2 hover:bg-gray-400'
                  onClick={() => setIsEditingProfile(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : isEditingPassword ? (
            <div className='flex flex-col gap-4'>
              <input
                type='password'
                name='oldPassword'
                placeholder='Old Password'
                value={passwords.oldPassword}
                onChange={handlePasswordChange}
                className='border p-2'
              />
              <input
                type='password'
                name='newPassword'
                placeholder='New Password'
                value={passwords.newPassword}
                onChange={handlePasswordChange}
                className='border p-2'
              />
              <input
                type='password'
                name='confirmNewPassword'
                placeholder='Confirm New Password'
                value={passwords.confirmNewPassword}
                onChange={handlePasswordChange}
                className='border p-2'
              />
              <div className='flex justify-end gap-4'>
                <button
                  className='bg-black px-4 py-2 text-white hover:bg-green-600'
                  onClick={handleSubmitPasswordChange}
                >
                  Save
                </button>
                <button
                  className='bg-gray-300 px-4 py-2 hover:bg-gray-400'
                  onClick={() => setIsEditingPassword(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <div>
              <div className='flex justify-between'>
                <p>
                  <strong>Name</strong>: {customer?.name || "No name"}
                </p>
                <EditButton onClick={() => setIsEditingProfile(true)} />
              </div>

              <p>
                <strong>E-mail</strong>: {customer?.email || "No email"}
              </p>
              <p>
                <strong>Telephone</strong>: {customer?.mobile_phone || "No mobile phone"}
              </p>
              <p>
                <strong>Date of Birth</strong>: {customer?.date_of_birth?.split("T")[0] || "No DOB"}
              </p>
              <p className='flex items-center'>
                <strong>Password</strong>: ********{" "}
                <EditButton className='ml-2' onClick={() => setIsEditingPassword(true)} />
              </p>
              <hr className='my-4' />
              <p className='font-semibold'>Billing address</p>
              <p>{customer?.name}</p>

              {addresses.map((address, index) => (
                <p key={index}>
                  {address.address || "No Address"}, {address.subdistrict || "No Subdistrict"},{" "}
                  {address.district || "No District"}, {address.province || "No Province"}{" "}
                  {address.postal_code || "No Postal code"}
                </p>
              ))}
              <p>{customer?.mobile_phone || "No mobile phone"}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ProfileM;
