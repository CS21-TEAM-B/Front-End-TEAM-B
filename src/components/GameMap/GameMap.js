import React, {useState, useEffect} from 'react';
import axios from 'axios';


function GameMap(props) {

  const titles = [{
      title: 'Treasure Chamber',
      n_to: false,
      s_to: true,
      w_to: false,
      e_to: false
    },

    {
        title: 'Grand Overlook',
        n_to: false,
        s_to: true,
        w_to: false,
        e_to: false
    },

    {
        title: 'Foyer',
        n_to: true,
        s_to: true,
        w_to: false,
        e_to: true
    },

    {
        title: 'Narrow Passage',
        n_to: true,
        s_to: false,
        w_to: true,
        e_to: false
    },


    {
        title: 'Outside Cave Entrance',
        n_to: true,
        s_to: false,
        w_to: false,
        e_to: false
    }]


  


  return (
    <div className='map'>{

        titles.map(title => {

            return (
            props.details.title === title.title ? 
                <div className='map-room__active'>
                    {title.n_to ? ' N ' : ''}
                    {title.e_to ? ' E ' : ""} 
                    {title.w_to ? ' W ' : ""} 
                    {title.s_to ? ' S ' : ""}
                </div> 
            : <div className='map-room'>
               </div> 
            );
        })
    }</div>
  );
}

export default GameMap;