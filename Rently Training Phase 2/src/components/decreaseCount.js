import React from 'react'
import { connect } from 'react-redux'
import { decrementer } from './redux/index'  // Action creators

function DecreaseCount(props){
    return(
        <div>
            <h1>No. of times clicked : {props.decrementerClickCount} </h1>
            <button onClick = {props.decrementer}>Click to reduce the count</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        decrementerClickCount : state.sub.decrementerClickCount
    }
}

const mapDispatchToProps = dispatch => {
    return {
        decrementer : () => dispatch(decrementer())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(DecreaseCount)