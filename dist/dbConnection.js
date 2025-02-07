"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConnection = void 0;
//dbConnection.ts
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
dotenv_1.default.config();
// details from the env
const dbHost = process.env.DB_HOST;
const dbName = process.env.DB_NAME;
const dbPort = process.env.DB_PORT;
//db connection
exports.dbConnection = () => {
    mongoose_1.default // connect to the database using mongoose connect method and pass the connection string
        .connect(`mongodb://${dbHost}:${dbPort}/${dbName}`)
        .then((res) => {
        if (res) {
            console.log(`Database connection succeffully to ${dbName}`);
        }
    })
        .catch((err) => {
        console.log(err);
    });
};
