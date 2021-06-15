import React, {Component} from 'react';

export default class ErrorBoundries extends Component{
    constructor(props){
        super(props)
        this.state = {
            hasError : false,
        }
    }
    static getDerivedStateFromError(error){
        return {hasError: true};
    }
    render() {
        if(this.state.hasError){
            return(
                <div>
                    Display Error! or Fall back UI!
                </div>
            )
        }
        else{
            return this.props.children;
        }
       
    }
}