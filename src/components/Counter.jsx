import { useEffect, useState } from "react";

import "./Counter.css";
import { CounterDisplay } from "./CounterDisplay";


export const Counter = ({
  title,
  baslangic,
  artisMiktari = 1,
  islem = "+",
  children,
}) => {
  const [counter, setCounter] = useState(baslangic || 0);

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

  useEffect(() => {
    console.warn(
      "**************** COOUNTER: COMPONENT DID MOUNT ********************"
    );

    return () => {
      console.warn(
        "**************** COOUNTER: COMPONENT WILL UN-MOUNT ********************"
      );
    };
  }, []);

  useEffect(() => {
    // did update did mount fazında da tetiklenir
    console.warn(
      "**************** COOUNTER: COMPONENT DID UPDATE ********************"
    );
  });

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
