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
  const planets = [
    { name: 'Mars', isGasPlanet: false },
    { name: 'Earth', isGasPlanet: false },
    { name: 'Jupiter', isGasPlanet: true },
    { name: 'Venus', isGasPlanet: false },
    { name: 'Neptune', isGasPlanet: true },
    { name: 'Uranus', isGasPlanet: true },
  ];

  return (
    <div className="App">
      {users.map((user, key) => (
        <User name={user.name} age={user.age} key={key} />
      ))}
      {planets.map(
        (planet, key) => !planet.isGasPlanet && <h2 key={key}>{planet.name}</h2>
      )}
    </div>
  );
}

export default App;
