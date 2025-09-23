import React from 'react'
import notfound from "./../../public/404.jpg"
import Image from 'next/image'
const noutfound = () => {
  return (
    <div className='mx-auto '>


        <Image src={notfound} alt='' />
    </div>
  )
}

export default noutfound