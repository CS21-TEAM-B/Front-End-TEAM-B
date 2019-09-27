import React, { useState, useEffect } from "react";
import axios from "axios";

import "./MAP UI.scss";
import Controls from "./Controls";
import SideMenu from "./SideMenu";
import GameMap from "../components/GameMap/GameMap";

axios.defaults.headers.common["Authorization"] =
  "Token 9e5bf83c05c0f8012c5fccc12f9005a3ba5a879a";

const Map = () => {
//   const [map, setMap] = useState([]);
  const [details, setDetails] = useState({});
  const [direction, setDirection] = useState("");
  const [error, setError] = useState("");
  const [rooms, setRooms] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios
      .get("https://lambda-mud-test.herokuapp.com/api/adv/init/")
      .then(res => {
        console.log('init', res);
        setDetails(res.data);
        console.log(res.data)
      });
  }, []);

  useEffect(() => {
    axios
    .get("https://mudapp-staging.herokuapp.com/api/rooms")

    .then(res => {
        setRooms(res.data);
        setLoaded(true);
    })
    .catch(error => {
        console.log(error.message);
    });
  }, [loaded]); 

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


  console.log('rooms', rooms)
  return (
    <div className='main'>
      <div className='map-container'>
        <div className='left-side'>
          <h3>Welcome {details ? details.name : null}</h3>

          {console.log('loaded', loaded)}
          {loaded && <GameMap className='map' rooms={rooms}/>}

          <div className='error'>{error ? error : null}</div>
          <Controls handleClick={handleClick} />
        </div>
        <SideMenu details={details}></SideMenu>
      </div>
    </div>
  );
};

export default Map;
