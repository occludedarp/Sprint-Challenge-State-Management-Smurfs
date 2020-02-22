import axios from 'axios';

const GET_SMURFS = 'GET_SMURFS'
const MAKE_SMURFS = 'MAKE_SMURFS'

export const getSmurfs = () => dispatch => {
  axios.get('http://localhost:3333/smurfs')
    .then(res => dispatch({type: GET_SMURFS, payload: res.data}))
    .catch(err => console.log('couldn\'t find any smurfs', err))
}

export const makeSmurf = () => dispatch => {
  dispatch({type: MAKE_SMURFS})
}

