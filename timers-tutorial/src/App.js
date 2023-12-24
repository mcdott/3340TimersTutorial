import "./App.css";
import ListTimers from "./components/ListTimers";
import NewTimer from "./components/NewTimer";

function App() {
  return (
    <div className='App'>
      <h1>Timers</h1>
      <NewTimer />
      <ListTimers />
    </div>
  );
}

export default App;
