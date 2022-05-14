import axiosInstance from "../api";
import { ToastAndroid } from "react-native";

export class NotificationService{
    static async getNotificationsForRecievedRequests(userId,token){
        const res = await axiosInstance.get(`/get_request_notifications?user_id=${userId}`,{headers: { Authorization: `Bearer ${token}` }});
        return res;
    }

    static async getNotificationsForOrders(userId,token){
        const res = await axiosInstance.get(`/get_order_notifications?user_id=${userId}`,{headers: { Authorization: `Bearer ${token}` }});
        return res;
    }
}