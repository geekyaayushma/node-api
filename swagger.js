const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "MOVIES API",
    description: "Auto-generated API docs",
  },
  host: "localhost:301",
};

const outputFile = "./swagger.json";
const routes = ["./src/app.ts"];

swaggerAutogen(outputFile, routes, doc);
