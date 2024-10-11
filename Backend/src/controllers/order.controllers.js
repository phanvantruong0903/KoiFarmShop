// import OrderSchema from '../models/schemas/Order.schema.js'
import databaseService from '../services/database.service.js';
import ordersService from '../services/orders.Service.js';

export const createOrderController = async(req,res)=>{
    try {
        const result = await ordersService.createOrder(req.body);
        
        console.log("result: ",result)
          return res.json({
            message: USERS_MESSAGES.GET_ORDER_SUCCESS,
            result
          })
        } catch (error) {
          return res.status(500).json({ error: error.message })
        }
}

// const koiPrices = {
//     vietnamese: [
//         {
//             condition: '>',
//             size: 15,
//             price: 19000
//         }
//     ],
//     japanese: [
//         {
//             condition: '>',
//             size: 15,
//             price: 1199000
//         }
//     ],
//     F1: [
//         { condition: '<', size: 15, price: 1000000, description: 'Combo 39 con mix tất cả các loại' },
//         { condition: 'between', min: 15, max: 18, price: 1000000, description: 'Combo 20 con (Tặng 5 con)' },
//         { condition: 'between', min: 18, max: 20, price: 1000000, description: 'Combo 12 con (Tặng 3 con)' },
//         { condition: '=', size: 20, price: 75000 },
//         { condition: '=', size: 25, price: 99000 },
//         { condition: '=', size: 30, price: 179000 },
//         { condition: '=', size: 35, price: 239000 },
//         { condition: '=', size: 40, price: 379000 },
//         { condition: '=', size: 45, price: 579000 },
//         { condition: '=', size: 50, price: 679000 },
//         { condition: '=', size: 55, price: 779000 },
//         { condition: '=', size: 60, price: 879000 },
//         { condition: '=', size: 65, price: 979000 },
//         { condition: '=', size: 70, price: 1079000 },
//         { condition: '>', size: 75, price: 1179000 }
//     ]
// };

// const getPrice = (breed, size) => {
//     const breedPricing = koiPrices[breed]
//     if (!breedPricing) {
//         return 'Breed not found'
//     }
//     for (const pricing of breedPricing) {
//         if (pricing.condition === '>' && size > pricing.size) {
//             return pricing.price
//         }
//         if (pricing.condition === '<' && size < pricing.size) {
//             return pricing.price
//         }
//         if (pricing.condition === '=' && size === pricing.size) {
//             return pricing.price
//         }
//         if (pricing.condition === 'between' && size >= pricing.min && size <= pricing.max) {
//             return pricing.price
//         }
//     }
// }


        


// const getNewPrice = (quantity, koi, order) => {
//     let newTotalPrice = order.totalPrice
//     order.items?.map(item => {
//         if (item.koiId.toString() === koi?._id.toString()) {
//             newTotalPrice += koi.price * (quantity - item.quantity)
//         }
//     })
//     return newTotalPrice
// }

// export const updateOrderQuantity = async (req, res) => {
//     const { koiId, quantity } = req.body
//     const { id } = req.params
//     const koi = await databaseService.kois.findById(koiId)
//     const order = await databaseService.order.findById(id)
//     console.log(order)
//     console.log("new Price: ", getNewPrice(quantity, koi, order))
//     if (order) {
//         await Order.items.map()
//         res.status(200).send(order)
//     } else {
//         res.status(400)
//         throw new Error("Order not found!");
//     }
// }
// const updateOrderDiscount = asyncHandler(async (req,res) => {
//     const {discount} = req.body
//     const {}
// })