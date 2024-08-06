import express from "express";
import { jwtCheck, jwtParse } from "../middlewares/Auth";
import {
    createCheckoutSession,
    getMyOrders,
    stripeWebhookHandler,
} from "../controllers/OrderController";

const router = express.Router();

router.get("/", jwtCheck, jwtParse, getMyOrders);

router.post(
    "/checkout/create-checkout-session",
    jwtCheck,
    jwtParse,
    createCheckoutSession
);
router.post("/checkout/webhook", stripeWebhookHandler);

export default router;
