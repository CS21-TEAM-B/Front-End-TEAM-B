import React, { useState } from 'react';

import './MAP UI.scss'
import Controls from './Controls';

const Map = () => {

    const [map, setMap] = useState([])
    const [direction, setDirection] = useState('')
    
    return <div className="main">
        <div className="map-container">
            <div className="map">
                hello
            </div>
            <Controls/>
            </div>
        </div> 
}
 
export default Map;