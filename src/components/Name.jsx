import React from "react";

function Name(prop) {


const apple = "apple"
const cat = "cat"

prop.onAppleValue(apple);
prop.onAppleValue(cat);

    
  return (
    <>
      <p>{prop.nameValue}</p>

      
    </>
  );
}

export default Name;
