import { Server } from "socket.io";

const io = new Server(3000, { cors: { origin: '*' } });
let uzivatel = 0

io.on('connection', (socket) => {
  console.log('A user connected');
  console.log(socket.id);
  io.emit("id",socket.id);
  socket.on('disconnect', () => {
    console.log('User disconnected');
  });

  socket.on('chat_message', (msg) => {
    console.log('message: ' + msg);
    io.emit('chat_message', msg);
  });
});

