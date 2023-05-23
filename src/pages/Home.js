import { useContext } from 'react';
import { AppContext } from '../App';

function Home() {
  const { username } = useContext(AppContext);

  return <div>Home, user is: {username}</div>;
}

export default Home;
