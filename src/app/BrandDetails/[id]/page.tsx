import getSinglebrand from '@/apis/getsinglebrand'
import Image from 'next/image'
import React from 'react'

const BrandDetails = async({ params }: { params: { id: string } }) => {
   const {id}= await params
 const data =await getSinglebrand(id)
 console.log(data);
 
  return (
     <section className='w-full  md:w-[90%]  flex flex-wrap mx-auto items-center mt-5'>
      <div className='w-full md:w-1/3 p-10'>
       <Image src={data.image} alt='' width={400} height={400}/>
      </div>
      <title>{data.name}</title>
      <div className='w-full md:w-2/3 '>
        <div>
          <p className='text-green-500 font-bold text-center text-7xl'>{data.name}</p> 
        </div>
      </div>
    </section>
  )
}

export default BrandDetails