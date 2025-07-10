const http = require('http');
const {requesthandle} = require('./handle');


const server = http.createServer(requesthandle);

const port = 3003;
server.listen(port ,() => {
  console.log('servet running on address http://localhost:${port}');
})