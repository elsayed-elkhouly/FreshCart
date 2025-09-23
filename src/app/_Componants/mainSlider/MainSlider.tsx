"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import image1 from "./../../../../public/grocery-banner.png"
import image2 from "./../../../../public/grocery-banner-2.jpeg"
import slide1 from "./../../../../public/slider-image-1.jpeg"
import slide2 from "./../../../../public/slider-image-2.jpeg"
import slide3 from "./../../../../public/slider-image-3.jpeg"
import Image from 'next/image';
import { Autoplay } from 'swiper/modules'
import 'swiper/css';
const MainSlider = () => {
  return (
   <>   <div className='mb-10 flex'>
     
   <div className='w-2/3'>
      <Swiper
      spaceBetween={0}
      slidesPerView={1}
      autoplay={{delay:1500,
         disableOnInteraction: false,
      }}
       modules={[Autoplay]}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><Image className='h-[400px] object-cover w-full' src={slide1} alt='' /></SwiperSlide>
      <SwiperSlide><Image className='h-[400px] object-cover w-full' src={slide2} alt='' /></SwiperSlide>
      <SwiperSlide><Image className='h-[400px] object-cover w-full' src={slide3} alt='' /></SwiperSlide>
     
    
    </Swiper>
    </div>
    <div className='w-1/3'>
       <Image className='h-[200px] object-cover' src={image1} alt='' />
       <Image className='h-[200px] object-cover' src={image2} alt='' />
      </div>
   </div>
    
    </>
  )
}

export default MainSlider