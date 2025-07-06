import React from 'react'
import Card from '@/components/card/Card'
import { newsData, servicesData } from '@/components/data/data'
import Image from 'next/image'
import logo from '../../public/logo.png'

const HomePage = () => {
  return (
    <section>
      <main className='container mx-auto pt-20 px-4'>
        <h2 className='text-4xl font-bold text-gray-800 text-center'>Our Services</h2>
        <hr  className='bg-[#3db7ef] border-none w-20 h-[3px] my-3 mb-5 mx-auto'/>
        <p className='text-center max-w-[760px] mx-auto py-6'>Our transportation company has been offering a vast set of reliable solutions for businesses and individuals all over the world since our establishment.</p>
        <div className="flex flex-col justify-around items-center md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 py-14">
          {servicesData.map((item, index) => (
            <Card key={index} {...item} />
          ))}
        </div>
      </main>

      <main className='why us pt-25 bg-[#172646] py-25'>
        <div className='container mx-auto'>
        <h2 className='text-4xl text-[#ffff] text-center'>WHY CHOOSE US</h2>
        <hr  className='bg-[#3db7ef] border-none w-20 h-[3px] my-8 mx-auto '/>
        <div className='flex flex-col items-center md:grid md:grid-cols-2 xl:grid-cols-3  justify-around gap-8 pt-4'>
          <div className='flex gap-4 '>
            <Image src={logo} alt='rasm' className='w-[80px] h-[80px]'/>
            <span>
              <h3 className='text-[#ffff] text-[22px] font-bold pb-2'>Best Service</h3>
              <p className='w-[270px] text-[#ffff] '>Our mission is to attract and retain customers by providing Best in Class transportation solutions and fostering a profitable, disciplined culture of safety, service, and trust</p>
            </span>
          </div>
          <div className='flex gap-4'>
            <Image src={logo} alt='rasm' className='w-[80px] h-[80px]'/>
            <span>
              <h3 className='text-[#ffff] text-[22px] font-bold pb-2'>Reputation</h3>
              <p className='w-[270px] text-[#ffff]' >We have established a strong presence in the transportation industry. Our award-winning services earn a reputation for quality and excellence that few can rival.</p>
            </span>
          </div>
          <div className='flex gap-4'>
            <Image src={logo} alt='rasm' className='w-[80px] h-[80px]'/>
            <span>
              <h3 className='text-[#ffff] text-[22px] font-bold pb-2'>Safety & Security</h3>
              <p className='w-[270px] text-[#ffff]'>Safety for our employees, customers and motoring public will always remain our primary focus in all the policies, procedures and programs that govern our business.</p>
            </span>
          </div>
        </div>
        </div>
      </main>

      <main className='news py-20 flex justify-center flex-col items-center '>
        <h2 className='text-gray-900 text-[36px] font-bold'>LATEST NEWS</h2>
        <hr  className='bg-[#3db7ef] border-none w-20 h-[3px] my-4 '/>
        <div className="flex flex-col justify-around items-center md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 py-14">
          {newsData.map((item, index) => (
          <Card key={index} {...item} />
          ))}
        </div>
      </main>

      <main className='contact pt-25 bg-[#172646] py-10'>
        <div className='container mx-auto px-6'>
          <h2>Contact Form</h2>
          <div>
            <form className='max-w-[500px]'>
              <h3 className='text-[#ffff] text-lg mb-2'>Select your role:</h3>
              <span className='flex gap-4 '>
                <span className='flex items-center'>
                  <label className='mr-1 pb-1 text-[#ffff] text-lg'>Owner</label>
                  <input type="radio" className='cursor-pointer'/>
                </span>
                <span className='flex items-center'>
                  <label className='text-[#ffff] text-lg mr-1 pb-1'>Company</label>
                  <input type="radio" className='cursor-pointer' />
                </span>
              </span>
              <input type="text" placeholder='Your name' className='block border p-2 rounded-md w-full bg-[#ffff] text-gray-700 outline-none mb-2'/>
              <input type="text" placeholder='Your last name' className='block border p-2 rounded-md w-full bg-[#ffff] text-gray-700 outline-none mb-2'/>
              <input type="tel" placeholder='Your number' className='block border p-2 rounded-md w-full bg-[#ffff] text-gray-700 outline-none mb-2'/>
              <input type="email" placeholder='Your email' className='block border p-2 rounded-md w-full bg-[#ffff] text-gray-700 outline-none mb-2' />
              <textarea row={4} className='block border p-2 rounded-md w-full bg-[#ffff] text-gray-700 outline-none mb-2'></textarea>
            </form>
          </div>
        </div>
      </main>
    </section>
  )
}

export default HomePage