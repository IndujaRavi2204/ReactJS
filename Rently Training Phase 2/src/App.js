import React from 'react'
import { Provider } from 'react-redux'
import store from './components/redux/store'
import './App.css';
import Counter from './components/counter'
import HooksCounter from './components/hooksCounter'
import DecreaseCount from './components/decreaseCount'
import IncreaseCounterBy from './components/increaseCounterBy'
import TypeContainer from './components/typeContainer'
import Movies from './components/movies'
function App() {
  return (
    <Provider store={store}>
    <div className="App">
    <Movies />
      { /* <TypeContainer add />
      <TypeContainer />
      <Counter />
      <HooksCounter />
      <DecreaseCount />
      <IncreaseCounterBy /> */}
    </div>
    </Provider>
  );
}

export default App;
