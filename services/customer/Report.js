import axiosInstance from "../api";
import { ToastAndroid } from "react-native";

export class ReportService{
    static async AddReport(data){
        const res = await axiosInstance.post('/report',data);
        return res;
    }

    static async deleteUserById(userId){
        const res = await axiosInstance.delete(`/delete_user?id=${userId}`);
        return res;
    }
}