import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

function Topics(props){
  return (
    <div>
      <h3>{props.topic}:</h3>
      <p>{props.content}</p>
    </div>
  );
}
class Componentsclass extends React.Component{
  render(){
    return(
      <div>
        <h3>{this.props.topic}</h3>
        <p>{this.props.content}</p>
      </div>
    );
  }
}

ReactDOM.render(
  <div>
    <App />
    <h2>Table of Contents</h2>
    <Topics topic = "JSX" content= "JSX converts HTML tags into react elements."/>
    <Topics topic = "Components" content ="Components are like functions that return HTML elements." />
    <Componentsclass topic = "Props" content = "Props are arguments passed into React components." />
    <Componentsclass topic = "State" content = "The state object is where you store property values that belongs to the component." />
  </div>,
  document.getElementById('root')
);
