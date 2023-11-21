import React, { useState } from "react";
import classNames from "classnames";

interface InputTextProps {
  label: string;
  placeholder: string;
  onInputChange: (value: string) => void;
  hasError?: boolean;
  setHasError: React.Dispatch<React.SetStateAction<boolean>>;
  resetSubmitted: (resetValue: boolean) => void;
}

const InputText = ({
  label,
  placeholder,
  onInputChange,
  hasError,
  setHasError,
  resetSubmitted,
}: InputTextProps) => {
  const [text, setText] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setText(value);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailRegex.test(value);

    onInputChange(value);

    if (value.trim().length === 0) {
      setHasError(false);
      resetSubmitted(false);
    } else {
      setHasError(!isValidEmail);
    }
  };

  const inputClasses = classNames("border px-4 py-2 rounded-md w-full", {
    "border-black": !hasError,
    "bg-rose-100": hasError,
    "border-red-500": hasError,
  });

  return (
    <div className="mt-8 flex flex-col">
      <div className="flex items-center justify-between mb-2">
        <p className="font_Roboto-Bold">{label}</p>
        {hasError && <p className="text-red-500 ml-2">Valid email required</p>}
      </div>
      <input
        type="text"
        value={text}
        onChange={handleInputChange}
        placeholder={placeholder}
        className={inputClasses}
      />
    </div>
  );
};

export default InputText;
