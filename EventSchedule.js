import React from "react";
import EventScheduleCard from "./EventSheduleCard";
import shortid from "shortid";

const EventSchedule = () => {
  const itemList = [
    {
      time: "00:09 AM",
      timeRange: "12:00 AM - 12:30 AM",
      title: "Orientation",
      description:
        "Jill, the volunteer coordinator at the food bank let the volunteers know about the food bank’s history, mission and other dos and don’ts."
    },
    {
      time: "10:09 AM",
      timeRange: "12:30 AM - 1:30 AM",
      title: "Food Collection",
      description:
        "Volunteers will go around Pike Place Market and collect donations from the shops at the market. They will bring back the stock to the food bank to give away to customers."
    },
    {
      time: "01:00 PM",
      timeRange: "1:30 AM - 2:40 AM",
      title: "Serve Customers at the Food Bank",
      description:
        "Volunteers will stand behind the counters, serve the customers at the food bank and make sure everyone goes home happy!"
    },
    {
      time: "3:05 PM",
      timeRange: "12:30 AM - 1:30 AM",
      title: "Team Retrospection",
      description:
        "Jill will organize a group huddle to go through the day's activities and decide on the things that made people happy and the things which could be improved upon."
    }
  ];
  return (
    <div className="event-schedule">
      {itemList.map(item => (
        <EventScheduleCard
          {...item}
          key={shortid.generate()}
        ></EventScheduleCard>
      ))}
    </div>
  );
};

export default EventSchedule;
