import React from 'react'
import { connect } from 'react-redux'
import { incrementer } from './redux/index'  // Action creators

function Counter(props){
    return(
        <div>
            <h1>No. of times clicked : {props.numOfTimesClicked} </h1>
            <button onClick = {props.incrementer}>Click Me</button>
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
        incrementer : () => dispatch(incrementer())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Counter)