import axiosInstance from "../api";
import { ToastAndroid } from "react-native";

export class ServicesService{
    static async AddService(data){
        const res = await axiosInstance.post('/create_service',data);
        return res;
    }

    static async getServicesByUserId(userId){
        const res = await axiosInstance.get(`/services?user_id=${userId}`);
        return res;
    }

    static async getUserDetailsByUserId(userId){
        const res = await axiosInstance.get(`/user_details?user_id=${userId}`);
        return res;
    }

    static async updateUserDetailsByUserId(userId,data){
        const res = await axiosInstance.put(`/user_details?user_id=${userId}`,data);
        return res;
    }
}