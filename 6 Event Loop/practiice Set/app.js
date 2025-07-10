const http = require('http');
const requestHandle = require('./handle');


const server = http.createServer(requestHandle);

const port = 3003;
server.listen(port ,() => {
  console.log(`servet running on address http://localhost:${port}`);
});