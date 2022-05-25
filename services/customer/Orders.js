import axiosInstance from "../api";
import { ToastAndroid } from "react-native";

export class OrderService{
    static async AddOrder(data,token){
        const res = await axiosInstance.post('/create_order',data,{headers: { Authorization: `Bearer ${token}` }});
        return res;
    }

    static async getOrdersByUserId(userId,token){
        const res = await axiosInstance.get(`/get_orders?user_id=${userId}`,{headers: { Authorization: `Bearer ${token}` }});
        return res;
    }

    static async getOrdersByUserIdAndStatus(userId,status,token){
        const res = await axiosInstance.get(`/get_orders?user_id=${userId}&status=${status}`,{headers: { Authorization: `Bearer ${token}` }});
        return res;
    }

    static async getRecievedOrders(userId,status,token){
        const res = await axiosInstance.get(`/get_recived_orders?user_id=${userId}&status=${status}`,{headers: { Authorization: `Bearer ${token}` }});
        return res;
    }

    static async EditOrder(orderId,data,token){
        const res = await axiosInstance.put(`/update_order?order_id=${orderId}`,data,{headers: { Authorization: `Bearer ${token}` }});
        return res;
    }
}