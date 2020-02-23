import {GET_SMURFS} from '../actions/smurfActions'
import {MAKE_SMURFS} from '../actions/smurfActions'

const initialState = {
  smurfData: [{name: "johnny", age: 230, height: "4cm", id: 0}]
}

export const smurfReducer = (state = initialState, action) => {
  switch(action.type){
    case GET_SMURFS:
      console.log(action.payload)
      return {
        ...state,
        smurfData: [...state.smurfData, action.payload]
      }
    case MAKE_SMURFS:
      return {
        ...state,
        smurfData: [...state.smurfData, action.payload]
      }
    default:
      return state
  }
}