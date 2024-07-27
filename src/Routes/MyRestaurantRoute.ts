import express from "express";
import multer from "multer";
import {
    createMyRetaurant,
    getMyRestaurant,
    updateMyRestaurant,
} from "../controllers/MyRestaurantController";
import { jwtCheck, jwtParse } from "../middlewares/Auth";
import { validateMyRestaurantRequest } from "../middlewares/Validation";

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({
    storage: storage,
    limits: {
        fileSize: 5 * 1024 * 1024, //5mb
    },
});

router.get("/", jwtCheck, jwtParse, getMyRestaurant);

router.post(
    "/",
    upload.single("imageFile"),
    validateMyRestaurantRequest,
    jwtCheck,
    jwtParse,
    createMyRetaurant
);

router.put(
    "/",
    upload.single("imageFile"),
    validateMyRestaurantRequest,
    jwtCheck,
    jwtParse,
    updateMyRestaurant
);

export default router;
