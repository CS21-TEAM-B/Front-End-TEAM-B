import React, { useState, useEffect } from "react";
import axios from "axios";

import "./MAP UI.scss";
import Controls from "./Controls";
import SideMenu from "./SideMenu";

const Map = () => {
  const [map, setMap] = useState([]);
  const [details, setDetails] = useState({});
  const [direction, setDirection] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("https://lambda-mud-test.herokuapp.com/api/adv/init/")
      .then(res => {
        console.log(res);
        setDetails(res.data);
      });
  }, []);

  const handleClick = e => {
    e.preventDefault();
    setDirection(e.target.value);

    axios
      .post("https://lambda-mud-test.herokuapp.com/api/adv/move/", {
        direction
      })
      .then(res => {
        setDetails(res.data);
        setError(res.data.error_msg);
      });
  };

  console.log({ direction });
  console.log(error);

  return (
    <div className='main'>
      <div className='map-container'>
        <div className='left-side'>
          <h3>Welcome {details ? details.name : null}</h3>
          <div className='map'></div>
          <div className='error'>{error ? error : null}</div>
          <Controls handleClick={handleClick} />
        </div>
        <SideMenu details={details}></SideMenu>
      </div>
    </div>
  );
};

export default Map;
