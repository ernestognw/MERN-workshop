import express from "express";
import api from "./api";

const app = express();

// Static
// Pendiente de completar

// Middlewares
app.use(express.json());

// Routes
app.use("/api", api);

export default app;
