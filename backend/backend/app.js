import { Server } from "socket.io";
import { createServer } from "http";

const httpServer = createServer();

const wsServer = new Server(httpServer, {
  cors: {
    origin: "*",
  },
});

let activeUsers = 0;

wsServer.on("connection", (socket) => {
  activeUsers++;
  console.log(`User connected. Active users: ${activeUsers}`);

  wsServer.emit("activeUsers", activeUsers);

  socket.on("disconnect", () => {
    activeUsers--;
    console.log(`User disconnected. Active users: ${activeUsers}`);
    wsServer.emit("activeUsers", activeUsers);
  });
});

httpServer.listen(4000);
