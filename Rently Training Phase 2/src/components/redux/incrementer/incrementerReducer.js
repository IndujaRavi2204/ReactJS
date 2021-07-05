import { INCREMENTER } from './incrementerType'

const initialState = {
    numOfTimesClicked : 0,
}

const incrementerReducer = (state=initialState, action) => {
    switch(action.type){
        case INCREMENTER: return {
            ...state,
            numOfTimesClicked : state.numOfTimesClicked + action.payload
        }
        default : return state
    }
}

export default incrementerReducer