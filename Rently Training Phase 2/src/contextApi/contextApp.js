import React from 'react'
import '../../App.css'
import ComponentA from './componentA'
import CounterOne from './useReducer'

export const Context = React.createContext()
export const Context2 = React.createContext()
function ContextApp(){
    const name = "Induja"
    return(
        <div className='App'>
        <Context.Provider value={name}>
            <Context2.Provider value = {'Ravi'}>
                <ComponentA />
            </Context2.Provider>
            
        </Context.Provider>
        <CounterOne />
        </div>
    )
}
export default ContextApp