import React from "react";
import "./style.css";

const Card = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-color">
      <div className="p-4 bg-white flex flex-col items-center rounded-lg shadow-md">
        <section>
          <div>
            <h1>Stay updated!</h1>
          </div>
          <div>
            <h2>Join 60,000+ product managers receiving monthly updates on:</h2>
          </div>
          <div>
            <ul>
              <div>
                <img src="" alt="" />
                <li>Product discovery and building what matters</li>
              </div>
              <div>
                <img src="" alt="" />
                <li>Measuring to ensure updates are a success</li>
              </div>
              <div>
                <img src="" alt="" />
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
        <section>
          <img src="" alt="" />
        </section>
      </div>
    </div>
  );
};

export default Card;
