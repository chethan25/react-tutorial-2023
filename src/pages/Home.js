import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

function Home() {
  const {
    data: catData,
    isLoading,
    isError,
    refetch,
  } = useQuery(['cat'], () =>
    axios.get('https://catfact.ninja/fact').then((res) => res.data)
  );

  if (isError) {
    return <h1>Sorry, there was an error</h1>;
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      Home
      <p>{catData?.fact}</p>
      <button onClick={refetch}>Update Fact</button>
    </div>
  );
}

export default Home;
