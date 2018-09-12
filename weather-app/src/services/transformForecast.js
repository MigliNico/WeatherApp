import moment from 'moment';
import 'moment/locale/es';
import transformWeather from "./transformWeather";
const transformForecast  = data => {
return data.list.filter( item => ( // AGREGUÉ EL RETURN
    moment.unix(item.dt).hour() === 6 ||
    moment.unix(item.dt).hour() === 12 ||
    moment.unix(item.dt).hour() === 18
)).map(item => (
    {
        weekDay: moment.unix(item.dt).format('dd'),
        hour : moment.unix(item.dt).hour(),
        data: transformWeather(item)
    }
))
};

export default transformForecast;