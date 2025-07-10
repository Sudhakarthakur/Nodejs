const express = require('express');

const app = express();

app.use((req, res, next) => {
  console.log("First middleware",req.url ,req.method);
  // console.log(req.url,req.methode);
  next();
});


app.use((req, res, next) => {
  console.log("secand middleware" ,req.url ,req.method)
  // console.log(req.url,req.methode);
  next();
});

app.get("/" ,(req , res ,next) => {
  console.log("Handling / for Get" ,req.url , req.method);
  res.send(`<h1> welcome to the complete coading</h1>`);
})

app.get("/contex-us" ,(req , res ,next) => {
  console.log("Handling /contex-us for Get" ,req.url , req.method);
  res.send(`
    <h1>please ggive your details</h1>
    <form action="contex-us" methode="POST">
    <input type="text" name="name"
    placeholder="Enter your name"/>
        <input type="text" name="Email"
    placeholder="Enter your Email"/>
    <input type="Submit" />
    </form>
    `);
});

app.post("/contex-us" ,(req,res,next) => {
  console.log("hanlding /contex-us for post" ,req.url.req.method);
  res.send(`<h1> we eill contex you </h1>`);
})

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});