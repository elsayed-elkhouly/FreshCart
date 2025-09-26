import getSinglePost from '@/apis/getSinglePost'
import Addbtn from '@/app/_Componants/addbtn/Addbtn'
import ImageSlider from '@/app/_Componants/imageslider/ImageSlider'
import Wichbtn from '@/app/_Componants/wishbtn/Wichbtn'
import { Data } from '@/types/productDetailes.type'
import React from 'react'
const ProductDetails = async ({ params }: { params: { id: string } }) => {
  const {id}= await params
  const data: Data = await getSinglePost(id)
  return (
    <section className='w-full  md:w-[90%]  flex flex-wrap mx-auto items-center mt-5'>
      <div className='w-full md:w-1/3 p-10'>
        <ImageSlider data={data} />
      </div>
      <title>{data.title}</title>
      <div className='w-full md:w-2/3 p-10 md:p-0'>
        <div className='px-2'>
          <p className='text-green-500 font-bold'>{data.category.name}</p>
         <div className='flex justify-between items-center '> <p className='p-3 text-3xl'>{data.title}</p>
         <Wichbtn id={id}/>
         </div>
          <p className='text-gray-400 my-2'>{data.description}</p>
          <div className='flex justify-between'>
            <p className='text-green-500 my-2'>{data.price} EGP</p>
            <p> <i className="fa-solid fa-star text-yellow-300"></i>{data.ratingsAverage}</p>
          </div>
        </div>
        <Addbtn id={id} />
      </div>
    </section>
  )
}

export default ProductDetails