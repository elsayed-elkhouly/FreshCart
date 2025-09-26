"use client"
import { Cartcontext } from '@/context/cartContext';
import { wishlist } from '@/types/wishlist.type';
import React, { useContext, useState } from 'react'
import { toast } from 'sonner';


const Wichbtn = ({ id }: { id: string }) => {

  const context = useContext(Cartcontext)
  if (!context) {
    throw new Error("Cartcontext must be used within a CartProvider");
  }
  const { Addtowishlist, wishproducct, deletwishitem } = context;

  const ID = wishproducct?.map((idx) => idx.id) ?? [];


  async function handeleish() {
    const data = await Addtowishlist(id)
    console.log(data);
    return data
  }

  function change() {
    if (!ID.includes(id)) {
      handeleish()

    } else {
      deletwishitem(id)
    }


  }
  return (
    <i onClick={change} className={ID.includes(id) ? "cursor-pointer fa-lg fa-solid fa-heart text-red-600 hover:text-red-500" : " cursor-pointer fa-lg fa-solid fa-heart text-green-600 hover:text-green-500"}></i>
  )
}

export default Wichbtn