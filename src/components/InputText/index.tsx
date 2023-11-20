import React from "react";

interface inputTextProps {
  label: string;
  placeholder: string;
}

const InputText = ({ label, placeholder }: inputTextProps) => {
  return (
    <div className="mt-8">
      <p className="font_Roboto-Bold">{label}</p>
      <input
        type="text"
        placeholder={placeholder}
        className="border border-black px-4 py-2 rounded-md w-full"
      />
    </div>
  );
};

export default InputText;
