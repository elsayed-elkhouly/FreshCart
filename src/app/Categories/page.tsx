import getAllCategories from '@/apis/getallCategories'
import { Category } from '@/types/categorie.type'
import React from 'react'
import Image from 'next/image'
const Categories = async () => {
  const data: Category[] = await getAllCategories()
  console.log(data);

  return (
    <>
      <title>Category  </title>
      <header className="bg-primary text-primary-foreground py-6 mb-20 ">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center"> Categories</h1>
        </div>
      </header>
      <div className='w-full md:w-[80%]  mx-auto'>
        <div className=' flex flex-wrap mb-14 gap-4'>
          {data.map(function (data, idx) {
            return <div key={idx} className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mx-auto '>
              <div  className=" bg-white   rounded-4xl  shadow-2xl   border-gray-100  w-full overflow-hidden cursor-pointer">
                <Image src={data.image} width={100} height={200} alt='' className='object-cover h-[200] w-full rounded-t-3xl transition-transform hover:scale-110 decoration-2 ' />
                <div className="p-5">
                  <h5 className="mb-2 text-center font-bold tracking-tight text-green-600">{data.name}</h5>
                </div>
              </div>
            </div>
          })}
        </div>
      </div>
    </>
  )
}

export default Categories