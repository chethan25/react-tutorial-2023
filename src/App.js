import './App.css';
import { useCount } from './useCount';

function App() {
  let { count, increase, decrease, restart } = useCount();

  return (
    <div className="App">
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={restart}>Set to Zero</button>
      <h1>{count}</h1>
    </div>
  );
}

export default App;
