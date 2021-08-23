
import Counter from "./Components/Counter";
//Counter component is imported from our Componenets folder
import useCounter from "./Components/Counter/reducerhook";
//useReducer hook to handle increment, decrement and to fetch user value
import "./App.css";
//styling of the application

function App({ initialValue = 1, max = 1000 }) {
  const [counter, dispatchCounter] = useCounter({ count: initialValue, max });
 
  const handleIncrement = () => dispatchCounter({ type: "increment" });
  const handleDecrement = () => dispatchCounter({ type: "decrement" });
  const onChange = e =>
    dispatchCounter({ type: "absolute", value: e.target.value }); 

  return (
    <div className="App">
      <div className="wrapper">
        <Counter
          count={counter.count}
          max={counter.max}
          handleDecrement={handleDecrement}
          handleIncrement={handleIncrement}
          onChange={onChange}
        />
      </div>
    </div>
  );
}

export default App;
