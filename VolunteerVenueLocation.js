import React from "react";
import VolunteerVenueLocationMap from "./VolunteerVenueLocationMap";

const VolunteerVenueLocation = () => {
  return (
    <div className="main-section volunteer-venue-location">
      <div className="volunteer-venue-location-header-title main-section-header-title">
        Where is the volunteering venue?
      </div>
      <div className="volunteer-venue-location-body">
        <div className="volunteer-venue-location-info">
          <div className="volunteer-venue-location-info-item">
            <div
              id="volunteer-venue-location-info-item-address"
              className="volunteer-venue-location-info-item-label"
            >
              Address
            </div>
            <div className="volunteer-venue-location-info-item-value">
              Calle 20 55B, Chicxulub, Chicxulub Puerto, Yucatán, Mexico
            </div>
          </div>

          <div className="volunteer-venue-location-info-item">
            <div className="volunteer-venue-location-info-item-label">
              Landmark
            </div>
            <div className="volunteer-venue-location-info-item-value">
              Opposite of JBN Mall
            </div>
          </div>

          <div className="volunteer-venue-location-info-item">
            <div className="volunteer-venue-location-info-item-label">
              Direction
            </div>
            <div className="volunteer-venue-location-info-item-value">
              Get down at the Gateway of India and walk 100 m towards the Mini
              forest park.
            </div>
          </div>
        </div>
        <VolunteerVenueLocationMap></VolunteerVenueLocationMap>
      </div>
    </div>
  );
};

export default VolunteerVenueLocation;
