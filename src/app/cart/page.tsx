"use client"
import { Button } from '@/components/ui/button'
import { Cartcontext } from '@/context/cartContext'
import { CartProduct } from '@/types/userCart.type'
import Image from 'next/image'
import React, { useContext } from 'react'
import Link from 'next/link'

const Cart = () => {
  const context  = useContext(Cartcontext)
  if (!context) {
  throw new Error("Cartcontext must be used within a CartProvider");
}
const { numOfCartItems, Products, totalPrice, removeCartItem, CartUpdate, clearAllCart }=context;
  async function delet(id: string) {
    const data = await removeCartItem(id)
    return data
  }
  if (Products.length == 0) {
    return <div className='flex justify-center items-center  h-screen w-full'>
      <title>Cart</title>
      <h1 className='text-red-700 text-3xl font-bold ' > No Data </h1></div>
  }
  return (
    <>
      <div className='mx-auto w-full md:w-[80%] bg-gray-100 my-10 p-5'>
        <div className='my-5 flex items-center justify-between' >
          <div>
            <h1 className=' text-2xl font-bold  mb-5'>Cart shop</h1>
            <p className='font-bold'>totalPrice : <span className='text-green-500 '>{totalPrice}</span></p>
          </div>
          <div className='flex flex-col-reverse'>
            <Button onClick={clearAllCart}>Clear Cart</Button>
            <p className='pe-3.5 my-3 font-bold'>total number of items:  <span className='text-green-500'> {numOfCartItems}</span></p>
          </div>
        </div>
        {Products?.map(function (products: CartProduct, idx: number) {
          return <div key={idx} className='py-5 justify-between border-b-2 border-gray-400 my-5 flex items-center'>
            <div className='flex items-center gap-5'>
              <Image src={products.product.imageCover} alt='' width={200} height={200} />
              <div>
                <h2 className='mb-2 font-bold text-2xl'>{products.product.title}</h2>
                <p className=' my-2 text-2xl text-green-500'>price :{products.price}</p>
                <Button onClick={function () {
                  delet(products.product.id)
                }} className='bg-red-600'><i className="fa-solid fa-trash"></i></Button>
              </div>
            </div>
            <div className='flex items-center gap-3'>
              <Button onClick={function () {
                CartUpdate(products.product._id, products.count + 1)
              }} className='bg-green-500'>+</Button>
              <p>{products.count}</p>
              <Button onClick={function () {
                CartUpdate(products.product._id, products.count - 1)
              }} className='bg-green-500'>-</Button>
            </div>
          </div>
        })}
        <div className=' text-center '>
          <Link href={"/Payment"}>
            <Button className='w-full md:w-[30%] text-2xl py-2'>  Chek Out </Button></Link> </div>
      </div>
    </>
  )
}

export default Cart