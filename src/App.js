import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import Name from './components/Name';

function App() {


const [name, setName ] = useState("");
const [fruit, setFruit] = useState("");
const [count, setCount] = useState(0);
const [render, setRender] = useState(false);

const handleAppleValue = (value) => {
  console.log("Received value from Name component:", value);
  setFruit(value);
}

function conditional() {

  setRender((prevState) => !prevState);

}


useEffect(() => {
  setName("hello");

  const test = setInterval(() =>{

    console.log("Hi");
    setCount(prevCount => prevCount + 1);

    console.log(count);
    
    }, 1000);  

    return () => clearInterval(test);
    
}, [count]);

  return (
    <div className="App">
      <header className="App-header">

      <Name nameValue = {name} onAppleValue={handleAppleValue} />
      <p>{fruit}</p>
      {render && <p>{count}</p> }
      <button onClick = {() => conditional()}>Show Count </button>

      </header>
    </div>
  );
}

export default App;
