import React from "react";

const Announcements = () => {
  return (
    <div className="announcements">
      <img
        className="announcements-icon"
        src="assets/download-21.png"
        alt="img"
      ></img>
      <span className="announcements-text">Announcements</span>
      <div className="announcements-unread-container">
        <div className="announcements-unread-number">2</div>
      </div>
      <img src="assets/chevron-up.png" alt="img"></img>
    </div>
  );
};

export default Announcements;
