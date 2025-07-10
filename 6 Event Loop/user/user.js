const fs = require('fs');
const userrequesthandle = (req,res) => {
  console.log(req.url, req.method);   

  if(req.url =='/') {
  res.setHeader('Content-type','text/html');
  res.write('<html>');
  res.write('<header><title> Complete Coading </title></head>');
  res.write('<body><h1>Enter your Details :</h1>');
      // create a form 
  res.write('<form action="/sumbit-details" method="POST">');
  res.write('<input type="text" name="usernam" placeholder="enter your name"><br>');
    // create table for male
  res.write('<lable for="male">Male</lable>');
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


  } else if(req.url.toLowerCase() ==="/sumbit-details" &&
req.method == "POST") {

  const body = [];
  req.on('data', chunk => {
    console.log(chunk);
    body.push(chunk);
  });
  req.on('end', () => {
    const fullbody = Buffer.concat(body).toString();
    console.log(fullbody);
    const parms = new URLSearchParams(fullbody);
    const bodyobject = Object.fromEntries(parms);
    console.log(bodyobject);
    fs.write('user.txt',JSON.tostriginfy(bodyobject), error =>{
      console.log('data write succesfully');
         res.statusCode = 302;
         res.setHeader('Location','/');
          return res.end();
      });
  });
}

  else{
    res.setHeader('Content-type','text/html');
  res.write('<html>');
  res.write('<header><title>Complete Coading </title></head>');
  res.write('<body><h1>Cheakout out products</h1></body>');
  res.write('</html>'); 
  return res.end(); 
  }
};

module.exports=userrequesthandle;
