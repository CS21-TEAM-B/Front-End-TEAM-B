import React, {useState, useEffect} from 'react';
import axios from 'axios';


function GameMap(props) {
  


  return (
    <div className='map'>{
        props.rooms.map((room => {
            return <div className={room.id === 868 ? 'map-room__active' : 'map-room'}></div> 
        }))
    }</div>
  );
}

export default GameMap;