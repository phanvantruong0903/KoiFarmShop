import OrdersSchema from "../models/schemas/Order.schema.js"
import databaseService from "./database.service.js"
import bcrypt from 'bcrypt'
import { ObjectId } from "mongodb"
import usersService from "./users.services.js"

    class OrdersService {
        async createNewUser(){

        }

        async createOrder(payload, reqParams){
            //create random password
            const password = Math.random().toString(36).slice(-8)
            const hashedPassword = await bcrypt.hash(password,10)
            //create new user
            //check existed email
            const existedUser = await databaseService.users.findOne({email: payload.email})

            let user, newOrder, user_id

            if(existedUser){
                user_id = existedUser._id
                user = await databaseService.users.findOne({_id: new ObjectId(user_id)})
                console.log('new User: ', newUser)
            }else{
                user_id = new ObjectId()
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
                // newUser = await database Service.users.insertOne(new UserSchema(userPayload))   
                user = await usersService.register(userPayload)
                console.log("New user inserted: ", newUser);
            }
            
            const orderPayload = {
                _id: new ObjectId(),
                UserID: user_id,
                OrderDetailID: reqParams.orderDTID,
                ShipAddress: payload.ShipAddress,
                Description: payload.Description,
                OrderDate: new Date(),
                Status: 1
            }
            newOrder = await databaseService.order.insertOne(new OrdersSchema(orderPayload))
            // console.log("new order: ", newOrder)
            return {user,newOrder}
        }
    }


    const ordersService = new OrdersService()
    export default ordersService


    // Tìm kiếm Koi trong database
