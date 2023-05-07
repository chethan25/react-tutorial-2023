import './App.css';
import { User } from './User';

function App() {
  const users = [
    {
      name: 'Pedro',
      age: 21,
    },
    {
      name: 'Jake',
      age: 25,
    },
    {
      name: 'Jessica',
      age: 45,
    },
  ];
  return (
    <div className="App">
      {users.map((user, key) => (
        <User name={user.name} age={user.age} key={key} />
      ))}
    </div>
  );
}

export default App;
