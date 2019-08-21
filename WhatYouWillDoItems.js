import React from "react";
import WhatYouWillDoItem from "./WhatYouWillDoItem";
import shortid from "shortid";

const WhatYouWillDoItems = () => {
  const WhatYouWillDoItemList = [
    {
      imgsrc: "assets/clipboard.png",
      title: "Event schedule",
      active: true
    },
    {
      imgsrc: "assets/file-text.png",
      title: "Pre-requisites",
      active: false
    },
    {
      imgsrc: "assets/check-square.png",
      title: "Do's & Dont's",
      active: false
    },
    {
      imgsrc: "assets/clipboard.png",
      title: "-",
      active: false
    }
  ];
  return (
    <div className="what-you-will-do-items-container">
      {WhatYouWillDoItemList.map(item => {
        return (
          <WhatYouWillDoItem
            {...item}
            key={shortid.generate()}
          ></WhatYouWillDoItem>
        );
      })}
    </div>
  );
};

export default WhatYouWillDoItems;
