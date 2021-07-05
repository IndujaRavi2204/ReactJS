import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { incrementer } from './redux/index'  // Action creators

function HooksCounter(){
    const numOfTimesClicked = useSelector(state => state.add.numOfTimesClicked)
    const dispatch = useDispatch()
    return(
        <div>
            <h1>No. of times clicked : {numOfTimesClicked} </h1>
            <button onClick = {() => dispatch(incrementer())}>Hooks incrementer</button>
        </div>
    )
}
export default HooksCounter