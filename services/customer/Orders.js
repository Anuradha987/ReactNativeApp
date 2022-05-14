import axiosInstance from "../api";
import { ToastAndroid } from "react-native";

export class OrderService{
    static async AddOrder(data){
        const res = await axiosInstance.post('/create_order',data);
        return res;
    }

    static async getOrdersByUserId(userId,status){
        const res = await axiosInstance.get(`/get_orders?user_id=${userId}&status=${status}`);
        return res;
    }

    static async EditOrder(orderId,data){
        const res = await axiosInstance.put(`/update_order?order_id=${orderId}`,data);
        return res;
    }
}