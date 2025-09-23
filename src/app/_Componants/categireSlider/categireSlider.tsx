"use client"
import { Category } from '@/types/categorie.type';
import Image from 'next/image';
import React from 'react'
import { Autoplay } from 'swiper/modules'

import { Swiper, SwiperSlide } from 'swiper/react';

const CategireSlider = ({category}:{category:Category[]}) => {
    
  return (
   <>
   
          <Swiper
      spaceBetween={0}
      slidesPerView={5}
         autoplay={{delay:2500,
         disableOnInteraction: false,
      }}
       modules={[Autoplay]}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {category.map(function(cat:Category,idx:number){return<SwiperSlide key={idx} >
        <Image width={500} height={500}  src={cat.image} className='h-[200] object-cover' alt="" />
    <p className='my-2 text-center text-green-500'> {cat.name}</p>
      </SwiperSlide>})}
    </Swiper>
   </>
  )
}

export default CategireSlider