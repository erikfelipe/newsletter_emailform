import React, { useState } from "react";

interface inputTextProps {
  label: string;
  placeholder: string;
  onInputChange: (value: string) => void;
}

const InputText = ({ label, placeholder, onInputChange }: inputTextProps) => {
  const [text, setText] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setText(value);
    onInputChange(value); // Chamando a função de retorno de chamada com o valor do input
  };

  return (
    <div className="mt-8">
      <p className="font_Roboto-Bold">{label}</p>
      <input
        type="text"
        value={text}
        onChange={handleInputChange}
        placeholder={placeholder}
        className="border border-black px-4 py-2 rounded-md w-full"
      />
    </div>
  );
};

export default InputText;
