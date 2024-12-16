import axios from "axios";
import { api } from "./utility";

export const sendEmailOtp = async(email)=>{
        try {
            const url = api+"/custlog/request-otp";
            const res = await axios.post(url,{email:email});
            console.log(res);
            return true;
        } catch (error) {
            console.log(error.response.data.error);
            if(error.response.data.error === "User already exist."){
                return "User already exist."
            }
            return false;
        }
}

export const verifyOtp = async(email,otp) =>{
    try {
        const url = api+"/custlog/verify-otp";
        const data ={email,otp};
        await axios.post(url,data);
        return true;
    } catch (error) {
        console.log(error.response.status);
        
        if(error.response.status === 400){
            return 400
        }
        return false;
    }
}
export const getUserDetail = async(token) => {
    try {
        const url = api+"/custlog/verify-token";
        const res = await axios.post(url,{token});
        console.log(res);
        return res.data;
    } catch (error) {
        return "Something went wrong";
    }
}