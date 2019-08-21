import React from "react";

const MoreOppportunitiesMoreImpactEventCard = (props) => {
console.log(props);
  const {
    imgsrc,
    evntname,
    location,
    date,
    slotsleft,
    totalslots,
    lastdate
  } = props;
  return (
    <div className="more-opportunities-more-impact-event-card">
      <div className="more-opportunities-more-impact-event-card-image">
        <img src={imgsrc} alt="img"></img>
      </div>

      <div className="more-opportunities-more-impact-event-card-info">
        <div className="more-opportunities-more-impact-event-card-name">
          {evntname}
        </div>

        <div className="more-opportunities-more-impact-event-card-info-item more-opportunities-more-impact-event-card-location">
          <img
            className="more-opportunities-more-impact-event-card-info-item-icon more-opportunities-more-impact-event-card-location-icon"
            src="assets/gi-db-icons-location-copy.png"
            alt="img"
          ></img>
          <div className="more-opportunities-more-impact-event-card-info-item-text more-opportunities-more-impact-event-card-location-text">
            {location}
          </div>
        </div>

        <div className="more-opportunities-more-impact-event-card-info-item more-opportunities-more-impact-event-card-date">
          <img
            className="more-opportunities-more-impact-event-card-info-item-icon more-opportunities-more-impact-event-card-date-icon"
            src="assets/gi-db-icons-event-copy-3.png"
            alt="img"
          ></img>
          <div className="more-opportunities-more-impact-event-card-info-item-text more-opportunities-more-impact-event-card-date-text">
            {date}
          </div>
        </div>

        <div className="more-opportunities-more-impact-event-card-info-item more-opportunities-more-impact-event-card-slots-left">
          <img
            className="more-opportunities-more-impact-event-card-info-item-icon more-opportunities-more-impact-event-card-slots-left-icon"
            src="assets/add-user.png"
            alt="img"
          ></img>
          <div className="more-opportunities-more-impact-event-card-info-item-text more-opportunities-more-impact-event-card-slots-left-text">
            {slotsleft} of {totalslots} slots left
          </div>

          <div className="more-opportunities-more-impact-event-card-last-date">
            (Register before {lastdate}th)
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreOppportunitiesMoreImpactEventCard;
