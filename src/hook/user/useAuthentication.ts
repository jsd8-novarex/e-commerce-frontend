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
  const [dataForVerify, setDataForVerify] = useState<DataForVerifyType>({
    email: "",
    password: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleInputObjectFieldChange<DataForVerifyType>(event, setDataForVerify);
  };

  const handleAuthentication = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsProcessing(true);
    setAuthStatus("Verifying user information...");

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
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error("Error during login:", error.response?.data || error.message);
      setAuthStatus("Invalid credentials. Please try again.");
    }

    setIsProcessing(false);
  };

  return {
    authStatus,
    isProcessing,
    dataForVerify,
    handleInputChange,
    handleAuthentication,
  };
}

export default useAuthentication;
