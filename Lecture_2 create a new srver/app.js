
// simple node.js Sever
const http = require('http');

const server = http.createServer((req, res) =>{
  console.log(req);
  
});

const port = 3030;
server.listen(port ,() => {
  console.log('servet running on address http://localhost:${port}');
});