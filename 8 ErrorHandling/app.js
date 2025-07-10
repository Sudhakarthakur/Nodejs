const http = require('http');
const textingSyntax = require('./syntax');
const testRuntime = require('./runtimeError');

const server = http.createServer((req,res) => {
  console.log(req.url,req.method);
  textingSyntax();
  testRuntime();

});

const PORT = 3001;
server.listen(PORT, () =>{
  console.log(`Server running on address http://localhost:${PORT}`);
});


// const http = require('http');

// const server = http.createServer((req, res) => {
//     console.log(req);
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.end('Hello World\n');
// });

// const PORT = 3004;
// server.listen(PORT, () => {
//     console.log(`Server running on address http://localhost:${PORT}`);
// });
