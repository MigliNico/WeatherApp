import React,{ Component } from 'react';
import Location from './Location';
import transformWeather from './../../services/transformWeather';
import WeatherData from './WeatherData/index';
import './styles.css';

const location = "Buenos Aires,ar";
const api_key = "1d2975541b6ee72b19773e809c98e560"
const api_weather = `http://api.openweathermap.org/data/2.5/weather/?q=${location}&appid=${api_key}`




class WeatherLocation  extends Component {

    constructor(){
        super();
        this.state = {
            city: 'Buenos Aires',
            data: null
        }

        console.log("constructor");
    }



    handleUpdateClick = () => {
        fetch(api_weather).then(data=> {
            return data.json();
        }).then(weather_data => {
            const data = transformWeather(weather_data);
            this.setState({data});
        });
        /*
        this.setState({
            data: data2
        });
        */
      console.log("Actualizado")
    };


    componentWillMount = () => {
     this.handleUpdateClick();
   }

   componentDidMount = () => {
    console.log("componentDidMount");
   }

    componentWillUpdate = () => {
        console.log("componentWillUpdate");
    }

    componentDidUpdate = () => {
        console.log("componentDidUpdate");
    }

   render () {
       console.log("render");
       const {city,data} = this.state;
     return <div className='weatherLocationCont'>
        <Location city = {city}></Location>
         {data ? <WeatherData data={data}></WeatherData> : 'Cargando...' }
     </div>
};

}

export default WeatherLocation;