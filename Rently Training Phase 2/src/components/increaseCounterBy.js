import React, {useState} from 'react'
import { connect } from 'react-redux'
import { incrementer } from './redux/index'

function IncreaseCounterBy(props) {
    const [times, setTimes] = useState(1)
    return(
        <div>
            <h1>Incrementer Counter : {props.numOfTimesClicked}</h1>
            <input type = "text" value={times} onChange ={event => setTimes(event.target.value)}></input>
            <button onClick = {() => props.incrementer(times)}>Click me to increment counter by {times} times</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numOfTimesClicked : state.add.numOfTimesClicked
    }
}

const mapDispatchToProps = dispatch => {
    return {
        incrementer : (times) => dispatch(incrementer(times))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(IncreaseCounterBy)