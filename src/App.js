import './App.css';

function App() {
  const age = 19;
  const isGreen = true;
  const isPresent = null;

  return (
    <div className="App">
      {age >= 18 ? <h1>Over Age</h1> : <h1>Under Age</h1>}
      <h1 style={{ color: isGreen ? 'green' : 'red' }}> This has color</h1>
      {isGreen && <button>Click Me!</button>}
      {isPresent ?? <h2>I am present</h2>}
    </div>
  );
}

export default App;
