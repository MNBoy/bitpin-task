import { useEffect, useState } from 'react';

import { useGetCoinsQuery } from './services/bitpin';

import webSocket from 'socket.io-client';

// Components
import Message from './components/UI/Message';
import Card from './components/UI/Card';

const App = () => {
  const { data, error, isLoading } = useGetCoinsQuery();

  useEffect(() => {
    const socket = webSocket('wss://ws.bitpin.org', {
      transports: ['websocket'],
    });
    console.log(socket);
    socket.on('sub_to_price_info', (data) => {
      console.log(data);

      // TODO: Find data and mutate
    });
  }, []);

  return (
    <>
      {isLoading ? (
        <Message text='لطفا صبر کنید ...' />
      ) : error ? (
        <Message text={error.error} />
      ) : (
        <main className='p-4 flex flex-col gap-y-4'>
          <div className='flex gap-x-4 justify-between items-center bg-[#11154d] rounded p-4'>
            <span className='w-1/3 flex justify-start'>ارز دیجیتال</span>
            <span className='w-1/3 flex justify-center'>قیمت</span>
            <span className='w-1/3 flex justify-end'>تغییرات</span>
          </div>
          {data.results.map((coin) => (
            <Card key={coin.id} coin={coin} />
          ))}
        </main>
      )}
    </>
  );
};

export default App;
