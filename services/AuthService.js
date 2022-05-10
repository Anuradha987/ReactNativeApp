import axiosInstance from "./api";
import { ToastAndroid } from "react-native";

export class AuthService{
    static async login(data){
        axiosInstance.post('/login',data).then(
            function(res){
                console.log(res.data);
            }
        ).catch(function(error){
            console.log(error);
        })
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

