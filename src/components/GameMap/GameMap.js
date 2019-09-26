import React, {useState, useEffect} from 'react';
import axios from 'axios';


function GameMap(props) {

    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        axios
        .get("https://mudapp-staging.herokuapp.com/api/rooms")

        .then(res => {
            setRooms(res.data);
        })
        .catch(error => {
            console.log(error.message);
        });
    }, []);  

  console.log('room', rooms)

  return (
    <div>Game Map</div>
  );
}

export default GameMap;