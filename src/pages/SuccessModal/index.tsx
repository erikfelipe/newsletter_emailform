import React from "react";
import Card from "../../components/Card/index.tsx";
import iconSuccess from "../../assets/images/icon-success.svg";
import Button from "../../components/Button/index.tsx";

const SuccessModal = () => {
  return (
    <Card>
      <div className="content-success">
        <div>
          <img src={iconSuccess} alt="iconSuccess" />
        </div>
        <div>
          <h1 className="font_Roboto-Bold text-5xl">Thanks for subscribing!</h1>
        </div>
        <h2>
          A confirmation email has been sent to .... Please open it and click
          the button inside to confirm your subscription.
        </h2>
      </div>
      <Button active={true} />
    </Card>
  );
};

export default SuccessModal;
