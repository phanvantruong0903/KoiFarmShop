import { wrapAsync } from "../utils/handle.js";
import zaloPayment from "../services/zalopay.service.js";
import { Router } from "express";
import { callback } from "../services/callback.service.js";
import { momoPayment } from "../services/momo.service.js";
import { momoCallback } from "../services/momocallback.js";

const paymentRouter = Router()

paymentRouter.post("/paymentZalopay", wrapAsync(zaloPayment));
paymentRouter.post("/callback", wrapAsync(callback));

paymentRouter.post("/paymentMomo", wrapAsync(momoPayment))
paymentRouter.post("/momoCallback",wrapAsync(momoCallback))


export default paymentRouter