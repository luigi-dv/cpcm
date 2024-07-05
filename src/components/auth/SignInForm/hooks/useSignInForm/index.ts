import { ChangeEvent, useState } from "react";

export const useSignInForm = () => {
  const [email, setEmail] = useState("");
  const [validationMessage, setValidationMessage] = useState("");
  const [validationState, setValidationState] = useState<
    "success" | "error" | "warning" | "none"
  >("none");

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (!e.target.value.includes("@")) {
      setValidationMessage("Please enter a valid email address");
      setValidationState("error");
      return;
    }
    setValidationMessage("");
    setValidationState("none");
  };

  return {
    email,
    validationMessage,
    validationState,
    handleEmailChange,
  };
};
