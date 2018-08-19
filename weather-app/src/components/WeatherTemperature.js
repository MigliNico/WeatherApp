import React from 'react';
import WeatherIcons from 'react-weathericons';

const WeatherTemperature = ({temperature,weatherState}) => (
    <div>
        <WeatherIcons name = "sleet" size = "2x"/>
        <span> {`${temperature} C°`}</span>
    </div>
)

export default WeatherTemperature;