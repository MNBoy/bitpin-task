import { useEffect, useState } from 'react';

import { useGetCoinsQuery } from './services/bitpin';

import socketIOClient from 'socket.io-client';

// Components
import Loading from './components/UI/Loading';
import Card from './components/UI/Card';

const PER_PAGE = 20;

const App = () => {
  const { data, error, isLoading } = useGetCoinsQuery();

  useEffect(() => {
    const socket = socketIOClient('wss://ws.bitpin.ir');
    console.log(socket);
    socket.on('sub_to_price_info', (data) => {
      console.log(data);

      // TODO: Find data and mutate
    });
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : error ? (
        <p>{error}</p>
      ) : (
        <main className='p-4 flex flex-col gap-y-4'>
          {data.results.map((coin) => (
            <Card key={coin.id} coin={coin} />
          ))}
        </main>
      )}
    </>
  );
};

export default App;
