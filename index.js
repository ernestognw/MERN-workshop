import express from "express";
import mongoose from "mongoose";

const app = express();

const PORT = 5678;
const mongoURI = "mongodb://localhost/virtua-overflow";

const start = async () => {
  await mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  });
  console.log(`Connected with database: ${mongoURI}`);

  await app.listen(PORT);
  console.log(`Server listening in port ${PORT}`);

  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error"));
};

start();
