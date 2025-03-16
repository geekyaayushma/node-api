"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// console.log("hello world")
const express_1 = __importDefault(require("express"));
const dbConnection_1 = require("./dbConnection");
const main_route_1 = __importDefault(require("./routes/main.route"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
// app.get('/', (req: Request, res: Response) => {
//     res.send('Hello, TypeScript Express!');
//   });
// Middleware
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use("/", main_route_1.default);
dbConnection_1.db.then(() => {
    app.listen(port, () => console.log(`server running at http://localhost:${port}`));
});
