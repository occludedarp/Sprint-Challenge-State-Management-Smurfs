import React from 'react';
import { connect } from 'react-redux';
// import { getSmurfs } from '../actions/smurfActions'

const SmurfGuest = (props) => {
  return(
    <div style={{"display":"flex","justifyContent":"center"}} >
      <div style={{"display":"flex","flexDirection":"column","justifyContent":"center","width": "300px", "height":"300px", "border":"2px solid dodgerBlue", "borderRadius":"15px", "background":"whitesmoke"}}>
        <h3>Name: {props.smurfName}</h3>
        <h3>Age: {props.smurfAge}</h3>
        <h3>Height: {props.smurfHeight}</h3>
      </div>
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