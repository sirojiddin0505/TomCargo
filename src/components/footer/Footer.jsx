import Image from 'next/image'
import React from 'react'
import logo from '../../../public/logo.png'

const Footer = () => {
  return (
    <section className='bg-[#f9f9f9] text-white flex flex-col items-center justify-center gap-6 py-15'>
      <Image src={logo} alt='logo bor' className='w-[80px] h-[80px]  '/>
      <div className='flex text-black gap-3'>
        <p>FaceBook</p>
        <p>Twitter</p>
        <p>Pinterest</p>
        <p>Google</p>
      </div>
      <p className='text-[#9b9b9b] pt-4'>2025 Town Cargo rights reserved</p>
    </section>
  )
}

export default Footer