import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import City from '../containers/city';
import { SetCity } from '../actions/index';

class CityList extends Component {
  componentWillMount() {
    this.props.SetCity;
  }

  renderList() {
    return this.props.cities.map((city) => {
      return (
        <City key={city.name} city={city} />
      );
    });
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {SetCity: SetCity},
    dispatch
  );
}

function mapStatetoProps(state) {
  return {
    cities: state.cities
  };
}

export default connect(mapStatetoProps, mapDispatchToProps)(CityList);

