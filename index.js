import express from "express";

const app = express();

const PORT = 5678;

const start = async () => {
  await app.listen(PORT);
  console.log(`Server listening in port ${PORT}`);
};

start();
