import {GET_SMURFS, MAKE_SMURFS} from '../actions/smurfActions'

const initialState = {
  smurfData: [{"name": " ", "age": 230, "height": " ", "id": 0}],
  isfetching: true
}

export const smurfReducer = (state = initialState, action) => {
  switch(action.type){
    case GET_SMURFS:
      console.log(action.payload)
      return {
        ...state,
        smurfData: action.payload
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