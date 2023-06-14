const net = require("net");
const port = 4567;

const server = net.createServer();

const connections = [];

server.on("connection", (connection) => {
  console.log("New client connected!");

  connection.write("Hello there!");

  connections.push(connection);

  connection.setEncoding("utf8");

  connection.on("data", (messageFromClient) => {
    console.log("Debug says: " + messageFromClient.trim());



    if (messageFromClient.startsWith('setName:')) {
      const name = messageFromClient.split(' ')[1];
      const trimmedName = name ? name.trim() : "Client";
      return connection.username = trimmedName;
    }

    for (const con of connections) {
      if (con !== connection) {
        con.write(`${connection.username ? connection.username : "Client"} says: ${messageFromClient}`);
      }
    }
  });

  connection.on('close', ()=> {
    console.log('Client disconnected!');
    for (const con of connections) {
      if (con === connection) {
        const index = connections.indexOf(con);
        connections.splice(index, 1);
      }
    }
  });
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}!`);
});
