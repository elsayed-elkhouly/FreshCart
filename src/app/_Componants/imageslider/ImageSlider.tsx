"use client"
import React from 'react'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image'
import { Data } from '@/types/productDetailes.type';
const ImageSlider = ({data}:{data:Data}) => {
  console.log(data);
   const s =data ||[]
  return (
    
    
  <Swiper
      spaceBetween={0}
      slidesPerView={1}
      autoplay={{delay:2500,
         disableOnInteraction: false,
      }}
       modules={[Autoplay]}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
    {s?.images?.map(function(image,idx){return <div key={idx}><SwiperSlide ><Image className='w-fit' src={image} alt=''  width={200} height={200}/></SwiperSlide>
    </div>}
      
    )}
     

    </Swiper>


  )
}

export default ImageSlider