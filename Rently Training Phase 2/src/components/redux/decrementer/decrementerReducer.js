import { DECREMENTER } from './decrementerTypes'

const initialState = {
    decrementerClickCount : 10,
}

const decrementerReducer = (state=initialState , action) => {
    switch(action.type){
        case DECREMENTER : return {
            ...state,
            decrementerClickCount : state.decrementerClickCount - 1
        }
        default : return state
    }
}

export default decrementerReducer