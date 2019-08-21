import React from "react";
import VenueInfo from "./VenueInfo";
import Organizers from "./Oragnizers";
import EventGoals from "./EventGoals";

const VenueAndOrganizers = () => {
  return (
    <div className="venue-and-organizers">
      <VenueInfo></VenueInfo>
      <div className="organizers-and-goals">
        <Organizers></Organizers>
        <EventGoals></EventGoals>
      </div>
    </div>
  );
};
export default VenueAndOrganizers;
