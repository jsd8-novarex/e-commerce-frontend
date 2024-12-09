import { useState } from "react";
import { handleInputObjectFieldChange, isPasswordValid } from "../../helpers/utils";
import client from "../../config/axiosConfig"; // Import axios client
import { useNavigate } from "react-router-dom";

type DataForVerifyType = {
  email: string;
  password: string;
  confirm_password: string;
};

function useRegistration() {
  const navigate = useNavigate();
  const [regStatus, setRegStatus] = useState<string>("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [dataForVerify, setDataForVerify] = useState<DataForVerifyType>({
    email: "",
    password: "",
    confirm_password: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleInputObjectFieldChange<DataForVerifyType>(event, setDataForVerify);
  };

  const isEmailValid = (email: string): boolean => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailRegex.test(email);
  };

  const handleRegistration = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsProcessing(true);
    setRegStatus("Verifying...");
    setErrors({ email: "", password: "", confirmPassword: "" });

    let valid = true;
    const newErrors: { [key: string]: string } = {};

    // Validation
    if (!isEmailValid(dataForVerify.email)) {
      newErrors.email = "Email is not valid.";
      valid = false;
    }
    if (!isPasswordValid(dataForVerify.password)) {
      newErrors.password =
        "Password must be at least 8 characters, with 1 lowercase, 1 uppercase, 1 number, and 1 special character.";
      valid = false;
    }
    if (dataForVerify.password !== dataForVerify.confirm_password) {
      newErrors.confirmPassword = "Passwords do not match.";
      valid = false;
    }

    // Show Errors
    if (!valid) {
      setErrors(newErrors);
      setRegStatus("Registration failed.");
      setIsProcessing(false);
      return;
    }

    // Call API
    try {
      const response = await client.post("/auth/register", {
        email: dataForVerify.email,
        password1: dataForVerify.password,
        password2: dataForVerify.confirm_password,
      });

      setRegStatus("Successfully registered.");
      setTimeout(() => {
        navigate("/sign-in", { replace: true });
      }, 500);

      setDataForVerify({ email: "", password: "", confirm_password: "" });

      console.log("API Response:", response.data);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error("API Error:", error.response?.data || error.message);
      setRegStatus("Registration failed. Please try again.");
    }

    setIsProcessing(false);
  };

  return {
    regStatus,
    errors,
    isProcessing,
    dataForVerify,
    handleInputChange,
    handleRegistration,
  };
}

export default useRegistration;
