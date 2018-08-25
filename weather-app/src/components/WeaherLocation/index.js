import React,{ Component } from 'react'
import Location from './Location';
import WeatherData from './WeatherData/index';
import {SUN} from '../../constants/weathers';
import './styles.css';

const location = "Buenos Aires,ar";
const api_key = "1d2975541b6ee72b19773e809c98e560"
const api_weather = `http://api.openweathermap.org/data/2.5/weather/?q=${location}&appid=${api_key}`

const data1 = {
    temperature: 20,
    weatherState: SUN,
    humidity: 10,
    wind : '10 m/s'

}


class WeatherLocation  extends Component {

    constructor(){
        super();
        this.state = {
            city: 'Buenos Aires',
            data: data1
        }
    }

    handleUpdateClick = () => {
        fetch(api_weather);
        /*
        this.setState({
            data: data2
        });
        */
      console.log("Actualizado")
    };

   render () {
       const {city,data} = this.state;
     return <div className='weatherLocationCont'>
        <Location city = {city}></Location>
        <WeatherData data={data}></WeatherData>
        <button onClick={this.handleUpdateClick} >Actualizar</button>
     </div>
};

}

export default WeatherLocation;