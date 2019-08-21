import React from "react";

const VolunteerVenueLocationMap = () => {
  return (
    <div className="volunteer-venue-location-map">
      <img
        className="volunteer-venue-location-map-image"
        src="assets/map-icon.jpg"
        alt="img"
      ></img>
      <button className="volunteer-venue-location-map-get-directions-button">
        GET DIRECTION
        <img
          className="volunteer-venue-location-map-get-directions-icon"
          src="assets/shape_3.png"
          alt="direction"
        ></img>
      </button>
    </div>
  );
};

export default VolunteerVenueLocationMap;
