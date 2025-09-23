"use client"
import { Cartcontext } from '@/context/cartContext';
import { wishlist} from '@/types/wishlist.type';
import React, { useContext } from 'react'
import { toast } from 'sonner';


const Wichbtn = ({id}:{id:string}) => {
  
const context  = useContext(Cartcontext)
  if (!context) {
  throw new Error("Cartcontext must be used within a CartProvider");
}
const {Addtowishlist,wishproducct}=context;
    
     const ID =wishproducct.map(function(idx){return idx.id })
  
    
   async function handeleish(){
      const data=  await Addtowishlist(id)
      console.log(data);
        if (data.status==="success") {
    toast.success(data.message,{
        duration:1500,
        position:'top-center'
    })
   }
     
      return data
    }
  return (
    <i onClick={handeleish}  className={ID.includes(id)?"absolute top-5 end-3 cursor-pointer fa-lg fa-solid fa-heart text-red-600" :"absolute top-5 end-3 cursor-pointer fa-lg fa-solid fa-heart text-green-600" }></i> 
  )
}

export default Wichbtn