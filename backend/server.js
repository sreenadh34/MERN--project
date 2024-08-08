import express from "express";
import dotenv from 'dotenv';
import { errorHandler } from "../middleware/errorMiddleware.js";
import goalsRouter from "./routes/goalsRoutes.js";

dotenv.config();

const app = express()
const port = process.env.PORT || 5000;

app.use(express.json());  // Parses incoming JSON requests
app.use(express.urlencoded({ extended: false })); // Parses incoming URL-encoded form data

app.use("/api/goals", goalsRouter);

app.use(errorHandler);


app.listen(port, () => {
    console.log(`server running on port ${port}`);
});