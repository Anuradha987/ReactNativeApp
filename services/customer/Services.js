import axiosInstance from "../api";
import { ToastAndroid } from "react-native";

export class ServicesService{

    static async AddService(data,token){
        const res = await axiosInstance.post('/create_service',data,{headers: { Authorization: `Bearer ${token}` }});
        return res;
    }

    static async UpdateService(serviceId,data,token){
        const res = await axiosInstance.post(`/update_service/?service_id=${serviceId}`,data,{headers: { Authorization: `Bearer ${token}` }});
        return res;
    }

    static async getServicesByUserId(userId,token){
        const res = await axiosInstance.get(`/services?user_id=${userId}`,{headers: { Authorization: `Bearer ${token}` }});
        return res;
    }

    static async getAllServices(token){
        const res = await axiosInstance.get(`/get_services`,{headers: { Authorization: `Bearer ${token}` }});
        return res;
    }

    static async getUserDetailsByUserId(userId,token){
        const res = await axiosInstance.get(`/user_details?user_id=${userId}`,{headers: { Authorization: `Bearer ${token}` }});
        return res;
    }


}