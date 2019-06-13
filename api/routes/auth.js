import { Router } from "express";

const auth = Router();

auth.post("/login", (req, res) => {
  res.status(200).send("Auth requested");
});

export default auth;
