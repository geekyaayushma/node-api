const http = require("http");
var port = 3100;
const server = http.createServer((req, res) => {
  res.write("Hello This is my first time using Node Js");
  res.end();
});

server.listen(port, () => {
  console.log(`Server Is Running On Port ${port}`);
});
