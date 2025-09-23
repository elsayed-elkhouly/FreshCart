"use server"
import { getmytoken } from "@/utilites/token";
import axios from "axios";

export async function Cashorder(cartid:string,value:object){
   const token =await getmytoken()
   const {data}= await axios.post(`https://ecommerce.routemisr.com/api/v1/orders/${cartid}`,value,{
    headers:{
        token:token as string
    }
   }
    
   )
   return data
}