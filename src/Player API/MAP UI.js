import React, { useState } from "react";

import "./MAP UI.scss";
import Controls from "./Controls";
import SideMenu from "./SideMenu";

const Map = () => {
  const [map, setMap] = useState([]);
  const [direction, setDirection] = useState("");

  return (
    <div className='main'>
      <div className='map-container'>
        <div className="left-side">
          <div className='map'>hello</div>
          <Controls />
        </div>
        <SideMenu></SideMenu>
      </div>
    </div>
  );
};

export default Map;
