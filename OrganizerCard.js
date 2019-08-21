import React from "react";

const OrganizerCard = ({ role, name, photo, reputationPhoto }) => {
  return (
    <div className="organizer-card">
      <div className="organizer-card-role">{role}</div>
      <div className="organizer-card-body">
        <div className="organizer-card-photo-container">
          <img className="organizer-card-photo" src={photo} alt="img"></img>
          {reputationPhoto ? (
            <img
              className="organizer-card-rep-photo"
              src={reputationPhoto}
              alt="img"
            ></img>
          ) : null}
        </div>
        <span className="organizer-card-name">{name}</span>

        <div className="organizer-card-contact-items-container">
          <div className="organizer-card-contact-item">
            <img
              className="organizer-card-contact-icon mail-icon"
              src="assets/mail.png"
              alt="mail-icon"
            ></img>
          </div>
          <div className="organizer-card-contact-item">
            <img
              className="organizer-card-contact-icon phone-icon"
              src="assets/phone.png"
              alt="phone-icon"
            ></img>
          </div>
        </div>
      </div>

      <div className="organizer-card-seperator"></div>
    </div>
  );
};

export default OrganizerCard;
