import { useState } from "react";

import "./Counter.css";

let sayac = 0;

// 2015 ECMA Script 6 güncellemesi
//    let, const, ``, class, 

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  const counterArttir = () => {
    setCounter(counter + 1);
    // console.log("counter: ", counter);
  };

  const counterAzalt = () => {
    setCounter(counter - 1);
    // console.log("counter: ", counter);
  };

  return (
    <div className="counter">
      <h3>Counter Component 1</h3>
      <h4>counter: {counter}</h4>
      <button onClick={counterArttir}>+ 1</button>
      <button onClick={counterAzalt}>- 1</button>
      <hr />
      <h4>sayac: {sayac}</h4>
      <button
        onClick={() => {
          sayac = sayac + 1;
          console.log("sayaç: ", sayac);
        }}
      >
        sayac arttir
      </button>
    </div>
  );
};
