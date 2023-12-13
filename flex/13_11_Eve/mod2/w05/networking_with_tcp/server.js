const net = require("net");
const port = 4567;

const server = net.createServer();

const connections = [];

server.on('connection', (connection) => {
  console.log("A new client has connected");
  connections.push(connection)

  // send a message to the client
  connection.write("Hello there!")
  connection.setEncoding('utf-8')

  connection.on('data', (messageFromClient) => {
    console.log('Client says: ', messageFromClient);
    console.log('Connection Info: ', connection)

    if (messageFromClient.startsWith("setName:")) {
      const name = messageFromClient.split(' ')[1].trim();
      return connection.username = name;
    }

    for (const con of connections) {
      if (con !== connection) {
      con.write(`${connection.username} says: ${messageFromClient.trim()}`)
      }
    }
  });

  connection.on('close', () => {
    console.log('Client has disconnected');
    for (const con of connections) {
      if (con === connection) {
        const index = connections.indexOf(con);
        connections.splice(index, 1)
      }
    }
  })
})

server.listen(port, () => {
  console.log(`The server is listening on port ${port}`);
});