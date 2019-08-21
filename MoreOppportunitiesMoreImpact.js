import React from "react";
import MoreOppportunitiesMoreImpactEventCard from "./MoreOpportunitiesMoreImpactEventCard";
import shortid from "shortid";

const MoreOppportunitiesMoreImpact = () => {
  const moreEvntsList = [
    {
      imgsrc: "assets/screenshot-2019-02-15-at-3-52-24-pm.png",
      evntname: "Warehouse helper, walk-in sorter and distributor",
      location: "Watford, United Kingdom",
      date: "Thursday, December 12, 2019",
      slotsleft: "20",
      totalslots: "100",
      lastdate: "Dec 6"
    },
    {
      imgsrc: "assets/screenshot-2019-02-15-at-4-03-32-pm.png",
      evntname: "Exercise, play & clean your beach",
      location: "Chicxulub puerto, Mexico",
      date: "Tuesday, February 12, 2019",
      slotsleft: "20",
      totalslots: "100",
      lastdate: "Feb 6"
    },
    {
      imgsrc: "assets/screenshot-2019-02-15-at-4-08-51-pm.png",
      evntname: "Be a food collection agent for a day",
      location: "Chicxulub puerto, Mexico",
      date: "Sunday, October 13, 2019",
      slotsleft: "20",
      totalslots: "100",
      lastdate: "Oct 6"
    }
  ];
  return (
    <div className="main-section more-opportunities-more-impact">
      <div className="more-opportunities-more-impact-header-title main-section-header-title">
        More opportunities. More impact
      </div>
      <div className="more-opportunities-more-impact-body">
        {moreEvntsList.map(item => (
          <MoreOppportunitiesMoreImpactEventCard
            {...item}
            key={shortid.generate()}
          ></MoreOppportunitiesMoreImpactEventCard>
        ))}
      </div>
    </div>
  );
};

export default MoreOppportunitiesMoreImpact;
