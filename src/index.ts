import * as http from "http";
import { dbConnection } from "./dbConnection";

const port = process.env.PORT || 3000;
const server = http.createServer((req, res) => {
  res.write("Hello This is my first time using Node Js");
  res.end();
});

dbConnection();

server.listen(port, () => {
  console.log(`Server Is Running On Port ${port}`);
});
