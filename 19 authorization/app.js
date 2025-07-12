// Core Module
const path = require("path");

// External Module
const express = require("express");
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);
const DB_PATH =
  "mongodb+srv://nodejs:nodejs@cluster1.ubu4ekr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1";

//Local Module
const storeRouter = require("./routes/storeRouter");
const hostRouter = require("./routes/hostRouter");
const authRouter = require("./routes/authRouter");
const rootDir = require("./utils/pathUtil");
const errorsController = require("./controllers/errors");

const { default: mongoose } = require("mongoose");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const store = new MongoDBStore({
  uri: DB_PATH,
  collection: "session",
});

app.use(express.urlencoded());
app.use(
  session({
    secret: "KnowledgeGate AI with complete Coading",
    resave: false,
    saveUninitialized: true,
    store,
  })
);
app.use((req, res, next) => {
  // req.isLoggedIn = req.get("cookie")
  //   ? req.get("cookie").split("=")[1] === "true"
  //   : false;
  // next();

  req.isLoggedIn = req.session.isLoggedIn;
  next();
});
app.use(authRouter);
app.use(storeRouter);
app.use("/host", (req, res, next) => {
  if (req.isLoggedIn) {
    next();
  } else {
    res.redirect("/login");
  }
});

app.use("/host", hostRouter);

app.use(express.static(path.join(rootDir, "public")));

app.use(errorsController.pageNotFound);

const PORT = 3000;

mongoose
  .connect(DB_PATH)
  .then(() => {
    console.log("Conected to Mongo");
    app.listen(PORT, () => {
      console.log(`Server running on address http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Error  while Connecting to Mongo", err);
  });
