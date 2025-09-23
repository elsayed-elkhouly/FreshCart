"use client"
import { Button } from '@/components/ui/button'
import { Cartcontext } from '@/context/cartContext'
import { Wishproduct } from '@/types/wishlist.type'
import Image from 'next/image'
import React, { useContext } from 'react'
import Addbtn from '../_Componants/addbtn/Addbtn'
const WishList = () => {
 const context  = useContext(Cartcontext)
  if (!context) {
  throw new Error("Cartcontext must be used within a CartProvider");
}
const { wishproducct,deletwishitem }=context;
  async function delet(id: string) {
    const data = await deletwishitem(id)
    return data
  }
   const s =wishproducct ||[]
  return (
    <>
      <div className='mx-auto w-full md:w-[80%] bg-gray-100 my-10 p-5'>
        <title>WishList</title>
        <div className='my-5 flex items-center justify-between' >
          <div><h1 className=' text-2xl font-bold  mb-5'>My WishList</h1>
          </div>
        </div>
        {s.map(function (products: Wishproduct, idx: number) {
          return <div key={idx} className='py-5 justify-between border-b-2 border-gray-400 my-5 flex items-center'>
            <div className='flex items-center gap-5'>
              <Image src={products?.imageCover} alt='' width={200} height={200}/>
              <div>
                <h2 className='mb-2 font-bold text-2xl'>{products.title}</h2>
                <p className=' my-3 text-2xl text-green-500'>price :{products.price}</p>
                <div className='flex items-center gap-5 my-3'>
                  <Button onClick={() => {
                    delet(products._id)
                  }}
                    className='bg-red-600'><i className="fa-solid fa-trash"></i></Button>
                  <Addbtn id={products.id}  />
                </div>
              </div>
            </div>
          </div>
        })}
      </div></>
  )
}

export default WishList