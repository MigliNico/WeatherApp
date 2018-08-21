import React from 'react'
import Location from './Location';
import WeatherData from './WeatherData/index';
import {SUN} from '../../constants/weathers';
import './styles.css';

const data = {
    temperature: 20,
    weatherState: SUN,
    humidity: 10,
    wind : '10 m/s'

}

const WeatherLocation  = () => (
    <div className='weatherLocationCont'>
        <Location city = {'Buenos Aires'}></Location>
        <WeatherData data={data}></WeatherData>
    </div>
);

export default WeatherLocation;