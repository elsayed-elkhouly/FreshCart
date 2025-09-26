import { tkn } from "@/types/context.type"
import { getmytoken } from "@/utilites/token"
import { jwtDecode } from "jwt-decode"

export default async function getAlluserOrder(){
    const token =await getmytoken()
    if (!token) throw new Error("No token found")
    const {id}:{id:string} =jwtDecode<tkn>(token as string)
  const respons = await fetch(`https://ecommerce.routemisr.com/api/v1/orders/user/${id}`)
  const  data = await respons.json()
  return data.reverse()
}
