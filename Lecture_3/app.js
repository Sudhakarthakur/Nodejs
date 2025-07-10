
// simple node.js Sever
const http = require('http');

const server = http.createServer((req, res) =>{
  console.log(req.url,req.method,req.headers);

  if(req.url =='/') {
  res.setHeader('Content-type','text/html');
  res.write('<html>');
  res.write('<header><title> Complete Coading </title></head>');
  res.write('<body><h1>Welcome to Home Page</h1></body>');
  res.write('</html>'); 
  return res.end(); 
  }

  else{
    res.setHeader('Content-type','text/html');
  res.write('<html>');
  res.write('<header><title>Complete Coading </title></head>');
  res.write('<body><h1>Cheakout out products</h1></body>');
  res.write('</html>'); 
  return res.end(); 
  }

  res.setHeader('Content-type','text/html');
  res.write('<html>');
  res.write('<header><title>Complete Coading </title></head>');
  res.write('<body><h1>Like /Share/Subscribe</h1></body>');
  res.write('</html>'); 
  res.end(); 
   
});

const port = 3003;
server.listen(port ,() => {
  console.log('servet running on address http://localhost:${port}');
});