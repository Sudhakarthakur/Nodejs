const express = require('express');
const path = require('path');

const rootDir = require('./utils/pathUtils');
// locals Modules
const homeRouter = require('./routes/homeRouter');
const contexRouter = require('./routes/contactRouter');

const app = express();

app.use(express.urlencoded());

app.use(homeRouter);
app.use(contexRouter);

app.use((req,res,next) => {
  res.sendFile(path.join(rootDir,"views","404.html"))
})

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});