const http = require('http')
const PORT = 3000;

const server = http.createServer((req,res) => {
  const route = `${req.method} ${req.url}`;

  switch (route) {
    case "GET /":
      res.statusCode = 200;
      res.write('This is a GET request to "/"') // does not close the connection so without res.end, website will hang waiting for response
      res.end() // closes connection so client knows we are done sending info and it can make a new request
      break;
    case "GET /users":
      res.statusCode = 200;
      res.end('This is a GET request to "/users"'); // can also put message in the end function to both send a message and close connection in one step
      break;
    default:
      res.statusCode = 404;
      res.end('Route not found')
  }
})

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})