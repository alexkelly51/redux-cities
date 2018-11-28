import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { selectCity } from "../actions";


class City extends Component {

  handleClick = () => {
      this.props.selectCity(this.props.city);
    }

  render () {

    return (
      <div onClick={this.handleClick} key={this.props.city.address} className={(this.props.city == this.props.selectedCity) ? 'list-group-item active' : 'list-group-item'}>
        <div className="card-description">
          <h2>{this.props.city.name}</h2>
        </div>
      </div>
      )
  }
}

function mapStateToProps(state) {
  return {
    selectedCity: state.selectedCity
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectCity: selectCity },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(City);

