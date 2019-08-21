import React from "react";

const DonateGoodsToNeed = () => {
  return (
    <div className="donate-goods-to-need">
      <div className="donate-goods-to-need-header-title">
        Donating goods to those in need
      </div>
      <div className="donate-goods-to-need-info">
        Here's a glimpse into the lives of the kids in Sewri. Help them receive
        an excellent education. Here's a glimpse into the lives of the kids.
      </div>
      <div className="support-info">
        <span className="support-info-numbers money-pledged">$.28,304</span>
        <span className="support-info-text pledged-info">Pledged so far</span>

        <span className="support-info-numbers no-of-supporters">123</span>
        <span className="support-info-text supporter-info">Supporters</span>
      </div>
      <button id="donate-now-button">DONATE NOW</button>
    </div>
  );
};

export default DonateGoodsToNeed;
