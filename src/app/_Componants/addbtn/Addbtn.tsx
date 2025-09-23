"use client"
import { Button } from '@/components/ui/button'
import { Cartcontext } from '@/context/cartContext'
import React, { useContext, useState } from 'react'
import { toast } from 'sonner'

const Addbtn =  ({id}:{id:string}) => {
   const context  = useContext(Cartcontext)
  if (!context) {
  throw new Error("Cartcontext must be used within a CartProvider");
}
const { Addtocart }=context;
      const [isloding, setisloding] = useState(false)
  async function handelAddtocart(){

    setisloding(true)
   const data =  await Addtocart(id)
   if (data.status==="success") {
    toast.success(data.message,{
        duration:1500,
        position:'top-center'
    })
    setisloding(false)
   }
   }
  return (
                <Button className=' bg-green-600 rounded-2xl cursor-pointer w-full   mx-auto text-center mb-0' onClick={handelAddtocart}> {isloding?<i className='fa-solid fa-spin fa-spinner'></i>:"+ Add to Cart"}</Button>

  )
}

export default Addbtn 