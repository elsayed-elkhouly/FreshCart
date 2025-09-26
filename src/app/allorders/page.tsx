import getAlluserOrder from '@/apis/getallorder';
import React from 'react'
import emptyCart from "./../../../public/images (1).png"
import Image from 'next/image';
import OrderTable from '../_Componants/orderTable/OrderTable';
import Link from 'next/link';
import { Order} from '@/types/order.type';

const Allorder = async() => {
  const data =await getAlluserOrder()
  console.log(data);
   const AllData = data?.length || 0
  return (
<>

            {AllData > 0 ? <>
                <h2 className='text-[1.7rem] font-[500] text-main text-center mb-4 capitalize tracking-wide'>all orders</h2>
                {data?.map(function(product:Order,idx:number){return<OrderTable product={product} key={idx} />})}  </> : <section className='flex flex-col justify-center items-center min-h-dvh'>
                <Image className="w-[600px] rounded-full" src={emptyCart} alt="cart is empty" />
                <Link href={"/products"} className='text-center bg-main font-medium text-white px-8 py-1 text-[1rem] cursor-pointer  rounded-[8px] capitalize hover:bg-green-500 transition-all duration-300'>buy some products</Link>
            </section>}

</>
  )
}

export default Allorder