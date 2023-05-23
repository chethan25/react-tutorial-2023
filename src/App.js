import { useState, createContext } from 'react';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import './App.css';
import Home from './pages/Home';
// import Menu from './pages/Menu';
import Profile from './pages/Profile';
import Contact from './pages/Contact';
import PageNotFound from './pages/PageNotFound';

export const AppContext = createContext();

function App() {
  const [username, setUsername] = useState('Chethan');

  return (
    <div className="App">
      <AppContext.Provider value={{ username, setUsername }}>
        <Router>
          <div className="nav-bar">
            <Link to="/">Home</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<PageNotFound />}></Route>
          </Routes>
        </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;
