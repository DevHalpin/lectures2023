const net = require('net');

const config = {
  host: '0.tcp.ngrok.io',
  port: 19526
};

const client = net.createConnection(config);

client.setEncoding('utf8');

process.stdin.on('data', (data) => {
  client.write(data);
});

client.on('data', (messageFromServer) => {
  console.log(messageFromServer);
});