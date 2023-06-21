const http = require('http');
const port = 3000;

const server = http.createServer();

server.on('request', (request, response) => {
  response.write("Hello world");
  response.end();
});

server.listen(port, ()=> {
  console.log(`Server listening on port ${port}`);
});