import getAllBrands from '@/apis/getallbrand'
import { Button } from '@/components/ui/button';
import { Brand } from '@/types/Brand.type';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Brands = async () => {
  const data = await getAllBrands()
 const s =data ||[]
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <title> Brands</title>
      <header className="bg-primary text-primary-foreground py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center">Brand Categories</h1>
          <p className="text-center text-muted-foreground mt-2">
            Discover our curated collection of premium brands
          </p>
        </div>
      </header>
      {/* Brands Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {s?.map(function (data: Brand, idx: number) {
              return <div key={idx}
                className="bg-card text-card-foreground rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                <div className="aspect-square bg-muted/20 flex items-center justify-center">
                  <Image src={data.image} alt='' width={400} height={400} />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2"> </h3>
                  <p className="text-muted-foreground mb-4"> </p>
                  <div className="flex justify-between items-center">
                    <span className="inline-block bg-accent text-accent-foreground px-3 py-1   font-bold">
                      {data.name}
                    </span>
                    <Button  className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors">
                      <Link href={`/BrandDetails/${data._id}`}> View Products</Link>
                    </Button> 
                  </div>
                </div>
              </div>
            })}
          </div>
        </div>
      </section>




    </div>
  );
};





export default Brands