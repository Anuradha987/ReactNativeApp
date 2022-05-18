import axiosInstance from "./api";
import { ToastAndroid } from "react-native";

export class AuthService{
    static async login(data){
        const res = await axiosInstance.post('/login',data);
        return res;
    }
    
    static async test(){
        axiosInstance.get('').then(
            function(res){
                console.log(res.data);
                ToastAndroid.show(res.data, ToastAndroid.SHORT);
            }
        ).catch(function(error){
            console.log(error);
        })
    }

    static async register(data){
        const res = await axiosInstance.post('/register',data);

        return res;
    }


}
