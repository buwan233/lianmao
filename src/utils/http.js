// axios 二次封装
import axios  from "axios"
import { showDialog } from "vant";
import router from "../router";
const instance =  axios.create({
    baseURL:'https://lianmall.usemock.com',
    timeout:1000,
   
})
instance.interceptors.request.use(function (config){
    // console.log(config);
    // config.headers={
    //     'X-Auth-Token' = sessionStorage.getItem('token')
    // }
    return config
},function(err){
    showDialog({message:err.message})
    // console.log(err);
})
instance.interceptors.response.use(function(res){
    // console.log(res);
    // if(res.status == 200){
    //     if(res.data.code == 20001){
            return res.data
    //     } 
    //     else{
    //         showDialog({message:res.data.message})
    //     }
    // }
    // else if(res.status == 401){
    //     showDialog({message:'未登录'})
    //     router.push('/login')
    // }
    // else{
    //     showDialog({
    //         message:'请求出错'
    //     })
    // }
},function(err){
    // console.log(err);
})
export default instance