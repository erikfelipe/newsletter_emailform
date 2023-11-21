import React from "react";
import Card from "../../components/Card/index.tsx";
import iconSuccess from "../../assets/images/icon-success.svg";
import Button from "../../components/Button/index.tsx";
import { useNavigate, useLocation } from "react-router-dom";

const SuccessModal = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const inputValue = location.state?.inputValue;

  return (
    <Card>
      <div className="p-4 bg-white flex flex-col items-center rounded-3xl shadow-mlg Card">
        <div className="content-success">
          <div>
            <img src={iconSuccess} alt="iconSuccess" />
          </div>
          <div>
            <h1 className="font_Roboto-Bold text-5xl">
              Thanks for subscribing!
            </h1>
          </div>
          <h2>
            A confirmation email has been sent to <strong>{inputValue}</strong>.
            Please open it and click the button inside to confirm your
            subscription.
          </h2>
        </div>
        <div onClick={() => navigate("/")}>
          <Button active={true} text={"Dimiss message"} />
        </div>
      </div>
    </Card>
  );
};

export default SuccessModal;
