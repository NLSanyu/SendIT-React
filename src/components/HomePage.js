import React from "react";
import Header from "./Header";

export const HomePage = () => {
  return (
    <div>
      <Header home="Home" login="Log In" signup="Create an account" />
      <div className="home-image">
        <img className="home-image" src="https://res.cloudinary.com/dnmzjr0a9/image/upload/v1556607734/SendIT/parcel_ilaa8f.jpg" />
      </div>
      <div className="home-info">
        <p className="info-title">
          SendIT is a courier service that helps users deliver parcels to
          different destinations.
        </p>
        <p className="info-title">
          SendIT provides courier quotes based on weight categories
        </p>
        <p className="info-title">
          Benefit from the best services on the market, with our quick and safe
          deliveries and unbeatable prices. Get value for your money every
          single time!
        </p>
        <p className="info-title">
          Orders are priced starting from a base price of UGX (Uganda Shillings)
          3000
        </p>
      </div>
    </div>
  );
};

export default HomePage;
