import express from "express";
import mongoose from "mongoose";
import app from "./app";
import { mongoURI, port } from "./config";

const start = async () => {
  await mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  });
  console.log(`Connected with database: ${mongoURI}`);

  await app.listen(port);
  console.log(`Server listening in port ${port}`);

  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error"));
};

start();
