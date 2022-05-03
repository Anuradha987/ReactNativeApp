import axiosInstance from "./api"

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
            }
        ).catch(function(error){
            console.log(error);
        })
    }
}

