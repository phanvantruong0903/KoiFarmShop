import HTTP_STATUS from '../constants/httpStatus.js';
import databaseService from './database.service.js'
import { ObjectId } from 'mongodb'

class OrderDetailService {
    async makeOrder(payload, reqCookie) {
        const koi = await databaseService.kois.findOne({ _id: new ObjectId(payload.KoiID) });
        console.log("koi", koi)
        if (!koi) {
            HTTP_STATUS.NOT_FOUND;
            throw new Error("Koi not found!");
        }

        let order, newPrice;
        if (reqCookie) {
            order = reqCookie;

            if (!order.Items) {
                order.Items = []
            }

            const itemIndex = order.Items.findIndex(item => item.KoiID === payload.KoiID);
            if (itemIndex > -1) {
                order.Items[itemIndex].Quantity++;
            } else {
                order.Items.push({ KoiID: payload.KoiID, Quantity: 1 });
            }
        } else {
            order = {
                Items: [{ KoiID: payload.KoiID, Quantity: 1 }],
                TotalPrice: koi.Price
            };
        }
        newPrice = Number(koi.Price + payload.Quantity)
        order.TotalPrice += newPrice
        const savedOrder = await this.saveOrderToDatabase(order);
        return { order: savedOrder, koi }
    }

    async saveOrderToDatabase(order) {
        if (order._id) {
            // If the order already has an _id, update it in the database
            const result = await databaseService.order.findOneAndUpdate(
                { _id: new ObjectId(order._id) },
                {
                    $set: {
                        Items: order.Items,
                        TotalPrice: order.TotalPrice
                    }
                },
                { returnDocument: 'after' }
            );
            return result;
        } else {
            const result = await databaseService.order.insertOne(order);
            order._id = result.insertedId; // Attach the new _id to the order
            return order;
        }
    }

    async fetchOrder(payload) {
        const result = await databaseService.order.findOne({ _id: new ObjectId(payload.orderID) })
        return result ? result : {}
    }

    async updateOrder(payload, reqParams) {
        const koi = await databaseService.kois.findOne({ _id: new ObjectId(payload.KoiID) })
        const order = await databaseService.order.findOne({ _id: new ObjectId(reqParams.orderID) })
        console.log("order: ", order)
        let result
        if (order) {
            result = await databaseService.order.findOneAndUpdate(
                { _id: new ObjectId(reqParams.orderID) },
                {
                    $set: {
                        Items: order.Items?.map(item => {
                            return item.KoiID === payload.KoiID
                                ? {
                                    KoiID: item.KoiID,
                                    Quantity: payload.Quantity,
                                }
                                : {
                                    KoiID: item.KoiID,
                                    Quantity: item.Quantity
                                }
                        }),
                        TotalPrice: order.TotalPrice + (koi.Price * payload.Quantity)
                    }
                },
                { returnDocument: 'after' }
            )
        }

        return result
    }

    getPrice(breed, size) {
        const koiPrices = {
            vietnamese: [
                {
                    condition: '>',
                    size: 15,
                    price: 19000
                }
            ],
            japanese: [
                {
                    condition: '>',
                    size: 15,
                    price: 1199000
                }
            ],
            F1: [
                { condition: '<', size: 15, price: 1000000, description: 'Combo 39 con mix tất cả các loại' },
                { condition: 'between', min: 15, max: 18, price: 1000000, description: 'Combo 20 con (Tặng 5 con)' },
                { condition: 'between', min: 18, max: 20, price: 1000000, description: 'Combo 12 con (Tặng 3 con)' },
                { condition: '=', size: 20, price: 75000 },
                { condition: '=', size: 25, price: 99000 },
                { condition: '=', size: 30, price: 179000 },
                { condition: '=', size: 35, price: 239000 },
                { condition: '=', size: 40, price: 379000 },
                { condition: '=', size: 45, price: 579000 },
                { condition: '=', size: 50, price: 679000 },
                { condition: '=', size: 55, price: 779000 },
                { condition: '=', size: 60, price: 879000 },
                { condition: '=', size: 65, price: 979000 },
                { condition: '=', size: 70, price: 1079000 },
                { condition: '>', size: 75, price: 1179000 }
            ]
        };
        const breedPricing = koiPrices[breed]
        if (!breedPricing) {
            return 'Breed not found'
        }
        for (const pricing of breedPricing) {
            if (pricing.condition === '>' && size > pricing.size) {
                return pricing
            }
            if (pricing.condition === '<' && size < pricing.size) {
                return pricing
            }
            if (pricing.condition === '=' && size === pricing.size) {
                return pricing
            }
            if (pricing.condition === 'between' && size >= pricing.min && size <= pricing.max) {
                return pricing
            }
        }
    }

    getNewPrice(quantity, koi, order) {
        let newTotalPrice = order.totalPrice
        order.items?.map(item => {
            if (item.koiId.toString() === koi?._id.toString()) {
                newTotalPrice += koi.price * (quantity - item.quantity)
            }
        })
        return newTotalPrice
    }
    async calKoiPrice(payload, reqParams){
        const koi = await databaseService.kois.findOne({_id: new ObjectId(reqParams.KoiID)})
        
    }
}


const orderDetailService = new OrderDetailService()
export default orderDetailService


// Tìm kiếm Koi trong database
