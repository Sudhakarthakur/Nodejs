const fs = require('fs');

const userrequestHandle = (req, res) => {
  console.log(req.url, req.method);

  if(req.url === '/'){
     res.setHeader('Content-type','text/html');
  res.write('<html>');
  res.write('<header><title> Complete Coading </title></head>');
  res.write('<body><h1>Enter your Details :</h1>');
      // create a form 
  res.write('<form action="/sumbit-details" method="POST">');
  res.write('<input type="text" name="usernam" placeholder="enter your name"><br>');
    // create table for male
  res.write('<br><lable for="male">Male</lable>');
  res.write('<input type="radio" id="male" name="gender" value="male" />');
    // create table for female
  res.write('<lable for="female">Female</lable>');
  res.write('<input type="radio" id="female" name="gender" value="female" />');
  // ceate sumbit button
  res.write('<br><input type="sumbit" value="Sumbit">');
  res.write('</form>');


  res.write('</body>');
  res.write('</html>'); 
  return res.end();
  
   } else if(requrl.toLowerCase() =="/sumbit-details" &&
req.method === "POST") {
  
  fs.writeFileSu=ync('user.txt','sudhakar thakur');
  res.statusCode = 302;
  res.setHeader('Location','/');
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

  };

  module.exports = userrequestHandle;