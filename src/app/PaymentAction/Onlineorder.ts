"use server"
import { getmytoken } from "@/utilites/token";
import axios from "axios";
export async function OnlineOrder(cartid:string,value:object){
   const token =await getmytoken()
   const {data}= await axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartid}?url=https://fresh-cart-two-liart.vercel.app/`,value,{
    headers:{
        token:token as string
    }
   }
    
   )
   return data
}