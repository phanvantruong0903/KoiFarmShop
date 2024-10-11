import OrdersSchema from "../models/schemas/Order.schema"
import UserSchema from "../models/schemas/User.schema"
import databaseService from "./database.service"
import { ObjectId } from "mongodb"

    class OrdersService {
        async createNewUser(){

        }

        async createOrder(payload){
            const user_id = new ObjectId()
            const existedUser = await databaseService.users.findOne({email: payload.email})
            if(existedUser){

            }
            const newUser = new UserSchema({
                _id: user_id
            })
            const order = new OrdersSchema({
                
            })
        }
    }


    const ordersService = new OrdersService()
    export default ordersService


    // Tìm kiếm Koi trong database
