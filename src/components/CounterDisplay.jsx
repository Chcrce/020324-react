export const CounterDisplay = ({
  children,
  title,
  counter,
  counterArttir,
  artisMiktari,
  counterAzalt,
  changeCounter,
}) => {
  return (
    <div className="counter">
      {children}
      <h3>{title}</h3>
      <h4>{counter}</h4>
      <button onClick={counterArttir}>+ {artisMiktari}</button>
      <button onClick={() => changeCounter(0)}>RESET</button>
      <button
        onClick={function () {
          counterAzalt();
        }}
      >
        - {artisMiktari}
      </button>
    </div>
  );
};
