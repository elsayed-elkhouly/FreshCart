"use server"
import { getmytoken } from "@/utilites/token";
import axios from "axios";
export async function OnlineOrder(cartid:string,value:object){
   const token =await getmytoken()
   const {data}= await axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartid}?url=http://localhost:3000`,value,{
    headers:{
        token:token as string
    }
   }
    
   )
   return data
}