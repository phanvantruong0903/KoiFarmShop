import { wrapAsync } from "../utils/handle.js";
import zaloPayment from "../services/zalopay.service.js";
import { Router } from "express";

const paymentRouter = Router()

paymentRouter.post("/paymentZalopay", wrapAsync(zaloPayment));

export default paymentRouter