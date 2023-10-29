import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import Animal from "./components/Animal";
import Web3 from "web3";

function App() {
  const [name, setName] = useState("");
  const [animal, setAnimal] = useState("");
  const [count, setCount] = useState(0);
  const [render, setRender] = useState(false);
  const [web3, setWeb3] = useState(null);

  const handleAnimalValue = (animal) => {
    console.log("Received value from Name component:", animal);
    setAnimal(animal);
  };

  function conditional() {
    setRender((prevState) => !prevState);
  }

  useEffect(() => {

    async function connectToEthereum() {
      if (typeof window.ethereum != "undefined") {
        try {
          await window.ethereum.request({method: "eth_requestAccounts"});
          const web3Instance = new Web3(window.ethereum);
          setWeb3(web3Instance);
        }
        catch (error) {
          console.error("Failed to connect to Ethereum", error);
        }
      } else {
        console.log("Please install compatible browser extension");
      }
    }

    connectToEthereum();


    setName("hello");
 

    const test = setInterval(() => {
      console.log("Hi");
      setCount((prevCount) => prevCount + 1);

      console.log(count);
    }, 1000);

    return () => clearInterval(test);
  }, [count]);

  return (
    <div className="App">
      <header className="App-header">
        <Animal nameValue={name} onAnimalValue={handleAnimalValue} />
        <p>{animal}</p>
        {render && <p>{count}</p>}
        <button onClick={() => conditional()}>Show Count </button>
      </header>
    </div>
  );
}

export default App;
