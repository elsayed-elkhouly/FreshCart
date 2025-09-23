import React from 'react'
// Import Swiper styles
import 'swiper/css';
import getAllCategories from '@/apis/getallCategories';
import CategireSlider from '../categireSlider/categireSlider';
import { Category } from '@/types/categorie.type';
const CatSlider = async() => {
 const data: Category[]=  await getAllCategories()
  return (
    <div className='mb-10'>
    <CategireSlider category={data}/>
    </div>
  )
}

export default CatSlider