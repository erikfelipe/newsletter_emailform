import React from "react";
import Card from "../../components/Card/index.tsx";
import illustrationDsk from "../../assets/images/illustration-sign-up-desktop.svg";
import iconList from "../../assets/images/icon-list.svg";

const NewsletterForm = () => {
  return (
    <Card>
      <section className="flex ">
        <section className="flex flex-col items-center">
          <div>
            <h1 className="font_Roboto-Bold text-4xl">Stay updated!</h1>
          </div>
          <div>
            <h2>Join 60,000+ product managers receiving monthly updates on:</h2>
          </div>
          <div>
            <ul>
              <div className="flex">
                <img src={iconList} alt="iconList" className="mr-2" />
                <li>Product discovery and building what matters</li>
              </div>
              <div>
                <img src={iconList} alt="iconList" />
                <li>Measuring to ensure updates are a success</li>
              </div>
              <div>
                <img src={iconList} alt="iconList" />
                <li>And much more!</li>
              </div>
            </ul>
          </div>
          <div>
            <p>Email address</p>
            <input placeholder="erikfelipebh@gmail.com" />
          </div>
          <button title="Subscribe to monthly newsletter" />
        </section>
        <section className="ml-3">
          <img src={illustrationDsk} alt="imageDsk" className="w-60 " />
        </section>
      </section>
    </Card>
  );
};

export default NewsletterForm;
