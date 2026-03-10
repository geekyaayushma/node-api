import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const dbHost = process.env.DB_HOST;
const dbName = process.env.DB_NAME;
const dbPort = process.env.DB_PORT;

const options = {
  autoIndex: true,
  maxPoolSize: 10,
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 45000,
  family: 4,
};

export const db = mongoose
  .connect(`mongodb://${dbHost}:${dbPort}/${dbName}`)
  .then((res) => {
    if (res) {
      console.log(`Database connection succeffully to ${dbName}`);
    }
  })
  .catch((err) => {
    console.log(err);
  });
