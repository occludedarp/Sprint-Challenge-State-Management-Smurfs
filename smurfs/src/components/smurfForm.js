import React from 'react';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions/smurfActions'

const SmurfForm = (props) => {
  return(
    <>

      <form onSubmit={(e) => {e.preventDefault();}}>
        <input />
        <input />
        <input />

        <button onClick={props.getSmurfs}>show me the smurfs </button>
      
      </form>
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
  {getSmurfs}
)(SmurfForm)
