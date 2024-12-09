import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getCustomerProfile,
  Customer,
  // verifyOldPassword,
  // updatePassword,
} from "../../../service/customerService";
import EditButton from "../../button/EditButton";
import { isPasswordValid } from "../../../helpers/utils";

const ProfileInformation: React.FC = () => {
  const navigate = useNavigate();
  const [customer, setCustomer] = useState<Customer | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isEditingPassword, setIsEditingPassword] = useState<boolean>(false);
  const [passwords, setPasswords] = useState({
    oldPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  useEffect(() => {
    const fetchProfile = async () => {
      const [data, err] = await getCustomerProfile();
      if (err) {
        if (err.message === "Email is missing. Please log in again.") {
          navigate("/login");
        } else {
          setError(err.message || "Failed to fetch customer profile");
        }
      } else {
        setCustomer(data);
      }
    };

    fetchProfile();
  }, [navigate]);

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPasswords((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitPasswordChange = async () => {
    const { oldPassword, newPassword, confirmNewPassword } = passwords;

    // ตรวจสอบความถูกต้องของ oldPassword กับฐานข้อมูล
    const [isValidOldPassword, verifyErr] = await verifyOldPassword(oldPassword);
    if (verifyErr || !isValidOldPassword) {
      alert("Old password is incorrect!");
      return;
    }

    // ตรวจสอบรูปแบบรหัสผ่านใหม่
    if (!isPasswordValid(newPassword)) {
      alert(
        "Password must be at least 8 characters, with 1 lowercase, 1 uppercase, 1 number, and 1 special character.",
      );
      return;
    }

    // ตรวจสอบการยืนยันรหัสผ่าน
    if (newPassword !== confirmNewPassword) {
      alert("New passwords do not match!");
      return;
    }

    try {
      const [err] = await updatePassword({ oldPassword, newPassword });
      if (err) {
        alert(err.message || "Failed to update password");
      } else {
        alert("Password updated successfully!");
        setIsEditingPassword(false);
        setPasswords({ oldPassword: "", newPassword: "", confirmNewPassword: "" });
      }
    } catch (error) {
      console.error("Error updating password:", error);
      alert("An unexpected error occurred. Please try again.");
    }
  };

  const handleCancel = () => {
    setIsEditingPassword(false);
    setPasswords({ oldPassword: "", newPassword: "", confirmNewPassword: "" });
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!customer) {
    return <div>Loading...</div>;
  }

  return (
    <div className='h-[400px] bg-[#fdfaf5] p-8 shadow-md md:w-[540px] lg:w-[700px] xl:w-[900px]'>
      <div className='mb-6 flex items-center justify-between'>
        <h2 className='text-xl font-semibold text-gray-800'>Profile Information</h2>
        <EditButton />
      </div>

      <hr className='mb-6' />

      {customer && (
        <div className='flex'>
          <div className='w-1/2'>
            <p className='mb-8 text-gray-600'>
              <strong>Name</strong>: {customer.name}
            </p>
            <p className='mb-8 text-gray-600'>
              <strong>Email</strong>: {customer.email}
            </p>
            <p className='mb-8 text-gray-600'>
              <strong>Tel</strong>: {customer.mobile_phone || "No mobile phone"}
            </p>
            <p className='mb-8 text-gray-600'>
              <strong>DOB</strong>: {customer.date_of_birth || "No DOB"}
            </p>
            <p className='text-gray-600'>
              <strong>Password</strong>: ********{" "}
              <EditButton onClick={() => setIsEditingPassword(true)} />
            </p>
          </div>

          <div className='flex w-1/2 flex-col gap-y-2 border-l pl-6 text-gray-600'>
            <p>
              <strong>Billing address</strong>:
            </p>
            <p>{customer.name}</p>
            <p>Billing name and address must match the credit card you will be using.</p>
          </div>
        </div>
      )}

      {isEditingPassword && (
        <div className='mt-6 bg-white p-4 shadow-md'>
          <h3 className='mb-4 text-lg font-semibold text-gray-800'>Change Password</h3>
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
              <button className='bg-gray-300 px-4 py-2 hover:bg-gray-400' onClick={handleCancel}>
                Cancel
              </button>
              <button
                className='bg-black px-4 py-2 text-white hover:bg-green-600'
                onClick={handleSubmitPasswordChange}
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileInformation;
