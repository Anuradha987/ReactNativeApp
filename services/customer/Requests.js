import axiosInstance from "../api";
import { ToastAndroid } from "react-native";

export class RequestService{
    static async SendRequest(data){
        const res = await axiosInstance.post('/create_request',data);
        return res;
    }

    static async EditRequest(requestId,data){
        const res = await axiosInstance.put(`/update_request?request_id=${requestId}`,data);
        return res;
    }

    static async getSentRequestsByUserId(userId){
        const res = await axiosInstance.get(`/get_sent_requests?user_id=${userId}`);
        return res;
    }

    static async getRecievedPublicRequests(){
        const res = await axiosInstance.get(`/get_recieved_public_requests`);
        return res;
    }

    static async filterRecievedRequestsByUserIdAndStatus(userId,status){
        const res = await axiosInstance.get(`/get_recieved_requests_by_status?user_id=${userId}&status=${status}`);
        return res;
    }
}