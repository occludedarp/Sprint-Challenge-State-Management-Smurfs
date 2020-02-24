import React, {useState} from 'react';
import { connect } from 'react-redux';
import { makeSmurf } from '../actions/smurfActions'

const SmurfForm = ({makeSmurf}) => {

  const [smurf, setSmurf] = useState({name: "name", age: "age", height: "height ", id: " "})

  const handleChange = (e) => {
    e.preventDefault();
    setSmurf({...smurf, [e.target.name]: e.target.value})
  }

  const handleSmurf = (smurf) => {
    makeSmurf(smurf)
    setSmurf({name: " ", age: " ", height: " ", id: " "})
  }

  return(
    <div style={{"display": "flex", "justifyContent":"center"}}>
      {/* <button onClick={() => {getSmurfs()}}>fetch smurfs</button> */}

      <form onSubmit={(e) => {e.preventDefault(); handleSmurf(smurf)}} style={{"display":"flex", "flexDirection":"column", "width":"350px"}}>
        <input onChange={handleChange} name="name" value={smurf.name} placeholder="name" style={{"margin":"3% auto"}}/>
        <input onChange={handleChange} name="age" value={smurf.age} placeholder="age" style={{"margin":"3% auto"}}/>
        <input onChange={handleChange} name="height" value={smurf.height} placeholder="height" style={{"margin":"3% auto"}}/>

        <button type="submit" style={{"margin":"3% auto"}}>add a smurf</button>
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
