import React from 'react';
import { connect } from 'react-redux';
import SmurfGuest from './smurfGuest'

const SmurfPartyList = (props) => {
  return(
    <>
      {props.smurfData.map(smurf => (
        <SmurfGuest smurfName={smurf.name} />
      ))}
    </>
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
)(SmurfPartyList)