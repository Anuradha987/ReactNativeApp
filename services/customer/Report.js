import axiosInstance from "../api";
import { ToastAndroid } from "react-native";

export class ReportService{
    static async AddReport(data,token){
        const res = await axiosInstance.post('/report',data,{headers: { Authorization: `Bearer ${token}` }});
        return res;
    }

    static async deleteUserById(userId,token){
        const res = await axiosInstance.delete(`/delete_user?id=${userId}`,{headers: { Authorization: `Bearer ${token}` }});
        return res;
    }
}