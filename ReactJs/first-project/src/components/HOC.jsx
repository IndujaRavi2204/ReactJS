import React,{Component} from 'react';
import debounce from 'lodash.debounce';

const HOC = (Component, data) => {
    return class extends React.Component{
        constructor(props){
            super(props);
            this.state = {
                count: 0,
            };
            this.handleClick = this.handleClick.bind(this);
            this.emitChangeDebounced = debounce(this.emitChange, 3000);
        }
        handleClick = () =>{
            this.setState({
                count: this.state.count +1,
            });
        };
        emitChange(value) {
            this.state.onClick(value);
          }
        render(){
            return(
                <Component count ={this.state.count} handleClick = {this.handleClick}/>
            );
        }
    }
}
export default HOC;