import databaseService from './database.service.js'
import { ObjectId } from 'mongodb'

class OrderDetailService {
    async addToCart(payload, reqCookie) {
        const koi = await databaseService.kois.findOne({ _id: new ObjectId(payload.KoiID) })
        if (!koi) {
            throw new Error('Koi not found!')
        }

        let order
        let newPrice

        if (reqCookie && reqCookie.Items) {
            order = reqCookie

            if (!order.Items) {
                order.Items = []
            }

            if (order.TotalPrice == null) {
                order.TotalPrice = 0 // Khởi tạo nếu null
            }

            const itemIndex = order.Items.findIndex((item) => item.KoiID === payload.KoiID)
            if (itemIndex > -1) {
                // Tăng số lượng
                order.Items[itemIndex].Quantity++
                newPrice = Number(koi.Price) // Tính giá trị cho mục hiện tại
            } else {
                // Thêm mục mới
                order.Items.push({ KoiID: payload.KoiID, Quantity: 1 })
                newPrice = Number(koi.Price) // Tính giá trị cho mục mới
            }

            // Cập nhật TotalPrice
            order.TotalPrice += newPrice
        } else {
            order = {
                Items: [{ KoiID: payload.KoiID, Quantity: 1 }],
                TotalPrice: Number(koi.Price) // Khởi tạo với giá của koi
            }
        }
        return { order, koi }
    }
    async buyNow(payload, reqCookie) {
        const koi = await databaseService.kois.findOne({ _id: new ObjectId(payload.KoiID) })
        if (!koi) {
            throw new Error('Koi not found!')
        }

        let order = reqCookie || {
            Items: [],
            TotalPrice: 0
        }

        if (order.TotalPrice == null) {
            order.TotalPrice = 0 // Khởi tạo nếu null
        }

        order = {
            Items: [{ KoiID: payload.KoiID, Quantity: 1 }],
            TotalPrice: Number(koi.Price) // Khởi tạo với giá của koi
        }

        console.log('Updated TotalPrice:', order.TotalPrice) // Kiểm tra giá trị
        const savedOrder = await this.saveOrderToDatabase(order)
        return { order: savedOrder, koi }
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

    async fetchOrder(payload) {
        const result = await databaseService.orderDetail.findOne({ _id: new ObjectId(payload.orderID) })
        return result ? result : {}
    }

    async updateItemQuantity(payload, reqParams) {
        const koi = await databaseService.kois.findOne({ _id: new ObjectId(payload.KoiID) })
        const order = await databaseService.orderDetail.findOne({ _id: new ObjectId(reqParams.orderID) })
        console.log('order: ', order)
        let result
        if (order) {
            result = await databaseService.orderDetail.findOneAndUpdate(
                { _id: new ObjectId(reqParams.orderID) },
                {
                    $set: {
                        Items: order.Items?.map((item) => {
                            return item.KoiID === payload.KoiID
                                ? {
                                    KoiID: item.KoiID,
                                    Quantity: payload.Quantity
                                }
                                : {
                                    KoiID: item.KoiID,
                                    Quantity: item.Quantity
                                }
                        }),
                        TotalPrice: order.TotalPrice + koi.Price * payload.Quantity
                    }
                },
                { returnDocument: 'after' }
            )
        }
        return result
    }

    async getKoiPrice(payload) {
        // let koi = await databaseService.kois.findOne({_id: new ObjectId(payload.KoiID)})
        let koisList, quantity
        koisList = await databaseService.kois
            .find({
                $and: [{ CategoryID: payload.CategoryID }, { Breed: payload.Breed }, { Size: payload.Size }]
            })
            .toArray()
        console.log('list: ', koisList)
        quantity = koisList?.length
        console.log('quantity: ', quantity)
        const koiPrices = {
            Việt: [
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
            Japan: [
                { min: 0, max: 15, priceMin: 750000, priceMax: 1500000, description: '<15cm' },
                { min: 15, max: 18, priceMin: 1000000, priceMax: 2500000, description: '15-18cm' },
                { min: 18, max: 20, priceMin: 1400000, priceMax: 3000000, description: '18-20cm' },
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
        if (priceCheck)
            return {
                CategoryName: {
                    Size: payload.Size,
                    Price: priceCheck.price,
                    Quantity: quantity
                }
            }
    }

    async getMinMaxPrice(payload) {
        const koiList = await databaseService.kois
        .find({
            $and: [{ CategoryID: payload.CategoryID }, { Breed: payload.Breed }, { Size: payload.Size }]
        })
        .toArray()
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
        return {
            min: minPrice,
            max: maxPrice
        } 
    }
}

const orderDetailService = new OrderDetailService()
export default orderDetailService

// Tìm kiếm Koi trong database
