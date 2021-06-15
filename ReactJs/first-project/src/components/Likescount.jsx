import React, {Component} from 'react';
import HOC from './HOC';
class Likescount extends React.Component{
    
    render(){
        if(this.props.count === 5){
            throw new Error("Error Occured at 5 likes")
        }
        else{
        return(
            <div>
            <h1> Number of Likes: {this.props.count}</h1>
            <button onClick={this.props.handleClick}>Like</button>
            </div>
        );}
    }
}
const EnhancedLikescount = HOC(Likescount);
export default EnhancedLikescount;