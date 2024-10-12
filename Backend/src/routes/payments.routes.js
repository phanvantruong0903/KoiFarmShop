import { wrapAsync } from "../utils/handle.js";
import zaloPayment from "../services/zalopay.service.js";
import { Router } from "express";

const paymentRouter = Router()

paymentRouter.post("/paymentZalopay", zaloPayment);

export default paymentRouter