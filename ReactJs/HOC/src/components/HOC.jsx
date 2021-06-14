import React,{Component} from 'react';
import throttle from 'lodash.throttle';

const HOC = (Component, data) => {
    return class extends React.Component{
        constructor(props){
            super(props);
            this.state = {
                count: 0,
            };
            this.handleClick = this.handleClick.bind(this);
            this.throttlehandleClick = throttle(this.handleClick , 1000);
        }
        handleClick = () =>{
            this.setState({
                count: this.state.count +1,
            });
        };
        render(){
            return(
                <Component count ={this.state.count} handleClick = {this.throttlehandleClick}/>
            );
        }
    }
}
export default HOC;