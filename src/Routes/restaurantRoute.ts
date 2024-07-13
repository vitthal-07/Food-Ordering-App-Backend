import express from "express";
import { param } from "express-validator";
import { searchRestaurant } from "../controllers/restaurantController";

const router = express.Router();

router.get(
  "/search/:city",
  param("city")
    .isString()
    .trim()
    .notEmpty()
    .withMessage("City parameter must be a valid string"),
  searchRestaurant
);

export default router;
