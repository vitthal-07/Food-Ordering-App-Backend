import express from "express";
import { jwtCheck, jwtParse } from "../middlewares/auth";
import {
  createCurrentUser,
  getCurrentUser,
  updateCurrentUser,
} from "../controllers/myUserController";
import { validateMyUserRequest } from "../middlewares/validation";

const router = express.Router();

router.get("/", jwtCheck, jwtParse, getCurrentUser);
router.post("/", jwtCheck, createCurrentUser);
router.put("/", jwtCheck, jwtParse, validateMyUserRequest, updateCurrentUser);

export default router;
