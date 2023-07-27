//implementation of creating http server

/*const http = require("http");

const app = http.createServer((req, res) => {
  const url = req.url;

  if (url === "/") {
    res.write(JSON.stringify({ name: "harry" }));
    res.end();
  }
});

app.listen(3000, () => {
  console.log("running on 3000");
});
*/

// Implementation of Express

const express = require("express");
const app = express();

const auth = (req, res, next) => {
  console.log("specific middleware on home page");
  if (req.query.age > 18) {
    next();
  } else {
    res.send("user not eligible");
  }
};

const global = (req, res, next) => {
  console.log("global middleware");
  next();
};

app.use(global);

app.get("/", (req, res) => {
  res.send("homepage");
});

app.get("/checkAge", auth, (req, res) => {
  res.send("user eligible");
});

app.listen(3000, () => {
  console.log("running on 3000");
});
