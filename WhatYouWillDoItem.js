import React from "react";

const WhatYouWillDoItem = ({ imgsrc, title, active }) => {
  return (
    <div className="what-you-will-do-item">
      {active ? (
        <div>
          <div className="what-you-will-do-active-item">
            <img
              className="what-you-will-do-item-icon what-you-will-do-active-item-icon"
              src={imgsrc}
              alt="whatyouwilldoactiveitemicon"
            ></img>
            {title}
          </div>
          <div className="what-you-will-do-active-item-right-border"></div>
        </div>
      ) : (
        <div className="what-you-will-do-inactive-item">
          <img
            className="what-you-will-do-item-icon what-you-will-do-inactive-item-icon"
            src={imgsrc}
            alt="whatyouwilldoinactiveitemicon"
          ></img>
          {title}
        </div>
      )}

      <div className="what-you-will-do-item-seperator"></div>
    </div>
  );
};

export default WhatYouWillDoItem;
