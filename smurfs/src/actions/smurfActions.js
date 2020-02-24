import axios from 'axios';

export const GET_SMURFS = 'GET_SMURFS'
export const MAKE_SMURF = 'MAKE_SMURF'

export const getSmurfs = () => dispatch => {
  axios.get('http://localhost:3333/smurfs')
    .then(res => {
      return dispatch({type: GET_SMURFS, payload: res.data})
    })
    .catch(err => console.log('couldn\'t find any smurfs', err))
}

export const makeSmurf = (smurf) => dispatch => {
  axios.post('http://localhost:3333/smurfs', smurf)
    .then(res => {
      return dispatch({type: MAKE_SMURF, payload: res.data})
    })
    .catch(err => {
      console.log('sorry, we couldn\'t make the smurf', err)
    })
  
}

