import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';
import {SNOW} from '../../../constants/weathers';
import './styles.css';

const WeatherData = () => (
    <div className= 'weatherDataCont'>
        <WeatherTemperature temperature={20} weatherState={SNOW}></WeatherTemperature>
        <WeatherExtraInfo humidity = {80} wind = {"10 m/s"}></WeatherExtraInfo>
    </div>
)

export default WeatherData;