import React from 'react';

const year = new Date().getFullYear();
function List(){
    return <ul>
      <li>JSX allows us to write HTML elements in JavaScript and place them in the DOM without any createElement()  and/or appendChild() methods.</li>
      <li>JSX converts HTML tags into react elements.</li>
      <li>REACT is <strong>{5+5}</strong> times better than JSX</li>
      <li>REACT is one of the most popular framework for front end development in {year}</li>
    </ul>;
}
export default List;