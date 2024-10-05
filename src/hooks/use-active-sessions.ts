import { useEffect, useState } from 'react';
import io, { Socket } from 'socket.io-client';

export const useActiveSessions = () => {
  const [activeUsers, setActiveUsers] = useState(0);
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    const connection = io(process.env.NEXT_PUBLIC_URL);

    connection.on('activeUsers', (count: number) => {
      setActiveUsers(count);
    });

    setSocket(socket);

    return () => {
      connection.disconnect();
    };
  }, [socket]);

  return activeUsers;
};
