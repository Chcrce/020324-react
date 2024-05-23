import { useState } from "react";

import "./Counter.css";
import { CounterDisplay } from "./CounterDisplay";

let sayac = 0;

// 2015 ECMA Script 6 güncellemesi
//    let, const, ``, class,

export const Counter = ({
  title,
  baslangic,
  artisMiktari = 1,
  islem = "+",
  children,
}) => {
  // const { title, baslangic } = props;

  const [counter, setCounter] = useState(baslangic || 0);

  console.log("Counter Componenti Propları :", { title, baslangic });

  const counterArttir = () => {
    if (islem === "*") {
      setCounter(counter * artisMiktari);
    } else {
      setCounter(counter + artisMiktari);
    }
  };

  const counterAzalt = () => {
    if (islem === "*") {
      setCounter(counter / artisMiktari);
    } else {
      setCounter(counter - artisMiktari);
    }
  };

  const changeCounter = (val) => setCounter(val);

  return (
    <CounterDisplay
      title={title}
      counter={counter}
      artisMiktari={artisMiktari}
      counterArttir={counterArttir}
      counterAzalt={counterAzalt}
      changeCounter={changeCounter}
    >
      {children}
    </CounterDisplay>
  );
};
