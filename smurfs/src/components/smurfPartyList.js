import React from 'react';
import { connect } from 'react-redux';
import SmurfGuest from './smurfGuest'

const SmurfPartyList = ({smurfData}) => {
  return(
    <div>
      {smurfData.map((smurf, index) => (
        <SmurfGuest smurfName={smurf.name} key={index} />
      ))}
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
)(SmurfPartyList)