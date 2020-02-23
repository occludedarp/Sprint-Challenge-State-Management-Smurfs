import React from 'react';
import { connect } from 'react-redux';

const SmurfGuest = (props) => {
  return(
    <div>
      <h3>Name: {props.smurfName}</h3>
      <h3>Age: {props.smurfAge}</h3>
      <h3>Height: {props.smurfHeight}</h3>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    smurfData: state.smurfData
  }
}

export default connect(
  mapStateToProps,
  {}
)(SmurfGuest)