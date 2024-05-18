import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Counter } from "./components/Counter";
import "./App.css";

// Root Component
function App() {
  const [count, setCount] = useState(0);

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
      <Counter></Counter>
      <h2>Component #2</h2>
      <Counter></Counter>
    </>
  );
}

export default App;
