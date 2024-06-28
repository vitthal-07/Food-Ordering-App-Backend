import express from "express";
import { createCurrentUser } from "../controllers/MyUserController";

const router = express.Router();

router.post("/", createCurrentUser);

export default router;
