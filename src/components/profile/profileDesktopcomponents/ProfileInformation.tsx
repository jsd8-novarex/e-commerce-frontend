import { useEffect, useState } from "react";
import {
  useCustomerProfile,
  useUpdateCustomer,
  useUpdatePassword,
  useVerifyPassword,
} from "../../../hook/customers/useCustomerHooks";
import EditButton from "../../button/EditButton";
import dayjs from "dayjs";
import { useFetchAddresses } from "../../../hook/customers/UseCustomerAddressHooks";
// ฟังก์ชันตรวจสอบความถูกต้องของรหัสผ่าน
// eslint-disable-next-line react-refresh/only-export-components
export const isPasswordValid = (password: string): boolean => {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return passwordRegex.test(password);
};

function ProfileInformation() {
  // Hooks
  const { customer, error: fetchError } = useCustomerProfile();
  const { updateCustomerInfo, error: updateError } = useUpdateCustomer();
  const { updatePassword, error: passwordError } = useUpdatePassword();
  const { verifyPassword } = useVerifyPassword();
  const { addresses, fetchAddressesByCustomerId } = useFetchAddresses(customer?._id || "");

  // Local states
  const [isEditingPassword, setIsEditingPassword] = useState(false);
  const [isEditingProfile, setIsEditingProfile] = useState(false);
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
  const [profileData, setProfileData] = useState({
    name: customer?.name || "",
    mobile_phone: customer?.mobile_phone || "",
    date_of_birth: customer?.date_of_birth || "",
  });

  // Handle profile form change
  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({
      ...prev,
      [name]: name === "date_of_birth" && value ? dayjs(value).format("YYYY-MM-DD") : value,
    }));
  };

  // Submit profile update
  const handleProfileSubmit = async () => {
    if (!customer) {
      alert("Customer data is not available. Please refresh the page and try again.");
      return;
    }

    try {
      await updateCustomerInfo(profileData);
      alert("Profile updated successfully!");
      setIsEditingProfile(false);
    } catch (err) {
      console.error("Error updating profile:", err);
      alert(updateError || "An unexpected error occurred.");
    }
  };

  if (fetchError) {
    return <div>Error: {fetchError}</div>;
  }

  if (!customer) {
    return <div>Loading customer profile...</div>;
  }

  // Cancel profile editing
  const handleCancelEditProfile = () => {
    setIsEditingProfile(false);
    setProfileData({
      name: customer?.name || "",
      mobile_phone: customer?.mobile_phone || "",
      date_of_birth: customer?.date_of_birth || "",
    });
  };

  // Handle password input change
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPasswords((prev) => ({ ...prev, [name]: value }));
  };

  // Submit password change
  const handleSubmitPasswordChange = async () => {
    const { oldPassword, newPassword, confirmNewPassword } = passwords;

    if (!customer) return;

    if (!isPasswordValid(newPassword)) {
      alert(
        "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.",
      );
      return;
    }

    if (oldPassword === newPassword) {
      alert("New password cannot be the same as the old password.");
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
      setPasswords({ oldPassword: "", newPassword: "", confirmNewPassword: "" });
    } catch (err) {
      console.error("Error updating password:", err);
      alert(passwordError || "An unexpected error occurred.");
    }
  };

  // Cancel password editing
  const handleCancel = () => {
    setIsEditingPassword(false);
    setPasswords({ oldPassword: "", newPassword: "", confirmNewPassword: "" });
  };

  return (
    <div className='h-[400px] bg-[#fdfaf5] p-8 shadow-md md:w-[540px] lg:w-[700px] xl:w-[900px]'>
      <div className='mb-6 flex items-center justify-between'>
        <h2 className='text-xl font-semibold text-gray-800'>Profile Information</h2>
        {!isEditingProfile && !isEditingPassword && (
          <div className='flex gap-4'>
            <EditButton onClick={() => setIsEditingProfile(true)} />
          </div>
        )}
      </div>

      <hr className='mb-6' />

      {isEditingProfile && (
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
              className='bg-gray-300 px-4 py-2 hover:bg-gray-400'
              onClick={handleCancelEditProfile}
            >
              Cancel
            </button>
            <button
              className='bg-black px-4 py-2 text-white hover:bg-green-600'
              onClick={handleProfileSubmit}
            >
              Save
            </button>
          </div>
        </div>
      )}

      {isEditingPassword && (
        <div className='flex flex-col gap-4'>
          <input
            type='password'
            name='oldPassword'
            placeholder='Old Password'
            className='border p-2'
            value={passwords.oldPassword}
            onChange={handlePasswordChange}
          />
          <input
            type='password'
            name='newPassword'
            placeholder='New Password'
            className='border p-2'
            value={passwords.newPassword}
            onChange={handlePasswordChange}
          />
          <input
            type='password'
            name='confirmNewPassword'
            placeholder='Confirm New Password'
            className='border p-2'
            value={passwords.confirmNewPassword}
            onChange={handlePasswordChange}
          />
          <div className='flex justify-end gap-4'>
            <button
              className='bg-black px-4 py-2 text-white hover:bg-green-600'
              onClick={handleSubmitPasswordChange}
            >
              Save
            </button>
            <button className='bg-gray-300 px-4 py-2 hover:bg-gray-400' onClick={handleCancel}>
              Cancel
            </button>
          </div>
        </div>
      )}

      {!isEditingProfile && !isEditingPassword && (
        <div className='flex'>
          <div className='w-1/2'>
            <p className='mb-8'>
              <strong>Name</strong>: {customer.name}
            </p>
            <p className='mb-8'>
              <strong>Email</strong>: {customer.email}
            </p>
            <p className='mb-8'>
              <strong>Tel</strong>: {customer.mobile_phone || "No mobile phone"}
            </p>
            <p className='mb-8'>
              <strong>DOB</strong>: {customer.date_of_birth?.split("T")[0] || "No DOB"}
            </p>
            <p className='flex items-center'>
              <strong>Password</strong>: ********{" "}
              <EditButton className='ml-2' onClick={() => setIsEditingPassword(true)} />
            </p>
          </div>
          <div className='flex w-1/2 flex-col gap-y-2 border-l pl-6 text-gray-600'>
            <p>
              <strong>Billing address</strong>:
            </p>
            <p>{customer.name}</p>
            {addresses.map((address, index) => (
              <p key={index}>
                {address.address || "No Address"}, {address.subdistrict || "No Subdistrict"},{" "}
                {address.district || "No District"}, {address.province || "No Province"}{" "}
                {address.postal_code || "No Postal code"}
              </p>
            ))}
            <p>{customer?.mobile_phone || "No mobile phone"}</p>
            {/* <p>Billing name and address must match the credit card you will be using.</p> */}
          </div>
        </div>
      )}
    </div>
  );
}

export default ProfileInformation;
