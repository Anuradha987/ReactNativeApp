import axiosInstance from "../api";
import { ToastAndroid } from "react-native";

export class ItemsService{
    static async AddItem(data,token){
        const res = await axiosInstance.post('/add_item',data,{headers: { Authorization: `Bearer ${token}` }});
        return res;
    }

    static async getItemsByUserId(userId,token){
        const res = await axiosInstance.get(`/get_item?user_id=${userId}`,{headers: { Authorization: `Bearer ${token}` }});
        return res;
    }

    static async getAllItems(token){
        const res = await axiosInstance.get(`/get_items`,{headers: { Authorization: `Bearer ${token}` }});
        return res;
    }

    static async deleteItem(itemId,token){
        const res = await axiosInstance.delete(`/delete_item?id=${itemId}`,{headers: { Authorization: `Bearer ${token}` }});
        return res;
    }
}