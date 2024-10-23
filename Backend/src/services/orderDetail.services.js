import databaseService from './database.service.js'
import { ObjectId } from 'mongodb'

class OrderDetailService {
    async addToCart(payload, reqCookie) {
        const koi = await databaseService.kois.findOne({ _id: new ObjectId(payload.KoiID) })
        if (!koi) {
            throw new Error('Koi not found!')
        }

        let orderDT
        let newPrice

        if (reqCookie && reqCookie.Items) {
            orderDT = reqCookie

            if (!orderDT.Items) {
                orderDT.Items = []
            }

            if (orderDT.TotalPrice == null) {
                orderDT.TotalPrice = 0 // Khởi tạo nếu null
            }

            const itemIndex = orderDT.Items.findIndex((item) => item.KoiID === payload.KoiID)
            if (itemIndex > -1) {
                // Tăng số lượng
                orderDT.Items[itemIndex].Quantity++
                newPrice = Number(koi.Price) // Tính giá trị cho mục hiện tại
            } else {
                // Thêm mục mới
                orderDT.Items.push({ KoiID: payload.KoiID, Quantity: 1 })
                newPrice = Number(koi.Price) // Tính giá trị cho mục mới
            }

            // Cập nhật TotalPrice
            orderDT.TotalPrice += newPrice
        } else {
            orderDT = {
                Items: [{ KoiID: payload.KoiID, Quantity: 1 }],
                TotalPrice: Number(koi.Price) // Khởi tạo với giá của koi
            }
        }
        const savedOrder = await this.saveOrderToDatabase(orderDT)
        return { orderDT: savedOrder, koi }
    }
    async buyNow(payload, reqCookie) {
        const koi = await databaseService.kois.findOne({ _id: new ObjectId(payload.KoiID) })
        if (!koi) {
            throw new Error('Koi not found!')
        }

        let orderDT = reqCookie || {
            Items: [],
            TotalPrice: 0
        }

        if (orderDT.TotalPrice == null) {
            orderDT.TotalPrice = 0 // Khởi tạo nếu null
        }

        orderDT = {
            Items: [{ KoiID: payload.KoiID, Quantity: 1 }],
            TotalPrice: Number(koi.Price) // Khởi tạo với giá của koi
        }

        console.log('Updated TotalPrice:', orderDT.TotalPrice) // Kiểm tra giá trị
        const savedOrder = await this.saveOrderToDatabase(orderDT)
        return { orderDT: savedOrder, koi }
    }

    async saveOrderToDatabase(order) {
        if (order._id) {
            // If the order already has an _id, update it in the database
            const result = await databaseService.orderDetail.findOneAndUpdate(
                { _id: new ObjectId(order._id) },
                {
                    $set: {
                        Items: order.Items,
                        TotalPrice: order.TotalPrice
                    }
                },
                { returnDocument: 'after' }
            )
            return result
        } else {
            const result = await databaseService.orderDetail.insertOne(order)
            order._id = result.insertedId // Attach the new _id to the order
            return order
        }
    }
    // async saveOrderToDatabase(order) {

    //         const result = await databaseService.orderDetail.insertOne(order)
    //         order._id = result.insertedId // Attach the new _id to the order
    //         return order

    // }

    async fetchOrder(payload) {
        const result = await databaseService.orderDetail.findOne({ _id: new ObjectId(payload.orderID) })
        if(!result){
            return null
        }
        const koiList = await Promise.all(result.Items.map(async(item)=>await databaseService.kois.findOne({_id: new ObjectId(item.KoiID)})))
        // const items = await Promise.all(result.Items.map(async (item) => {
        //     const koi = await databaseService.kois.findOne({ _id: new ObjectId(item.KoiID) });
        //     const category = await databaseService.category.findOne({ _id: new ObjectId(koi.CategoryID) });
        //     return {
        //         KoiName: koi.KoiName,
        //         CategoryName: category.CategoryName,
        //         Size: koi.Size,
        //         Image: koi.Image
        //     };
        // }));
        return {
            result,
            koiList: koiList
        }
    }

    async updateItemQuantity(payload, reqOrderDTCookie) {
        const koiList = await this.getSamePropertiesKoi(payload.KoiID)
        console.log("koiList: ", koiList)
        const quantity = koiList?.length
        if(payload.Quantity > quantity){
            return `${quantity} available in stock`
        }
        let orderDT
        let oldPrice = 0
        let updatedPrice = 0
        let updatedList = koiList.slice(0, payload.Quantity);
        console.log("updatedKoiList: ", updatedList)
        if(reqOrderDTCookie){
            orderDT = reqOrderDTCookie
            console.log("orderDetail: ", orderDT)
            orderDT?.Items.map(item=>{
                const foundKoi = koiList?.find(koi=> koi._id.toString()===item.KoiID)
                console.log('found koi: ', foundKoi)
                if(foundKoi){
                    oldPrice+=foundKoi.Price
                }
            })
            console.log("old price: ", oldPrice)
            
            orderDT = {
                Items: updatedList?.map((updatedKoi) => {
                    

                    updatedPrice += updatedKoi.Price 
                    return {
                        KoiID: updatedKoi._id,
                        Quantity: 1
                    }
                }),
                TotalPrice: orderDT?.TotalPrice - oldPrice + updatedPrice
            }
            console.log("updated Order detail: ", orderDT)
            return {orderDT}
        }else{
            return 'Order detail not found'
        }
    }
    // async updateItemQuantity(payload, reqParams, reqOrderDTCookie) {
    //     const koi = await databaseService.kois.findOne({ _id: new ObjectId(payload.KoiID) })
    //     const koiList = this.getSamePropertiesKoi(payload.KoiID)
    //     console.log("koiList: ", koiList)
    //     const order = await databaseService.orderDetail.findOne({ _id: new ObjectId(reqParams.orderID) })
    //     if(!order){
    //         return 'Order not found'
    //     }
    //     if(!koi){
    //         return 'Koi not exiested'
    //     }
    //     let result, oldQuantity
    //     if (order) {
    //         result = await databaseService.orderDetail.findOneAndUpdate(
    //             { _id: new ObjectId(reqParams.orderID) },
    //             {
    //                 $set: {
    //                     Items: order.Items?.map((item) => {
    //                         if (item.KoiID === payload.KoiID) {
    //                             oldQuantity = item.Quantity;  // Capture oldQuantity here
    //                             return {
    //                                 KoiID: item.KoiID,
    //                                 Quantity: payload.Quantity
    //                             };
    //                         } else {
    //                             return {
    //                                 KoiID: item.KoiID,
    //                                 Quantity: item.Quantity
    //                             }
    //                         }
    //                     }),
    //                     TotalPrice: order.TotalPrice + koi.Price * (payload.Quantity - oldQuantity)
    //                 }
    //             },
    //             { returnDocument: 'after' }
    //         )
    //     }
    //     return result
    // }

    async getKoiQuantity(payload) {
        // let koi = await databaseService.kois.findOne({_id: new ObjectId(payload.KoiID)})
        let koisList, quantity
        let size = payload.Size
        if (size < 15) {
            koisList = await databaseService.kois
                .find({
                    CategoryID: payload.CategoryID,
                    Breed: payload.Breed,
                    Size: { $lt: 15 }
                })
                .toArray();
        }
        else if (size >= 15 && size < 18) {
            koisList = await databaseService.kois
                .find({
                    CategoryID: payload.CategoryID,
                    Breed: payload.Breed,
                    Size: { $gte: 15, $lt: 18 }
                })
                .toArray();
        }
        else if (size >= 18 && size < 20) {
            koisList = await databaseService.kois
                .find({
                    CategoryID: payload.CategoryID,
                    Breed: payload.Breed,
                    Size: { $gte: 18, $lt: 20 }
                })
                .toArray();
        }
        else {
            koisList = await databaseService.kois
                .find({
                    CategoryID: payload.CategoryID,
                    Breed: payload.Breed,
                    Size: Number(payload.Size)
                })
                .toArray();
        }
        console.log('list: ', koisList)
        quantity = koisList?.length
        console.log('quantity: ', quantity)
        const koiPrices = {
            Viet: [
                { min: 0, max: 15, price: 500000, description: 'Lô 39 con mix tất cả các loại' },
                { min: 15, max: 18, price: 500000, description: 'Lô 20 con (Tặng 5 con)' },
                { min: 18, max: 20, price: 500000, description: 'Lô 12 con (Tặng 3 con)' },
                { min: 20, max: 25, price: 50000, description: '20cm - <25cm' },
                { min: 25, max: 30, price: 90000, description: '25cm' },
                { min: 30, max: 35, price: 130000, description: '30cm' },
                { min: 35, max: 40, price: 180000, description: '35cm' },
                { min: 40, max: 45, price: 230000, description: '40cm' },
                { min: 45, max: 50, price: 300000, description: '45cm' },
                { min: 50, max: 55, price: 370000, description: '50cm' },
                { min: 55, max: 60, price: 450000, description: '55cm' },
                { min: 60, max: 65, price: 530000, description: '60cm' },
                { min: 65, max: 70, price: 620000, description: '65cm' },
                { min: 70, max: 75, price: 710000, description: '70cm' },
                { min: 75, max: Infinity, price: 850000, description: '>75cm' }
            ],
            F1: [
                { min: 0, max: 15, price: 1000000, description: 'Lô 39 con mix tất cả các loại' },
                { min: 15, max: 18, price: 1000000, description: 'Lô 20 con (Tặng 5 con)' },
                { min: 18, max: 20, price: 1000000, description: 'Lô 12 con (Tặng 3 con)' },
                { min: 20, max: 25, price: 120000, description: '20cm' },
                { min: 25, max: 30, price: 175000, description: '25cm' },
                { min: 30, max: 35, price: 250000, description: '30cm' },
                { min: 35, max: 40, price: 340000, description: '35cm' },
                { min: 40, max: 45, price: 420000, description: '40cm' },
                { min: 45, max: 50, price: 550000, description: '45cm' },
                { min: 50, max: 55, price: 680000, description: '50cm' },
                { min: 55, max: 60, price: 830000, description: '55cm' },
                { min: 60, max: 65, price: 1000000, description: '60cm' },
                { min: 65, max: 70, price: 1200000, description: '65cm' },
                { min: 70, max: 75, price: 1420000, description: '70cm' },
                { min: 75, max: Infinity, price: 1700000, description: '>75cm' }
            ],
            Nhat: [
                { min: 0, max: 15, priceMin: 800000, priceMax: 2000000, description: '<15cm' },
                { min: 15, max: 18, priceMin: 1000000, priceMax: 3000000, description: '15-18cm' },
                { min: 18, max: 20, priceMin: 2000000, priceMax: 3000000, description: '18-20cm' },
                { min: 20, max: 25, priceMin: 1700000, priceMax: 3400000, description: '20cm' },
                { min: 25, max: 30, priceMin: 2250000, priceMax: 4050000, description: '25cm' },
                { min: 30, max: 35, priceMin: 3000000, priceMax: 4900000, description: '30cm' },
                { min: 35, max: 40, priceMin: 3900000, priceMax: 5900000, description: '35cm' },
                { min: 40, max: 45, priceMin: 4200000, priceMax: 6300000, description: '40cm' },
                { min: 45, max: 50, priceMin: 6000000, priceMax: 8200000, description: '45cm' },
                { min: 50, max: 55, priceMin: 7300000, priceMax: 9600000, description: '50cm' },
                { min: 55, max: 60, priceMin: 8800000, priceMax: 11200000, description: '55cm' },
                { min: 60, max: 65, priceMin: 10500000, priceMax: 13000000, description: '60cm' },
                { min: 65, max: 70, priceMin: 12500000, priceMax: 15000000, description: '65cm' },
                { min: 70, max: 75, priceMin: 14700000, priceMax: 17700000, description: '70cm' },
                { min: 75, max: Infinity, priceMin: 17000000, priceMax: 20000000, description: '>75cm' }
            ]
        }
        const breedPricing = koiPrices[payload.Breed]
        const priceCheck = breedPricing?.find((range) => payload.Size >= range.min && payload.Size < range.max)
        if (koisList.length > 0 && priceCheck)
            return {
                CategoryName: {
                    Price: priceCheck.price,
                    Quantity: quantity,
                    Description: priceCheck.description
                }
            }
    }

    async findKoi(payload) {
        let koiList
        koiList = await databaseService.kois
            .find(
                {
                    CategoryID: payload.CategoryID,
                    Breed: payload.Breed,
                    Size: Number(payload.Size)
                })
            .toArray()
        return koiList
    }
    async filterKoiId(payload) {
        let koiList
        if (payload.CategoryID && (payload.Breed === 'Viet' || payload.Breed === 'F1')) {
            koiList = await databaseService.kois
                .find(
                    {
                        CategoryID: payload.CategoryID,
                        Breed: payload.Breed,
                        Size: Number(payload.Size)
                    })
                .toArray()
        } else if (payload.CategoryID && payload.Price) {
            koiList = await databaseService.kois
                .find(
                    {
                        CategoryID: payload.CategoryID,
                        Breed: payload.Breed,
                        Size: Number(payload.Size),
                        Price: payload.Price
                    })
                .toArray()
        } else if (payload.Price) {
            koiList = await databaseService.kois
                .find(
                    {
                        Breed: payload.Breed,
                        Size: Number(payload.Size),
                        Price: payload.Price
                    })
                .toArray()
        } else {
            koiList = await databaseService.kois
                .find(
                    {
                        Breed: payload.Breed,
                        Size: Number(payload.Size)
                    })
                .toArray()
        }
        if (payload.Quantity) {
            koiList.length = payload.Quantity
        }
        const koiIdList = koiList?.map(koi => koi._id)
        return {
            KoiList: koiList, 
            FirstKoiID: koiIdList[0],
            Quantity: koiList.length
        }
    }
    async getSamePropertiesKoi(KoiID) {
        const koi = await databaseService.kois.findOne({_id: new ObjectId(KoiID)})
        let koiProperties, koiList
        if(koi){
            if(koi.Breed === 'Viet' || koi.Breed === 'F1'){
                console.log("koi Viet hoac F1")
                koiProperties = {
                    CategoryID: koi.CategoryID,
                    Breed: koi.Breed,
                    Size: Number(koi.Size)
                }
            }else{
                console.log("koi Nhat")
                koiProperties = {
                    CategoryID: koi.CategoryID,
                    Breed: koi.Breed,
                    Size: Number(koi.Size),
                    Price: Number(koi.Price)
                } 
            }
            koiList = await databaseService.kois.find(koiProperties).toArray()
            return koiList
        }else{
            return {message: 'KoiID not found'}
        }
    }

    async makeArrayOrder(payload, reqCookie) {
        let koiList
        let newPrice = 0
        if (payload.Quantity) {
            koiList = (await this.filterKoiId(payload)).KoiList || []
        }
        console.log("koi list: ", koiList)
        let orderDT

        if (reqCookie && reqCookie.Items) { 
            orderDT = reqCookie
            console.log("orderDetail: ", orderDT)

            if (!orderDT.Items) {
                orderDT.Items = []
            }

            if (orderDT.TotalPrice == null) {
                orderDT.TotalPrice = 0 // Khởi tạo nếu null
            }

            // Thêm mục mới
            koiList.map(koi => {
                    const itemIndex = orderDT.Items.findIndex((item) => item.KoiID.toString() === koi._id.toString())
                    console.log("index: ", itemIndex)
                    if (itemIndex > -1) {
                        // Increment the quantity if the KoiID exists
                        orderDT.Items[itemIndex].Quantity++;
                        newPrice += Number(koi.Price); // Add the price of just one more koi
                    } else {
                        // Add new item
                        orderDT.Items.push({ KoiID: koi._id, Quantity: 1 });
                        newPrice += Number(koi.Price); // Add price for the new item
                    }
                
            })


            // Cập nhật TotalPrice
            orderDT.TotalPrice += newPrice
        } else {
            orderDT = {

                Items: koiList.map(koi => {
                    newPrice += koi.Price
                    return (
                        {
                            KoiID: koi._id,
                            Quantity: 1
                        }
                    )
                }),
                TotalPrice: Number(newPrice) // Khởi tạo với giá của koi
            }
            console.log("orderDT: ", orderDT)
        }
        const savedOrder = await this.saveOrderToDatabase(orderDT)
        return { orderDT: savedOrder, koiList }
    }

    async getMinMaxPrice(payload) {
        const koiList = await this.findKoi(payload)
        console.log("list kois: ", koiList)
        const minPrice = Math.min(
            ...koiList
                .map(koi => Number(koi.Price))
                .filter(price => !isNaN(price))
        );
        const maxPrice = Math.max(
            ...koiList
                .map(koi => Number(koi.Price))
                .filter(price => !isNaN(price))
        );
        if (koiList?.length > 0) {
            return {
                min: minPrice || 0,
                max: maxPrice || 0
            }
        }
    }
    async getKoiByPrice(payload) {
        const koiList = (await this.findKoi(payload)).filter(koi => koi.Price === payload.Price)
        const quantity = koiList?.length
        return (koiList && quantity > 0)
            ? {
                koiList,
                Quantity: quantity
            } :
            {
                koiList: [],
                Quantity: 0
            }
    }

}

const orderDetailService = new OrderDetailService()
export default orderDetailService

// Tìm kiếm Koi trong database
