const http = require('http');
const port = 3000;

const server = http.createServer((req,res) => {
  const route = `${req.method} ${req.url}`;

  switch (route) {
    case 'GET /':
      res.end('This is a GET request to "/"');
      break;
    case 'GET /users':
      res.end('This is a GET request to "/users"');
      break;
    case 'POST /users':
      res.end('This is a POST request to "/users"');
      break;
    default:
      res.end('Route not found');
  }
});


server.listen(port, ()=> {
  console.log(`Server listening on port ${port}`);
});