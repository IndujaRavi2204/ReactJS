import React, {Component} from 'react';
import HOC from './HOC';
class Commentscount extends React.Component{
    render(){
        return(
            <div>
            <h1> Number of Comments: {this.props.count}</h1>
            <button onClick={this.props.handleClick}>Comment</button>
            </div>
        );
    }

}
const WrappedCommentscount = HOC(Commentscount);
export default WrappedCommentscount;