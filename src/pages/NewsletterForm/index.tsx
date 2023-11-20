import React, { useState } from "react";
import Card from "../../components/Card/index.tsx";
import illustrationDsk from "../../assets/images/illustration-sign-up-desktop.svg";
import List from "../../components/List/index.tsx";
import iconList from "../../assets/images/icon-list.svg";
import InputText from "../../components/InputText/index.tsx";
import Button from "../../components/Button/index.tsx";

const NewsletterForm = () => {
  const [inputValue, setInputValue] = useState("");

  const items = [
    { icon: iconList, text: "Product discovery and building what matters" },
    { icon: iconList, text: "Measuring to ensure updates are a success" },
    { icon: iconList, text: "And much more!" },
  ];

  const handleInputChange = (value: string) => {
    setInputValue(value); // Atualizando o estado com o valor do input
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(inputValue);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <Card>
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
                placeholder="erikfelipebh@gmail.com"
                onInputChange={handleInputChange}
              />
              <Button />
            </div>
          </section>
          <section className="ml-3">
            <img src={illustrationDsk} alt="imageDsk" />
          </section>
        </section>
      </Card>
    </form>
  );
};

export default NewsletterForm;
