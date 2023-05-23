import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import './App.css';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Contact from './pages/Contact';
import PageNotFound from './pages/PageNotFound';

function App() {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: true,
      },
    },
  });

  return (
    <div className="App">
      <QueryClientProvider client={client}>
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
      </QueryClientProvider>
    </div>
  );
}

export default App;
