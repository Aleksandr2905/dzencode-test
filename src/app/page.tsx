'use client';
import React, { useState, useEffect } from 'react';
import io, { Socket } from 'socket.io-client';

export default function Home() {
  const [activeUsers, setActiveUsers] = useState(0);
  const [socket, setSocket] = useState<Socket | null>(null);

  // useEffect(() => {
  //   const connection = io(
  //     'https://dzencode-backend-436696ec47ba.herokuapp.com/'
  //   );

  //   connection.on('activeUsers', (count: number) => {
  //     setActiveUsers(count);
  //   });

  //   // setSocket(connection); // Исправили присваивание connection

  //   return () => {
  //     connection.disconnect();
  //   };
  // }, []); // Убрали [socket] зависимость

  useEffect(() => {
    const connection = io(
      'https://dzencode-backend-436696ec47ba.herokuapp.com/'
    );

    connection.on('activeUsers', (count: number) => {
      setActiveUsers(count);
    });

    setSocket(socket);

    return () => {
      connection.disconnect();
    };
  }, [socket]);

  return (
    <main>
      <h1>Hello word</h1>
      <p suppressHydrationWarning>{activeUsers}</p>
    </main>
  );
}
