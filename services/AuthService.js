import axiosInstance from "./api";
import { ToastAndroid } from "react-native";

export class AuthService{


    userId=null;
    userToken=null;

    // set UserId(userId){
    //     console.log("set user id");
    //     this.userId=userId;
    // }

    // set UserToken(userToken){
    //     console.log("set user token");
    //     this.userToken=userToken;
    // }

    // get UserId(){
    //     return this.userId;
    // }

    // get UserToken(){
    //     return this.userToken;
    // }

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

    static async updateUserDetailsByUserId(userId,data,token){
        const res = await axiosInstance.put(`/user_details?user_id=${userId}`,data,{headers: { Authorization: `Bearer ${token}` }});
        return res;
    }


}

