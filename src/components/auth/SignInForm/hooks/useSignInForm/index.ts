import React, { ChangeEvent, useState } from "react";

export const useSignInForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const [isLinkedInLoading, setIsLinkedInLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [validationMessage, setValidationMessage] = useState("");

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (!e.target.value.includes("@")) {
      setValidationMessage("Please enter a valid email address");
      return;
    }
    setValidationMessage("");
  };

  const changeLoadingState = (loading: boolean) => {
    setIsLoading(loading);
  };

  const changeGoogleLoadingState = (loading: boolean) => {
    setIsGoogleLoading(loading);
  };

  const changeLinkedInLoadingState = (loading: boolean) => {
    setIsLinkedInLoading(loading);
  };

  return {
    isLoading,
    changeLoadingState,
    isGoogleLoading,
    changeGoogleLoadingState,
    isLinkedInLoading,
    changeLinkedInLoadingState,
    email,
    handleEmailChange,
    validationMessage,
  };
};
