import React,{Component} from 'react';

const HOC = (Component, data) => {
    return class extends React.Component{
        constructor(props){
            super(props);
            this.state = {
                count: 0,
            };
        }
        handleClick = () =>{
            this.setState({
                count: this.state.count +1,
            });
        };
        render(){
            return(
                <Component count ={this.state.count} handleClick = {this.handleClick}/>
            );
        }
    }
}
export default HOC;