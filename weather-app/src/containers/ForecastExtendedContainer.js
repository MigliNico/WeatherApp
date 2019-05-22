import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {setCity} from "../actions";
import {connect} from "react-redux";
import ForecastExtended from "../components/ForecastExtended";

class ForecastExtendedContainer extends Component{

    handleSelectedLocation = city => {
        this.props.setCity(city);
    }

    render() {
        return (
            this.props.city &&
            <ForecastExtended city={this.props.city}> </ForecastExtended>
        );
    }
}

ForecastExtendedContainer.propTypes = {
    city: PropTypes.string.isRequired,
}

const mapDispatchToProps = dispatch => ({
    setCity: value => dispatch(setCity(value))
});

const mapStateToProps = ({ city}) => ({ city});
export default connect(mapStateToProps,null)(ForecastExtendedContainer);