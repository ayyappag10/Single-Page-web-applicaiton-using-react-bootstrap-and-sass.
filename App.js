import React from "react";
import "./App.scss";
import AppNavBar from "./AppNavBar";
import EventMainInfo from "./EventMainInfo";
import EventAdditionalDetails from "./EventAdditionalDetails";
import VenueAndOrganizers from "./VenueAndOrganizers";
import WhatYouWillDo from "./WhatYouWillDo";
import ColleaguesGoing from "./ColleaguesGoing";
import VolunteerVenueLocation from "./VolunteerVenueLocation";
import DonateImpactShare from "./DonateImpactShare";
import MoreOppportunitiesMoreImpact from "./MoreOppportunitiesMoreImpact";
import Announcements from "./Announcements";

function App() {
  return (
    <div className="app">
      <AppNavBar></AppNavBar>
      <div className="main-section-seperator nav-bar-body-seperator"></div>
      <EventMainInfo></EventMainInfo>
      <div className="main-section-seperator"></div>
      <EventAdditionalDetails></EventAdditionalDetails>
      <div className="main-section-seperator"></div>
      <VenueAndOrganizers></VenueAndOrganizers>
      <WhatYouWillDo></WhatYouWillDo>
      <ColleaguesGoing></ColleaguesGoing>
      <VolunteerVenueLocation></VolunteerVenueLocation>
      <DonateImpactShare></DonateImpactShare>
      <MoreOppportunitiesMoreImpact></MoreOppportunitiesMoreImpact>
      <Announcements></Announcements>
    </div>
  );
}

export default App;
