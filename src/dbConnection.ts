//dbConnection.ts
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

// details from the env
const dbHost = process.env.DB_HOST;
const dbName = process.env.DB_NAME;
const dbPort = process.env.DB_PORT;

//db connection
export const dbConnection = () => {
  mongoose // connect to the database using mongoose connect method and pass the connection string
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
