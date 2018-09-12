import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import Location from './Location';
import transformWeather from './../../services/transformWeather';
import WeatherData from './WeatherData/index';
import './styles.css';

const api_key = "1d2975541b6ee72b19773e809c98e560"
const url = 'http://api.openweathermap.org/data/2.5/weather';





class WeatherLocation  extends Component {

    constructor({city}){
        super();
        this.state = {
            city,
            data: null
        }
    }






    componentWillMount = () => {
        const {city} = this.state;
        const api_weather = `${url}/?q=${city}&appid=${api_key}`
        fetch(api_weather).then(data=> {
            return data.json();
        }).then(weather_data => {
            const data = transformWeather(weather_data);
            this.setState({data});
        });
   }

   componentDidMount = () => {
   }

    componentWillUpdate = () => {
    }

    componentDidUpdate = () => {
    }

   render () {
       const {onWeatherLocationClick} = this.props;
       const {city,data} = this.state;
     return <div className='weatherLocationCont' onClick={onWeatherLocationClick}>
        <Location city = {city}></Location>
         {data ? <WeatherData data={data}></WeatherData> : 'Cargando...' }
     </div>
};

}

WeatherLocation.propTypes = {
    city : PropTypes.string,
    onWeatherLocationClick : PropTypes.func
}

export default WeatherLocation;