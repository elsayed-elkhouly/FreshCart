import React from 'react'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from 'next/link'
import Image from 'next/image'
import Addbtn from '../_Componants/addbtn/Addbtn'
import Wichbtn from '../_Componants/wishbtn/Wichbtn'
import { Product } from '@/types/product.type'
import getallProduct from '@/apis/getallProduct'
const Products = async () => {
  const data: Product[] = await getallProduct()
console.log(data);

  return (
    <section className=" mx-auto w-full md:w-[90%] px-5 md:px-0 py-10">
      <title>Products</title>
      <div className=" flex flex-wrap">

        {data?.map(function (prduct: Product, idx) {
          return <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5" key={idx}>
            <div className="ineer p-3">
              <Card className="p-0 relative ">
                <Link href={`/ProductDetails/${prduct._id}`}>
                  <CardHeader className="w-full p-0  relative">
                    <Image width={500} height={500} src={prduct.imageCover} alt="" className="" />
                  </CardHeader>
                  <CardContent className="px-2">
                    <p className="text-green-600">{prduct.category.name}</p>
                    <p className=" mt-3 line-clamp-1">{prduct.title}</p>
                  </CardContent>
                  <CardFooter className="px-2 flex justify-between mb-0">
                    <p>{prduct.price} EGP</p>
                    <p> <i className="fa-solid fa-star text-yellow-300"></i>{prduct.ratingsAverage}</p>
                  </CardFooter>
                </Link>
                <Addbtn id={prduct.id} />
                <Wichbtn id={prduct.id} /></Card>
            </div>
          </div>
        })}
      </div>












    </section>
  )
}

export default Products