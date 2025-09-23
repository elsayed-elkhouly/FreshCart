"use server"
import { getmytoken } from "@/utilites/token";
import axios from "axios";

export async function addtocartAction(id:string) {


    const token = await getmytoken()


    const values = {
        productId: id
    }
    const { data } = await axios.post("https://ecommerce.routemisr.com/api/v1/cart", values, {
        headers: {
            token: token as string
        }
    })
    return data
}      