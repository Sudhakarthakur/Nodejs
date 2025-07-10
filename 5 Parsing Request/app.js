const http = require('http');
const userrequestHandle = require('./appuser');

const server = http.createServer(userrequestHandle);
 const PORT = 3005;

 server.listen(PORT ,() => {
  console.log(`server running on address http:localhost:${PORT}`);

 });

 