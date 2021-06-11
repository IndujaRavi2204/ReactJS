import React, {Component} from 'react';
import HOC from './HOC';
class Likescount extends React.Component{
    
    render(){
        return(
            <div>
            <h1> Number of Likes: {this.props.count}</h1>
            <button onClick={this.props.handleClick}>Like</button>
            </div>
        );
    }
}
const EnhancedLikescount = HOC(Likescount);
export default EnhancedLikescount;