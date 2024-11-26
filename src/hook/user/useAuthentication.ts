import { useState } from "react";
import { handleInputObjectFieldChange } from "../../helpers/utils";
import { useNavigate } from "react-router-dom";

type DataForVerifyType = {
  email: string;
  password: string;
};

function useAuthentication() {
  const navigate = useNavigate();

  const [authStatus, setAuthStatus] = useState<string>("");
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [dataForVerify, setDataForVerify] = useState<DataForVerifyType>({
    email: "",
    password: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleInputObjectFieldChange<DataForVerifyType>(event, setDataForVerify);
  };

  const handleAuthentication = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsProcessing(true);
    setAuthStatus("Verifying user information...");

    if (dataForVerify.email === "earth@gamil.com" && dataForVerify.password === "12345678") {
      setAuthStatus("Successfully authenticated.");
      setTimeout(() => {
        navigate("/", { replace: true });
      }, 500);
    } else {
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
