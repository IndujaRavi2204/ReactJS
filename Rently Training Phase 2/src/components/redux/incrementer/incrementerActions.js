import { INCREMENTER } from './incrementerType'

export const incrementer = (times = 1) => {
    return {
        type : INCREMENTER,
        payload : times
    }
}