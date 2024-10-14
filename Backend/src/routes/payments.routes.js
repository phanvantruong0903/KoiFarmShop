import { wrapAsync } from "../utils/handle.js";
import zaloPayment from "../services/zalopay.service.js";
import { Router } from "express";
import { callback } from "../services/callback.service.js";

const paymentRouter = Router()

paymentRouter.post("/paymentZalopay", wrapAsync(zaloPayment));
paymentRouter.post("/callback", wrapAsync(callback));


export default paymentRouter