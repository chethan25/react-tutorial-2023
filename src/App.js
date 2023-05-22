import { useState } from 'react';
import axios from 'axios';

import './App.css';

function App() {
  const [excuse, setExcuse] = useState('');

  const fetchExcuse = (category) => {
    axios
      .get(`https://excuser-three.vercel.app/v1/excuse/${category}`)
      .then((res) => setExcuse(res.data[0].excuse));
  };
  return (
    <div className="App">
      <h1>Generate an Excuse</h1>
      <button onClick={() => fetchExcuse('party')}>Party</button>
      <button onClick={() => fetchExcuse('family')}>Family</button>
      <button onClick={() => fetchExcuse('office')}>Office</button>

      <p>{excuse}</p>
    </div>
  );
}

export default App;
