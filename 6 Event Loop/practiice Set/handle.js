const requestHandle = (req , res) => {
 
  console.log(req.url, req.method);
    if(req.url === '/'){
    res.setHeader('Content-type', 'text/html');
    res.write('<html>');
      res.write(`
        '<head><title>Practice Set</title></head>'
        <body>
        <h1>404 page does not Exist</h1>
        <a herf="/">Go to home</a>
        </body>
      `)
      return res.end();
    };
    res.setHeader('Content-type', 'text/html');
    res.write(`
      <html>
      <body>
        <head><title>Practice Set</title></head>
        <h1>404 page does not Exist</h1>
        <a herf="/">Go to home</a>
      </body>
      </html>
      `); 
      return res.end();
};

module.exports = requestHandle;