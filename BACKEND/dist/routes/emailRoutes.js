import { Router } from "express";
import { sendEmailHandler, subscribeHandler } from "../controllers/emailController";
const router = Router();
router.post("/send-email", sendEmailHandler);
router.post("/subscribe", subscribeHandler);
export default router;
