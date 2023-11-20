import React from "react";
import "./style.css";

const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex justify-center items-center h-screen bg-color">
      <div className="p-4 bg-white flex flex-col items-center rounded-3xl shadow-mlg">
        {children}
      </div>
    </div>
  );
};

export default Card;
