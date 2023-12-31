import React, { useEffect, useState } from "react";
import Card from "../../components/Card/index.tsx";
import illustrationDsk from "../../assets/images/illustration-sign-up-desktop.svg";
import List from "../../components/List/index.tsx";
import iconList from "../../assets/images/icon-list.svg";
import InputText from "../../components/InputText/index.tsx";
import Button from "../../components/Button/index.tsx";
import { useNavigate } from "react-router-dom";

const NewsletterForm = () => {
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState("");
  const [buttonActive, setButtonActive] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const items = [
    { icon: iconList, text: "Product discovery and building what matters" },
    { icon: iconList, text: "Measuring to ensure updates are a success" },
    { icon: iconList, text: "And much more!" },
  ];

  const handleInputChange = (value: string) => {
    setInputValue(value);
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    if (!hasError && inputValue.length > 0) {
      navigate("/success", { state: { inputValue } });
    }
  };

  const handleInputReset = (resetValue: boolean) => {
    setSubmitted(resetValue);
  };

  useEffect(() => {
    if (inputValue.length > 0) {
      setButtonActive(true);
    } else {
      setButtonActive(false);
    }
  }, [inputValue]);

  return (
    <form onSubmit={handleFormSubmit}>
      <Card>
        <div className="p-4 bg-white flex flex-col items-center rounded-3xl shadow-mlg">
          <section className="flex">
            <section className="flex flex-col items-center justify-center">
              <div className="content-wrapper">
                <h1 className="font_Roboto-Bold text-5xl">Stay updated!</h1>
                <div>
                  <h2>
                    Join 60,000+ product managers receiving monthly updates on:
                  </h2>
                </div>
                <List items={items} />
                <InputText
                  label="Email address"
                  placeholder="email@company.com"
                  onInputChange={handleInputChange}
                  hasError={submitted && hasError}
                  setHasError={setHasError}
                  resetSubmitted={handleInputReset}
                />
                <Button
                  active={buttonActive}
                  text={"Subscribe to monthly newsletter"}
                />
              </div>
            </section>
            <section className="ml-3">
              <img src={illustrationDsk} alt="imageDsk" />
            </section>
          </section>
        </div>
      </Card>
    </form>
  );
};

export default NewsletterForm;
