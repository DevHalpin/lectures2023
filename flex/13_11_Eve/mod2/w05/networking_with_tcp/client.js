const net = require("net");

const config = {
  host: '0.tcp.us-cal-1.ngrok.io',
  port: 18784
};

const client = net.createConnection(config);

client.setEncoding('utf-8')


client.on('data', (messageFromServer) => {
  console.log('Server says: ', messageFromServer)

  // client.write("Hello to you too!")
})

process.stdin.on('data', (data) => {
  client.write(data)
})