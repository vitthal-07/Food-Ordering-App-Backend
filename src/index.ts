import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import myUserRoute from "./Routes/myUserRoute";
import { v2 as cloudinary } from "cloudinary";
import myRestaurantRouter from "./Routes/myRestaurantRoute";
mongoose
  .connect(process.env.DB_URL as string)
  .then(() => console.log("Connected to database"));

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const app = express();
app.use(express.json());
app.use(cors());

app.get("/health", async (req: Request, res: Response) => {
  res.send({ message: "Health OK!" });
});

app.use("/api/my/user", myUserRoute);
app.use("/api/my/restaurant", myRestaurantRouter);

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
