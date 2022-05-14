import axiosInstance from "../api";
import { ToastAndroid } from "react-native";

export class NotificationService{
    static async getNotificationsForRecievedRequests(userId){
        const res = await axiosInstance.get(`/get_request_notifications?user_id=${userId}`);
        return res;
    }

    static async getNotificationsForOrders(userId){
        const res = await axiosInstance.get(`/get_order_notifications?user_id=${userId}`);
        return res;
    }
}