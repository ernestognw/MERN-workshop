import { Router } from "express";
import { answer, auth, question } from "./routes";

const api = Router();

api.get("/", (req, res) => {
  res.status(200).send("API working");
});

api.use("/answer", answer);
api.use("/question", question);
api.use("/auth", auth);

export default api;
