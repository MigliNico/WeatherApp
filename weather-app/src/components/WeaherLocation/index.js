import React from 'react'
import Location from './Location';
import WeatherData from './WeatherData/index';


const Index  = () => (
    <div>
        <Location city = {'Buenos Aires'}></Location>
        <WeatherData></WeatherData>
    </div>
);

export default Index;