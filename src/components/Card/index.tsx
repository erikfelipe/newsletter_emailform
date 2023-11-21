import React from "react";
import "./style.css";

const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex justify-center items-center h-screen bg-color">
      {children}
    </div>
  );
};

export default Card;
