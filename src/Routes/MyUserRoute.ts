import express from "express";
import { jwtCheck, jwtParse } from "../middlewares/Auth";
import {
    createCurrentUser,
    getCurrentUser,
    updateCurrentUser,
} from "../controllers/MyUserController";
import { validateMyUserRequest } from "../middlewares/Validation";

const router = express.Router();

router.get("/", jwtCheck, jwtParse, getCurrentUser);
router.post("/", jwtCheck, createCurrentUser);
router.put("/", jwtCheck, jwtParse, validateMyUserRequest, updateCurrentUser);

export default router;
