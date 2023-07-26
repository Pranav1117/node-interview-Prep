const http = require("http");

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
