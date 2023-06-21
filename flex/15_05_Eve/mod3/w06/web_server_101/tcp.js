const net = require('net');
const port = 8080;

const server = net.createServer();

server.on('connection', (connection) => {
  connection.write("Hello world");
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});