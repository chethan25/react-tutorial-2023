import './App.css';

function App() {
  return (
    <div className="App">
      <User name="chethan" age="21" email="chethan@gmail.com" />
      <User name="chethan" age="21" email="chethan@gmail.com" />
      <User name="chethan" age="21" email="chethan@gmail.com" />
    </div>
  );
}

const User = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h1>{props.age}</h1>
      <h1>{props.email}</h1>
    </div>
  );
};

export default App;
