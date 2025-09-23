import { getmytoken } from "@/utilites/token";
import axios from "axios";

export async function detUserOrders(){
   const token =await getmytoken()
   const {data}= await axios.get(`https://ecommerce.routemisr.com/api/v1/orders/user/`,{
    headers:{
        token:token as string
    }
   })
   return data
}