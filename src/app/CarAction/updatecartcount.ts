"use server"

import { getmytoken } from "@/utilites/token"
import axios from "axios"

export async function udateItemCount(id:string,count:number){
       const token = await getmytoken()   
       const value={
    count: count
}
const {data}= await axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,value,{
    headers:{
        token:token as string
    }
})
 return data
}