import React from 'react'
import { connect } from 'react-redux'
import { incrementer, decrementer } from './redux/index'

function TypeContainer(props) {
    return(
        <div>
            <h2>Type : {props.type}</h2>
            <button onClick = {props.counter}>Counter</button>
        </div>
    )
}
const mapStateToProps = (state,ownProps) => {
    const type = ownProps.add ? state.add.numOfTimesClicked : state.sub.decrementerClickCount
    return{
        type : type
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    const dispatchFunction = ownProps.add ? () => dispatch(incrementer()) : () => dispatch(decrementer())
    return {
        counter : dispatchFunction
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(TypeContainer)