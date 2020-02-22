const initialState = {
  smurfData: [{name: 'johnny', age: 230, height: ' ', id: 0}]
}

export const smurfReducer = (state = initialState, action) => {
  switch(action.type){
    case 'GET_SMURFS':
      return {
        ...state,
        smurfData: [...state.smurfData, action.payload]
      }
    case 'MAKE_SMURF':
      return {
        ...state,
        smurfData: [...state.smurfData, action.payload]
      }
    default:
      return state
  }
}