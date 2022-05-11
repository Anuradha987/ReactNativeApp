import axiosInstance from "../api";
import { ToastAndroid } from "react-native";

export class RequestService{
    static async SendRequest(data){
        const res = await axiosInstance.post('/create_request',data);
        return res;
    }

    static async EditRequest(requestId,data){
        const res = await axiosInstance.post(`/update_request?request_id=${requestId}`,data);
        return res;
    }
}