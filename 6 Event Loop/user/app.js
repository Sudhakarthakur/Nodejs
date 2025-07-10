const http = require('http');
const requesthandle = require('./user');
// const userrequestHandle = require('./user');


const server = http.createServer(requesthandle);

const port = 3005;
server.listen(port ,() => {
  console.log(`servet running on address http://localhost:${port}`);
});