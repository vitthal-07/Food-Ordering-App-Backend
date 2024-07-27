import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import myUserRoute from "./Routes/MyUserRoute";
import { v2 as cloudinary } from "cloudinary";
import myRestaurantRouter from "./Routes/MyRestaurantRoute";
import restaurantRouter from "./Routes/RestaurantRoute";
import orderRoute from "./Routes/OrderRoute";

mongoose
    .connect(process.env.DB_URL as string)
    .then(() => console.log("Connected to database"));

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const app = express();
app.use(cors());

app.use("/api/order/checkout/webhook", express.raw({ type: "*/*" }));
app.use(express.json());

app.get("/health", async (req: Request, res: Response) => {
    res.send({ message: "Health OK!" });
});

app.use("/api/my/user", myUserRoute);
app.use("/api/my/restaurant", myRestaurantRouter);
app.use("/api/restaurant", restaurantRouter);
app.use("/api/order", orderRoute);

app.listen(8080, () => {
    console.log("Server is running on port 8080");
});
