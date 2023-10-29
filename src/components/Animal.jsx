import React from "react";

function Animal(props) {

  const sendAnimaltoParent = (animalValue) => {
    props.onAnimalValue(animalValue)
  }

  return (
    <>
      <p>{props.nameValue}</p>
      <button onClick = {() => sendAnimaltoParent("dog")}> Send Dog to Parent</button>
      <button onClick = {()=> sendAnimaltoParent("cat")}> Send Cat to Parent</button>
    </>
  );
}

export default Animal;
