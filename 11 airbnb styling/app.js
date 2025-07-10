// core modules
const path  = require('path');
// External Modules
const express = require('express');
// loclal modules
const userRouter = require("./routes/userRouter")
const hostRouter = require("./routes/hostRouter");
const rootDir = require('./utils/utilspath');

const app = express();



app.use(express.urlencoded());
app.use(userRouter);
app.use(hostRouter);
app.use(express.static(path.join(rootDir,'public')));

// not avaible path
// 404 error
app.use((req,res,nexr) => {
  res.status(404).sendFile(path.join(rootDir, 'views','404.html'));
})






const PORT = 3001;
app.listen(PORT, () =>{
  console.log(`Server running on address http://localhost:${PORT}`);
});