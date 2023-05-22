import { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css';

function App() {
  const [catFact, setCatFact] = useState();
  const [name, setName] = useState('');
  const [predictedAge, setPredictedAge] = useState(null);

  useEffect(() => {
    fetchCatFact();
  }, []);

  const fetchCatFact = () => {
    axios
      .get('https://catfact.ninja/fact')
      .then((res) => setCatFact(res.data.fact));
  };

  const fetchData = () => {
    axios
      .get(`https://api.agify.io/?name=${name}`)
      .then((res) => setPredictedAge(res.data));
  };

  return (
    <div className="App">
      <button onClick={fetchCatFact}>Generate Cat Fact</button>
      <p>{catFact}</p>

      <input
        type="text"
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <button onClick={fetchData}>Predict Age</button>
      <p>Name: {predictedAge?.name}</p>
      <p>Predicted Age: {predictedAge?.age}</p>
      <p>Count: {predictedAge?.count}</p>
    </div>
  );
}

export default App;
