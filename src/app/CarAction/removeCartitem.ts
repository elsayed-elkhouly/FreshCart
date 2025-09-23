"use server"

import { getmytoken } from "@/utilites/token"
import axios from "axios"

export async function Removeitem(id:string){
       const token = await getmytoken()   
const {data}= await axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,{
    headers:{
        token:token as string
    }
})
 return data
}