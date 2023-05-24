import './App.css';
import { useToggle } from './useToggle';

function App() {
  const [isVisble, toggle] = useToggle();
  // const { state: isVisble, toggle } = useToggle();

  return (
    <div className="App">
      <button onClick={toggle}>{isVisble ? 'Hide' : 'Show'}</button>
      {isVisble && <h1>Hidden Text</h1>}
    </div>
  );
}

export default App;
