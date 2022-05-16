import axiosInstance from "../api";
import { ToastAndroid } from "react-native";

export class RequestService{
    static async SendRequest(data,token){
        const res = await axiosInstance.post('/create_request',data,{headers: { Authorization: `Bearer ${token}` }});
        return res;
    }

    static async EditRequest(requestId,data,token){
        const res = await axiosInstance.put(`/update_request?request_id=${requestId}`,data,{headers: { Authorization: `Bearer ${token}` }});
        return res;
    }

    static async getSentRequestsByUserId(userId,token){
        const res = await axiosInstance.get(`/get_sent_requests?user_id=${userId}`,{headers: { Authorization: `Bearer ${token}` }});
        return res;
    }

    static async getRecievedRequestsByUserId(user_id,token){
        const res = await axiosInstance.get(`/get_recieved_requests?user_id=${user_id}`,{headers: { Authorization: `Bearer ${token}` }});
        return res;
    }

    static async getRecievedPublicRequests(token){
        const res = await axiosInstance.get(`/get_recieved_public_requests`,{headers: { Authorization: `Bearer ${token}` }});
        return res;
    }

    static async filterRecievedRequestsByUserIdAndStatus(userId,status,token){
        const res = await axiosInstance.get(`/get_recieved_requests_by_status?user_id=${userId}&status=${status}`,{headers: { Authorization: `Bearer ${token}` }});
        return res;
    }
}