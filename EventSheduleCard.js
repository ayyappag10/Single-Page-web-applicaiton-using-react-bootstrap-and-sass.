import React from "react";

const EventScheduleCard = ({ time, timeRange, title, description }) => {
  return (
    <div className="event-schedule-card">
      <div className="event-schedule-card-time">
        <div className="event-schedule-card-time-text">{time}</div>
      </div>
      <div className="event-schedule-card-time-info-seperator">
        <div className="event-schedule-card-time-info-seperator-outer-rectangle">
          <div className="event-schedule-card-time-info-seperator-inner-rectangle"></div>
        </div>
        <div className="event-schedule-card-time-info-seperator-vertical-seperator"></div>
      </div>
      <div className="event-schedule-card-info">
        <div className="event-schedule-card-time-range">{timeRange}</div>
        <div className="event-schedule-card-title">{title}</div>
        <div className="event-schedule-card-text-content">{description}</div>
      </div>
    </div>
  );
};

export default EventScheduleCard;
