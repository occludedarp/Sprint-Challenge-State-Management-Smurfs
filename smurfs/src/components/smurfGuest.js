import React from 'react';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions/smurfActions'


const SmurfGuest = (props) => {
  return(
    <div>
      {props.smurfName}
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
  {getSmurfs}
)(SmurfGuest)