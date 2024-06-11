const counterTextStyle = {
  backgroundColor: "#333",
  color: "green",
  fontFamily: "Century",
  padding: "1rem 2rem",
  fontSize: "1.5rem",
};

export const CounterDisplay = ({
  children,
  title,
  counter,
  counterArttir,
  artisMiktari,
  counterAzalt,
  changeCounter,
  hide = false,
}) => {
  return (
    <div className={`counter ${hide ? "hide" : "show"}`}>
      {children}
      <h3>{title}</h3>
      <h4 style={counterTextStyle}>{counter}</h4>
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
