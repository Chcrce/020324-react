import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Counter } from "./components/Counter";
import "./App.css";
import { ProductsPage } from "./pages/ProductsPage";

// Root Component
function App() {
  const [count, setCount] = useState(0);
  const [show1, setShow1] = useState(true);

  const userName = "";

  const logUser = () => {
    console.log("user name: ", userName);
  };

  // Java Script Expression > JSX
  return (
    <>
      <h1>Merhaba {userName}</h1>
      123 % 13: {123 % 13}
      {
        // if veya for ?
        // if veya for bir JSX mıdır?
        // logUser();    >>>   function invoke/call/run   JSX
        userName ? logUser() : console.log("Anonim")
      }
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <h2>Component #1</h2>
      <button onClick={() => setShow1(!show1)}>Toggle Counter</button>
      {show1 && (
        <Counter
          title="Sayaç 1"
          baslangic={100}
          artisMiktari={10}
          islem="*"
        ></Counter>
      )}
      <h2>Component #2</h2>
      <Counter title="Sayaç 2" baslangic={50}>
        <h1>Çocuk Elemanlar Yaani Children</h1>
        <hr />
        <p>Hayatta en hakiki mürşit ilimdir!</p>
      </Counter>
      <ProductsPage />
    </>
  );
}

export default App;
