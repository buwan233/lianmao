import { get } from 'vant/lib/utils'
import http from '../utils/http'
export const getHomeData = (params)=>{
   return http({
    url:'/home',
    data:params,
    method:'POST'
   })
}
export const getCategoryData = (params) =>{
   return http({
      url:'/category',
      data:params,
      method:"POST"
   })
}
export const getHotData = (params) =>{
   return http({
      url:'/category',
      data:params,
      method:"GET"
   })
}