import React from "react";
import OrganizerCard from "./OrganizerCard";

const Organizers = () => {
  const organiserList = [
    {
      role: "Event captain (SPOC)",
      name: "Martin Robinson",
      photo: "assets/oval-5.png",
      reputationPhoto: "assets/group-30.png"
    },
    {
      role: "Organizer Primary Contact",
      name: "Georgia Craig",
      photo: "assets/oval-5_2.png",
      reputationPhoto: ""
    }
  ];
  return (
    <div className="organizers">
      <OrganizerCard {...organiserList[0]}></OrganizerCard>
      <OrganizerCard {...organiserList[1]}></OrganizerCard>
    </div>
  );
};

export default Organizers;
