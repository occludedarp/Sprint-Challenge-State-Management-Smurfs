import {GET_SMURFS, MAKE_SMURF} from '../actions/smurfActions'

const initialState = {
  smurfData: [{"name": " ", "age": " ", "height": " ", "id": " "}]
}

export const smurfReducer = (state = initialState, action) => {
  switch(action.type){
    case GET_SMURFS:
      console.log(action.payload)
      return {
        ...state,
        smurfData: action.payload
      }
      
    case MAKE_SMURF:
      return {
        ...state,
        smurfData: action.payload
      }
    default:
      return state
  }
}