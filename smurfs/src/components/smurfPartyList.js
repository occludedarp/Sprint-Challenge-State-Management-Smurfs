import React from 'react';
import { connect } from 'react-redux';
import SmurfGuest from './smurfGuest'
import {getSmurfs} from '../actions/smurfActions'

const SmurfPartyList = ({smurfData}) => {

  getSmurfs();

  return(
    <div>
      {smurfData.map((smurf, index) => (
        <SmurfGuest smurfName={smurf.name} smurfAge={smurf.age} smurfHeight={smurf.height} key={index} />
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
  mapStateToProps
)(SmurfPartyList)