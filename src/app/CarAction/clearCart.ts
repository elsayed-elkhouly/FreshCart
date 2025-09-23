"use server"

import { getmytoken } from "@/utilites/token"
import axios from "axios"

export async function Clearcart(){
       const token = await getmytoken()   
const {data}= await axios.delete(`https://ecommerce.routemisr.com/api/v1/cart`,{
    headers:{
        token:token as string
    }
})
return data
}
 