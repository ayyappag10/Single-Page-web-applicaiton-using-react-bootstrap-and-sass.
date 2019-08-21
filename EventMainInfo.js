import React from "react";
import BackToExplore from "./BackToExplore";
import EventDetails from "./EventDetails";

const EventMainInfo = () => {
  return (
    <div className="event-main-info">
      <BackToExplore></BackToExplore>
      <EventDetails></EventDetails>
    </div>
  );
};

export default EventMainInfo;
