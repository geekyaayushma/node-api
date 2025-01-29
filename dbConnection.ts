//dbConnection.ts
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

// details from the env
const dbHost = process.env.DB_HOST;
const dbName = process.env.DB_NAME;
const dbPort = process.env.DB_PORT;

//db connection
export const dbConnection = mongoose
  .connect("mongodb://${dbHost}:${dbPort}/${dbName}")
  .then((res) => {
    if (res) {
      console.log(`DB Connected to ${dbName}`);
    }
  })
  .catch((err) => {
    console.log(err);
  });
