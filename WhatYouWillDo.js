import React from "react";
import WhatYouWillDoItems from "./WhatYouWillDoItems";
import WhatYouWillDoItemInfo from "./WhatYouWillDoItemInfo";
import EventSchedule from "./EventSchedule";

const WhatYouWillDo = () => {
  return (
    <div className="main-section what-you-will-do">
      <div className="what-you-will-do-header-title main-section-header-title">
        What you will be doing
      </div>
      <div className="what-you-will-do-header-info main-section-header-info">
        You will be going to all our Chicxulub Food Bank associate vendors and
        collect food donations from them. We have over 10 such vendors across
        the market. The entire process of going around collecting food on our
        food cart is fun and is sure to make you feel special. And yes, be ready
        to say ‘Excuse Me’ while moving through the crowd!
      </div>
      <div className="what-you-will-do-body">
        <WhatYouWillDoItems></WhatYouWillDoItems>
        <div className="what-you-will-do-item-info-seperator"></div>
        <WhatYouWillDoItemInfo>
          <EventSchedule></EventSchedule>
        </WhatYouWillDoItemInfo>
      </div>
    </div>
  );
};

export default WhatYouWillDo;
