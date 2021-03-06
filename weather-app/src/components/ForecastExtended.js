import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import transformForecast from './../services/transformForecast';
import './styles.css';

// const days = [
    //'Lunes',
    //'Martes',
    //'Miercoles',
    //'Jueves',
  //  'Viernes'
//]

// const data = {
    //temperature : 10,
    //humidity : 10,
   // weatherState: 'normal',
    //wind : 'normal'
//}


const api_key = "1d2975541b6ee72b19773e809c98e560"
const url = 'http://api.openweathermap.org/data/2.5/forecast';

class ForecastExtended extends Component{

    constructor() {
        super();
        this.state = {forecastData: null}
    }

    updateCity = city => {
        const url_forecast = `${url}/?q=${city}&appid=${api_key}`

        fetch(url_forecast).then(
            data => (data.json())
        ).then(
            weather_data => {
                console.log("wheather_data")
                console.log(weather_data);
                console.log("forecastData")
                const forecastData = transformForecast(weather_data);
                console.log(forecastData);
                this.setState({forecastData});
            }
        )
        ;
    }

    componentDidMount () {
        console.log("didMount")
      this.updateCity(this.props.city);
    }

    componentWillReceiveProps (nextProps) {
     if(nextProps.city != this.props.city){
         this.setState({forecastData : null});
         this.updateCity(nextProps.city);
     }
    }

    renderProgress = () => {
        return  <h3>Cargando Pronostico Extendido...</h3>;
    }



    renderForecastItemDays(forecastData) {
        return forecastData.map(forecast => (<ForecastItem
            key = {`${forecast.weekDay}${forecast.hour}`}
            weekDay={forecast.weekDay}
            hour={forecast.hour}
            data={forecast.data}></ForecastItem>))
    }

    render() {
        const {city} = this.props;
        const {forecastData} = this.state;
        return (
            <div>
                <h2 className='forecast-title'>Pronostico Extendido para {city} </h2>
                {forecastData ? this.renderForecastItemDays(forecastData) : this.renderProgress()}
            </div>
        );
    }
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired
}
export default ForecastExtended;