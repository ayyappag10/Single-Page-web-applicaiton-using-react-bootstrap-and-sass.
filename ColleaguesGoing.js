import React from "react";
import ColleagueCard from "./ColleagueCard";
import shortid from "shortid";

const ColleaguesGoing = () => {
  const colleagueList = [
    {
      imgsrc: "assets/oval-5_3.png",
      name: "Hazel graze Lancaster",
      designation: "Project manager",
      teamAndLocation: "CSR Team, Origgio VA"
    },

    {
      imgsrc: "assets/oval-5_4.png",
      name: "Garrett Curtis",
      designation: "",
      teamAndLocation: "Tech team, Origgio VA"
    },

    {
      imgsrc: "assets/oval-5_5.png",
      name: "Martha Lowe",
      designation: "",
      teamAndLocation: "Origgio VA"
    },

    {
      imgsrc: "assets/oval-5_6.png",
      name: "NG 110",
      designation: "HR Manger",
      teamAndLocation: "Origgio VA"
    },
    {
      imgsrc: "assets/oval-5_7.png",
      name: "Perly Maany",
      designation: "Tech head",
      teamAndLocation: "Tech team, Origgio VA"
    },
    {
      imgsrc: "assets/oval-5_8.png",
      name: "Angel D maria",
      designation: "Project manger",
      teamAndLocation: "Product team, Origgio VA"
    },
    {
      imgsrc: "assets/oval-5_3.png",
      name: "Hazel graze Lancaster",
      designation: "Project manager",
      teamAndLocation: "CSR Team, Origgio VA"
    },

    {
      imgsrc: "assets/oval-5_4.png",
      name: "Garrett Curtis",
      designation: "",
      teamAndLocation: "Tech team, Origgio VA"
    },

    {
      imgsrc: "assets/oval-5_5.png",
      name: "Martha Lowe",
      designation: "",
      teamAndLocation: "Origgio VA"
    }
  ];
  return (
    <div className="main-section colleagues-going">
      <div className="colleagues-going-header-title main-section-header-title">
        134 of your colleagues will be making a difference, join them
      </div>
      <div className="colleagues-going-body">
        {colleagueList.map(item => (
          <ColleagueCard {...item} key={shortid.generate()}></ColleagueCard>
        ))}
      </div>
      <button className="view-all-colleagues-button">VIEW ALL</button>
    </div>
  );
};

export default ColleaguesGoing;
