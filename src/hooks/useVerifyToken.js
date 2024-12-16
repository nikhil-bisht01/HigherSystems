import  { useContext, useEffect } from 'react'
import { UserDataContext } from '../context/UserContext'
import { api } from '../utils/utility';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const useVerifyToken = () => {
    const {setUser} = useContext(UserDataContext);
    const navigate = useNavigate();
    const verifyToken =async ()=>{
        try {
            const user = JSON.parse(localStorage.getItem("higherIndia"));
            if(!user){
              navigate("/auth/login")
              return;
            }
            const url = api+"/custlog/verify-token";
            const res = await axios.post(url,{token:user?.token});            
            setUser(res.data)
        } catch (error) {
            navigate("/auth/login");
        }
    }
    useEffect(()=>{
        verifyToken();
        // eslint-disable-next-line
    },[])
}

export default useVerifyToken