import dotenv from "dotenv";

dotenv.config();

const port = process.env.API_PORT;
const secret = process.env.JWT_SECRET;
const mongoURI = process.env.MONGO_DB_URI;

export { port, mongoURI, secret };
