import OrdersSchema from "../models/schemas/Order.schema.js"
import UserSchema from "../models/schemas/User.schema.js"
import databaseService from "./database.service.js"
import bcrypt from 'bcrypt'
import { ObjectId } from "mongodb"

    class OrdersService {
        async createNewUser(payload){
            const password = Math.random().toString(36).slice(-8)
            const hashedPassword = await bcrypt.hash(password,10)

            const user_id = new ObjectId()
            const userPayload = {
                _id: user_id,
                email: payload.email,
                name: payload.name,
                address: payload.address,
                phone_number: payload.phone_number,
                password: hashedPassword,
                username: `user${user_id.toString()}`,
                roleid: 1
            }
            await databaseService.users.insertOne(new UserSchema(userPayload))
            const newUser = await databaseService.users.findOne({ _id: user_id })
            return newUser
        }

        async createOrder(payload, reqParams, type = 'cart'){
            const existedUser = await databaseService.users.findOne({email: payload.email})

            let user, newOrder, user_id

            if(existedUser){
                user_id = existedUser._id
                user = await databaseService.users.findOne({_id: new ObjectId(user_id)})
                console.log('Existed User: ', user)
            }else{
                
                user = await this.createNewUser(payload)
                user_id = user.insertedId
                console.log("New user inserted: ", user);
            }
            
            const orderPayload = {
                _id: new ObjectId(),
                UserID: user_id,
                OrderDetailID: reqParams.orderDTID,
                ShipAddress: payload.ShipAddress,
                Description: payload.Description,
                OrderDate: new Date(),
                Status: 1,
                Type: type
            }
            newOrder = await databaseService.order.insertOne(new OrdersSchema(orderPayload))
            const order = await databaseService.order.findOne({_id: new ObjectId(newOrder.insertedId)})
            return {user,order}
        }

        async createBuyNowOrder(payload, reqParams) {
            // Gọi createOrder với type là 'buyNow'
            return await this.createOrder(payload, reqParams, 'buyNow');
        }
    
        async createCartOrder(payload, reqParams) {
            // Gọi createOrder với type là 'cart'
            return await this.createOrder(payload, reqParams, 'cart');
        }
        
    }


    const ordersService = new OrdersService()
    export default ordersService


    // Tìm kiếm Koi trong database
