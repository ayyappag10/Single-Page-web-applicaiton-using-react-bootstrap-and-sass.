import React from "react";
import EventCarousel from "./EventCarousel";
import EventInfo from "./EventInfo";

const EventDetails = () => {
  return (
    <div className="event-details">
      <EventCarousel></EventCarousel>
      <EventInfo></EventInfo>
    </div>
  );
};

export default EventDetails;
