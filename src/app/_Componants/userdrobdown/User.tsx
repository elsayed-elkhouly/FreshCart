import React from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { signOut } from 'next-auth/react'
import Link from 'next/link'
const User = () => {
  return (
    <DropdownMenu>
  <DropdownMenuTrigger className='w-full'><i className="fa-solid fa-user fa-2x"></i></DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel >My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem  className="cursor-pointer data-[highlighted]:bg-green-500 data-[highlighted]:text-white"><Link href={"/UpdataUserdata"}> <i className="fa-regular fa-user mx-2"></i> Update User </Link></DropdownMenuItem>
    <DropdownMenuItem  className="cursor-pointer data-[highlighted]:bg-green-500 data-[highlighted]:text-white"><Link href={"/Updatepass"}> <i className="fa-solid fa-key mx-2"></i> Update Pass </Link></DropdownMenuItem>
    <DropdownMenuItem>  <button className="cursor-pointer bg-red-600 p-2 rounded text-white w-full " onClick={function(){
                  signOut({callbackUrl:"/login"})
                }}> logout</button> </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
  )
}

export default User