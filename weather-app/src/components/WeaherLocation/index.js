import React from 'react'
import Location from './Location';
import WeatherData from './WeatherData/index';
import './styles.css';


const Index  = () => (
    <div className='weatherLocationCont'>
        <Location city = {'Buenos Aires'}></Location>
        <WeatherData></WeatherData>
    </div>
);

export default Index;