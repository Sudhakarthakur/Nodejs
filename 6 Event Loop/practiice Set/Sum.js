import { buffer } from "stream/consumers";

const Sumrequesthander = (req, res) => {
  console.log("In sum request handler" ,req.url);
  const body =[];
  let result;
  req.on('data' , chunks => {body.push(chunks);
           console.log("2. chunks came")
});
  req.on('end', () => {
    const bodystr = Buffer.concat(body).toString();
    const params = new URLSearchParams(bodystr);
    const boduObj = Object.fromEntries(params);
    result = Number(boduObj.first) + Number(boduObj.secand);
    console.log(result);
  });
  res.setHeader('content-type' , 'text/html');
  res.write(`
    <html>
    <head><title>Practice Set</title></head>
    <body>
    <h1>your sum is ${result}</h1>
    </body>
    </html>
    `);
    return res.end();

}
exports.Sumrequesthandler = Sumrequesthander;