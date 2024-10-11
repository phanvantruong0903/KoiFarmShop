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

            if(!order.Items){
                order.Items = []
            }

            const itemIndex = order.Items.findIndex(item => item.KoiID === payload.KoiID);
            if (itemIndex > -1) {
                order.Items[itemIndex].Quantity++;    
            } else {
                order.Items.push({ KoiID:payload.KoiID, Quantity:1 });
            }
        } else {
            order = {
                Items: [{  KoiID:payload.KoiID, Quantity:1 }],
                TotalPrice: koi.Price
            };
        }
        newPrice = Number(koi.Price + payload.Quantity)
        order.TotalPrice += newPrice
        const savedOrder = await this.saveOrderToDatabase(order);
        return {order: savedOrder, koi}
    }

    async saveOrderToDatabase(order) {
        if (order._id) {
            // If the order already has an _id, update it in the database
            const result = await databaseService.order.findOneAndUpdate(
                { _id: new ObjectId(order._id) },
                { $set: { 
                    Items: order.Items, 
                    TotalPrice: order.TotalPrice 
                } },
                { returnDocument: 'after' }
            );
            return result;
        } else {
            const result = await databaseService.order.insertOne(order);
            order._id = result.insertedId; // Attach the new _id to the order
            return order;
        }
    }

    async fetchOrder(payload){
        const result = await databaseService.order.findOne({_id: new ObjectId(payload.orderID)})
        return result ? result : {}
    }

    async updateOrder(payload, reqParams){
        const koi = await databaseService.kois.findOne({_id: new ObjectId(payload.KoiID)})
        const order = await databaseService.order.findOne({_id: new ObjectId(reqParams.orderID)})
        console.log("order: ", order)
        let result
        if(order){
            result = await databaseService.order.findOneAndUpdate(
                {_id: new ObjectId(reqParams.orderID)},
                { $set: { 
                    Items: order.Items?.map(item=>{
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
                } },
                { returnDocument: 'after' }
            )
        }
        
        return result
    }
}


const orderDetailService = new OrderDetailService()
export default orderDetailService


// Tìm kiếm Koi trong database
