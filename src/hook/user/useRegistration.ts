import { useState } from "react";
import { handleInputObjectFieldChange, isPasswordValid } from "../../helpers/utils";

type DataForVerifyType = {
    email: string;
    password: string;
    confirm_password: string;
  };

function useRegistration() {
    const [regStatus, setRegStatus] = useState<string>("");
    const [isProcessing, setIsProcessing] = useState<boolean>(false);
    const [dataForVerify, setDataForVerify] = useState<DataForVerifyType>({
    email: "",
    password: "",
    confirm_password: ""
  });
    
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        handleInputObjectFieldChange<DataForVerifyType>(event, setDataForVerify);
    };
    
    const isEmailValid = (email: string): boolean => {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return emailRegex.test(email);
    };

    const handleRegistration = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        setIsProcessing(true);
        setRegStatus("Verifying...");

        if (!isEmailValid(dataForVerify.email)) {
            setRegStatus('Email is not Valid.');
          } else if (!isPasswordValid(dataForVerify.password)) {
            setRegStatus('The password must be more than 8 characters, at least 1 lower case, 1 upper case, 1 numeric character, and one special character.');
          } else if (dataForVerify.password !== dataForVerify.confirm_password) {
            setRegStatus('Password & Confirm Password do not match');
          } else {
            setRegStatus("Successfully registered.");
            setDataForVerify({
                email: "",
                password: "",
                confirm_password: "",
              });
          }
          setIsProcessing(false);
        };       

    return {
        regStatus,
        isProcessing,
        dataForVerify,
        handleInputChange,
        handleRegistration
    }
  };


export default useRegistration