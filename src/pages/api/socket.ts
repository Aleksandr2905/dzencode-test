import { NextApiRequest } from 'next';
import { NextApiResponseServerIO } from '@/types/next';

import { Server } from 'socket.io';

const SocketHandler = (req: NextApiRequest, res: NextApiResponseServerIO) => {
  if (res.socket.server.io) {
    console.log('Socket is already running');
  } else {
    console.log('Socket is initializing');
    const io = new Server(res.socket.server as any);
    res.socket.server.io = io;

    io.on('connection', (socket) => {
      io.emit('activeUsers', io.engine.clientsCount);

      socket.on('disconnect', () => {
        io.emit('activeUsers', io.engine.clientsCount);
      });
    });
  }
  res.end();
};

export default SocketHandler;
