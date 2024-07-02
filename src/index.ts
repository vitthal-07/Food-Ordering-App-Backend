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

app.get("/health", async (req: Request, res: Response) => {
    res.send({ message: "Health OK!" });
});

app.use("/api/my/user", myUserRoute);

app.listen(8080, () => {
    console.log("Server is running on port 8080");
});
