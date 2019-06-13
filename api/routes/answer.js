import { Router } from "express";

const answer = Router();

answer.get("/", (req, res) => {
  res.status(200).send("Answers requested");
});

export default answer;
