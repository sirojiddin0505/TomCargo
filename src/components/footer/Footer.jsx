import Image from 'next/image'
import React from 'react'
import logo from '../../../public/logo.png'
import { FaFacebook, FaGoogle, FaInstagram, FaTelegram } from "react-icons/fa6";


const Footer = () => {
  return (
    <section className='bg-[#f9f9f9] text-white flex flex-col items-center justify-center gap-6 py-15'>
      <Image src={logo} alt='logo bor' className='w-[80px] h-[80px]  '/>
      <div className='flex text-black gap-3'>
        <a target='_blank' href="https://t.me/sirojiddin17_bot" className='hover:text-[#3db7ef] cursor-pointer  text-2xl text-gray-700 font-bold ' ><FaTelegram/></a>
        <a target='_blank' href="https://instagram.com/_sirojiddin__05" className='hover:text-[#3db7ef] cursor-pointer  text-2xl text-gray-700 font-bold ' ><FaInstagram /></a>
        <a target='_blank' href="https://facebook.com" className='hover:text-[#3db7ef] cursor-pointer  text-2xl text-gray-700 font-bold ' ><FaFacebook /></a>
        <a target='_blank' href="https://google.com" className='hover:text-[#3db7ef] cursor-pointer  text-2xl text-gray-700 font-bold ' ><FaGoogle /></a>
      </div>
      <p className='text-[#9b9b9b] pt-4'>2025 Town Cargo rights reserved</p>
    </section>
  )
}

export default Footer