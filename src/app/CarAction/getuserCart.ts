"use server"
import { getmytoken } from "@/utilites/token"
export async function getuserCart(){
    const token=await getmytoken()
     const respons =await fetch("https://ecommerce.routemisr.com/api/v1/cart",{
        headers:{
            token: token as string
        }
     })
    const data=await respons.json()
    return data
}