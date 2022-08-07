import React from 'react';
import HeadNav from './Header/HeadNav';
import Display from './Container/Display';
import './App.css';

function App() {
  return (
    <div className="App" style={{backgroundColor:" rgb(222, 224, 226)"}}>
    <HeadNav></HeadNav>
    <Display></Display>
    </div>
  );
}

export default App;
