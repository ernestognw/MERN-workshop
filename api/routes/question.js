import { Router } from "express";

const question = Router();

question.get("/", (req, res) => {
  res.status(200).send("Questions requested");
});

export default question;
