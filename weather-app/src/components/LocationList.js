import React from 'react';
import WeatherLocation from "./WeaherLocation";

const LocationList = () => (
    <div>
       <WeatherLocation city = {'Buenos Aires,ar'}/>
        <WeatherLocation city = {'Bogota,col'}/>
    </div>

);

export default LocationList;