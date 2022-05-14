import axiosInstance from "../api";
import { ToastAndroid } from "react-native";

export class ItemsService{
    static async AddItem(data){
        const res = await axiosInstance.post('/add_item',data);
        return res;
    }

    static async getItemsByUserId(userId){
        const res = await axiosInstance.get(`/get_item?user_id=${userId}`);
        return res;
    }

    static async getAllItems(){
        const res = await axiosInstance.get(`/get_items`);
        return res;
    }

    static async deleteItem(itemId){
        const res = await axiosInstance.delete(`/delete_item?id=${itemId}`);
        return res;
    }
}