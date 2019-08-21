import React from "react";
import DonateGoodsToNeed from "./DonateGoodsToNeed";

const DonateImpactShare = () => {
  return (
    <div className="main-section donate-impact-share">
      <div className="donate-impact-share-header-title main-section-header-title">
        Donate. Impact. Inspire
      </div>
      <div className="donate-impact-share-body">
        <div className="donate-impact-share-header-image-container">
          <img
            className="donate-impact-share-header-image"
            src="assets/rectangle-23.png"
            alt="img"
          ></img>
        </div>
        <DonateGoodsToNeed></DonateGoodsToNeed>
      </div>
    </div>
  );
};

export default DonateImpactShare;
