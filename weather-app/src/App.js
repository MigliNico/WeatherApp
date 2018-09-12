import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Paper from "@material-ui/core/Paper";
import AppBarWeather from './components/AppBarWeather/AppBarWeather';
import './App.css';
import LocationList from "./components/LocationList";
import ForecastExtended from "./components/ForecastExtended";

const cities = [
    'Buenos Aires,ar',
    'Bogota,col',
    'Mexico,mx'
];

class App extends Component {

  constructor(){
      super();
      this.state = {city: null};
  }

  handleSelectedLocation = city => {
      this.setState({city});
    console.log(`handleSelectedLocation ${city}`)
  }
  render() {
    const {city} = this.state;
    return (
        <Grid>
            <Row>
                <Col xs={12}>
                    <AppBarWeather> </AppBarWeather>
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={6}>
                    <LocationList cities={cities} onSelectedLocation={this.handleSelectedLocation}></LocationList>
                </Col>
                <Col xs={12} md={6}>
                    <Paper elevation={4}>
                    <div className='detail'>
                        {city &&  <ForecastExtended city={city}></ForecastExtended>
                           }
                    </div>
                    </Paper>
                </Col>
            </Row>
        </Grid>
    );
  }
}

export default App;
