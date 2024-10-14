import axios from 'axios'; // npm install axios
import crypto from 'crypto'; // npm install crypto

export const momoPayment = async (req, res) => {
  // Parameters
  const accessKey = 'F8BBA842ECF85';
  const secretKey = 'K951B6PE1waDMi640xX08PD3vg6EkVlz';
  const orderInfo = 'Pay with MoMo';
  const partnerCode = 'MOMO';
  const redirectUrl = 'https://www.facebook.com/';
  const ipnUrl = 'https://8973-171-247-187-77.ngrok-free.app/payment/momoCallback';
  const requestType = 'payWithMethod';
  const amount = req.body.total;
  const orderId = req.body.OrderID;
  const requestId = orderId;
  const extraData = '';
  const orderGroupId = '';
  const autoCapture = true;
  const lang = 'vi';

  // Create raw signature
  const rawSignature = `accessKey=${accessKey}&amount=${amount}&extraData=${extraData}&ipnUrl=${ipnUrl}&orderId=${orderId}&orderInfo=${orderInfo}&partnerCode=${partnerCode}&redirectUrl=${redirectUrl}&requestId=${requestId}&requestType=${requestType}`;

  // Log the raw signature
  console.log('--------------------RAW SIGNATURE----------------');
  console.log(rawSignature);

  // Generate signature
  const signature = crypto.createHmac('sha256', secretKey)
    .update(rawSignature)
    .digest('hex');

  // Log the signature
  console.log('--------------------SIGNATURE----------------');
  console.log(signature);

  // JSON object to send to MoMo endpoint
  const requestBody = JSON.stringify({
    partnerCode,
    partnerName: 'Test',
    storeId: 'MomoTestStore',
    requestId,
    amount,
    orderId,
    orderInfo,
    redirectUrl,
    ipnUrl,
    lang,
    requestType,
    autoCapture,
    extraData,
    orderGroupId,
    signature,
  });

  // Create the HTTPS options
  const options = {
    url: 'https://test-payment.momo.vn/v2/gateway/api/create',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(requestBody),
    },
    data: requestBody,
  };

  // Send the request and get the response
  try {
    const result = await axios(options);
    return res.status(200).json(result.data);
  } catch (error) {
    console.error(error); // Log the error for debugging
    return res.status(500).json({
      statuscode: 500,
      message: 'Server error',
    });
  }
};
