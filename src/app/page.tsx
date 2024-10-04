'use client';
import React, { useState, useEffect } from 'react';
import { io as ClientIO } from 'socket.io-client';

export default function Home() {
  const [activeUsers, setActiveUsers] = useState(0);

  const [socket, setSocket] = useState(null);

  useEffect(() => {
    // const socketInitializer = async () => {
    //   await fetch('/api/socket');
    //   const connection = io(
    //     'https://dzencode-test-fe0258948483.herokuapp.com/'
    //   );

    const connection = (ClientIO as any)(
      'https://dzencode-test-fe0258948483.herokuapp.com/',
      {
        path: '/api/socket',
        addTrailingSlash: false,
      }
    );

    connection.on('activeUsers', (count: number) => {
      setActiveUsers(count);
    });
    setSocket(socket);
    return () => {
      connection.disconnect();
    };
    // };

    // socketInitializer();
  }, [socket]);

  // const [activeUsers, setActiveUsers] = useState(0);

  // useEffect(() => {
  //   const connection = io();

  //   connection.on('activeUsers', (count: number) => {
  //     setActiveUsers(count);
  //   });

  //   setSocket(socket);

  //   return () => {
  //     connection.disconnect();
  //   };
  // }, [socket]);

  return (
    <main>
      <h1>Hello word</h1>
      <p>{activeUsers}</p>
    </main>
  );
}
