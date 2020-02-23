import React, { Component } from 'react';
import { connect } from 'react-redux';
import SmurfForm from './smurfForm'
import SmurfPartyList from './smurfPartyList'
import "./App.css";

class App extends Component {
  render(){
    return (
      <div className="App">
        <h1>SHOW ME THE SMURFS!</h1>
        <SmurfForm />
        <SmurfPartyList />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfData: state.smurfData
  }
}

export default connect(
  mapStateToProps
)(App)
