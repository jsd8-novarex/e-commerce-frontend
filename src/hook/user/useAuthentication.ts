import { useState } from "react";
import { handleInputObjectFieldChange } from "../../helpers/utils";
import { useNavigate } from "react-router-dom";
import client from "../../config/axiosConfig";
import { useCustomerProfile } from "../customers/useCustomerHooks";

type DataForVerifyType = {
  email: string;
  password: string;
};

function useAuthentication() {
  const navigate = useNavigate();
  const { fetchCustomerProfile } = useCustomerProfile();

  const [authStatus, setAuthStatus] = useState<string>("");
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);
  const [dataForVerify, setDataForVerify] = useState<DataForVerifyType>({
    email: "",
    password: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleInputObjectFieldChange<DataForVerifyType>(event, setDataForVerify);
    setHasError(false); // Reset error state when the user types
  };

  const handleAuthentication = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsProcessing(true);
    setAuthStatus("Verifying user information...");
    setHasError(false); // Reset error state when starting new authentication

    try {
      const response = await client.post("/auth/login", {
        email: dataForVerify.email,
        password: dataForVerify.password,
      });

      const { token } = response.data; // Backend ส่ง Token กลับมา
      localStorage.setItem("token", token);
      localStorage.setItem("email", dataForVerify.email);

      fetchCustomerProfile();

      setAuthStatus("Successfully authenticated.");
      setTimeout(() => {
        navigate("/", { replace: true });
      }, 500);
    } catch (error) {
      console.error("Error during login:", error);
      setAuthStatus("Invalid Email & Password. Please try again.");
      setHasError(true);
    }

    setIsProcessing(false);
  };

  return {
    authStatus,
    isProcessing,
    dataForVerify,
    handleInputChange,
    handleAuthentication,
    hasError, // Return hasError for use in the UI
  };
}

export default useAuthentication;
