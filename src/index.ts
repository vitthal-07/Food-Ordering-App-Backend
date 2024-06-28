import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import myUserRoute from "./Routes/myUserRoute";
mongoose
    .connect(process.env.DB_URL as string)
    .then(() => console.log("Connected to database"));
const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/my/user", myUserRoute);

app.listen(5001, () => {
    console.log("Server is running on port 5001");
});
