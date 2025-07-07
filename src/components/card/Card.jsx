import Image from 'next/image'
import React from 'react'

const Card = ({img, title, date, description}) => {
  return (
  <div className="rounded-lg shadow-md w-[320px] xl:w-[420px] bg-white">
    <div className='overflow-hidden rounded-lg hover:bg-[black/70]'>
        <Image src={img} alt={title} className="w-full h-40 lg:h-60 object-cover transition-transform duration-300 ease-in-out hover:scale-110 "/>
    </div> 
    <div className='p-4'>
      <h3 className="mt-4 text-xl font-semibold text-[#3db7ef]">{title}</h3>
      <p className="text-gray-600 text-sm py-4">{date}</p>
      <p className="text-gray-600 text-sm py-4">{description}</p>
    </div>
  </div>
  )
}

export default Card