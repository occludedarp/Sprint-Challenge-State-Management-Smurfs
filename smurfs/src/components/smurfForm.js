import React, {useState} from 'react';
import { connect } from 'react-redux';
import { makeSmurf } from '../actions/smurfActions'

const SmurfForm = ({makeSmurf}) => {

  const [smurf, setSmurf] = useState({name: 'johnny', age: 230, height: " ", id: 0})

  const handleChange = (e) => {
    e.preventDefault();
    setSmurf({...smurf, [e.target.name]: e.target.value})
  }

  const handleSmurf = (smurf) => {
    makeSmurf(smurf)
    setSmurf({name: ' ', age: ' ', height: ' ', id: ' '})
  }

  return(
    <div style={{"display": "flex", "justifyContent":"center"}}>

      <form onSubmit={(e) => {e.preventDefault(); handleSmurf(smurf)}} style={{"display":"flex", "flexDirection":"column", "width":"350px"}}>
        <input onChange={handleChange} name="name" value={smurf.name} style={{"margin":"3% auto"}}/>
        <input onChange={handleChange} name="age" value={smurf.age} style={{"margin":"3% auto"}}/>
        <input onChange={handleChange} name="height" value={smurf.height} style={{"margin":"3% auto"}}/>

        <button type="submit" style={{"margin":"3% auto"}}>show me the smurfs </button>
      </form>
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
  {makeSmurf}
)(SmurfForm)
