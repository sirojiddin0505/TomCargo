'use client'
import React from 'react'
import Image from 'next/image'
import Marquee from 'react-fast-marquee'
import { FaClosedCaptioning, FaRightLong } from 'react-icons/fa6'
import { IoClose } from "react-icons/io5";
import Card from '@/components/card/Card'
import { newsData } from '@/components/data/data'
import logo from '../../public/logo.png'
import services1 from '../../public/services1.png'
import services2 from '../../public/services2.png'
import services3 from '../../public/services3.png'
import services4 from '../../public/services4.jpg'
import services5 from '../../public/services5.png'
import services6 from '../../public/services6.png'
import partrners1 from '../../public/amazon.png'
import partrners2 from '../../public/ups.png'
import partrners3 from '../../public/axle.png'
import partrners4 from '../../public/fedex.png'
import about1 from '../../public/about.png'
import HeroSlider from '@/components/slider/HeroSlider'
import { useState } from 'react'


const HomePage = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <section id='home'>
      <HeroSlider />

      <main id='about' className='container mx-auto py-12 px-4 '>
        <h2 className='text-3xl font-bold text-center py-4'>COMPANY AT A GLANCE</h2>
        <hr className='bg-[#3db7ef] border-none w-20 h-[3px] my-3 mb-5 mx-auto'/>
        <div className='flex flex-col items-center gap-6 justify-center md:grid md:grid-cols-2 pt-4'>
          <div className='max-w-[500px] w-full h-[200px] md:h-[300px] '>
            <Image src={about1} alt='about image' className='w-full h-auto ' />
          </div>
          <div className='text-center md:text-start'>
            <p className='max-w-[670px] py-2'>Our transportation company with 30 years of experience is you best choice for shipping cargo of any size, storage, packing or delivering wares to your customers. Our professional employees will take care of your goods, whenever you send them</p>
            <p className='max-w-[670px] py-2'>You are granted complete control over the process of delivery by phone or by our mobile app. Your freight is tracked every step of the   way. We provide a high standard of shipping, regardless of its volume. If your company needs to establish a supply chain, we have prepared several readymade solutions with flexible pricing rates for you. Our urgent cargo services offer defined time frames for convenience of your business. Our supply chain services include shipping, warehousing, packaging, quality control and distribution.</p>
            <button onClick={() => setShowModal(true)} className='py-3 px-8 border mt-4 rounded-md text-[#ffff] font-bold cursor-pointer bg-[#3db7ef] hover:opacity-80 active:scale-90 duration-420'>Contact Us</button>
          </div>
        </div>
      </main>

      <main id='services' className='services container mx-auto pt-20 px-4'>
        <h2 className='text-4xl font-bold text-gray-800 text-center'>Our Services</h2>
        <hr  className='bg-[#3db7ef] border-none w-20 h-[3px] my-3 mb-5 mx-auto'/>
        <p className='text-center max-w-[760px] mx-auto py-6'>Our transportation company has been offering a vast set of reliable solutions for businesses and individuals all over the world since our establishment.</p>
        <div className="flex flex-col justify-center items-center md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 py-14">
          <div className='relative opacity-80 hover:opacity-100 duration-470 cursor-pointer overflow-hidden'>
            <div>
              <Image  src={services1} alt='rasm bor' className='maw-w-[390px] h-[250px] rounded-md object-cover ' />
            </div>
            <div className='absolute top-49  hover: duration-500'>
              <h3 className='py-1 px-6 rounded-md bg-[#3db7ef] text-xl text-[#ffff] flex items-center gap-2'><FaRightLong/>Transportation</h3>
            </div>
          </div>
          <div className='relative opacity-80 hover:opacity-100 duration-470 cursor-pointer overflow-hidden'>
            <div>
              <Image  src={services2} alt='rasm bor' className='maw-w-[390px] h-[270px] rounded-md object-cover ' />
            </div>
            <div className='absolute top-49  hover: duration-500'>
              <h3 className='py-1 px-6 rounded-md bg-[#3db7ef] text-xl text-[#ffff] flex items-center gap-2'><FaRightLong/>Logistics</h3>
            </div>
          </div>
          <div className='relative opacity-80 hover:opacity-100 duration-470 cursor-pointer overflow-hidden'>
            <div>
              <Image  src={services3} alt='rasm bor' className='maw-w-[390px] h-[250px] rounded-md object-cover ' />
            </div>
            <div className='absolute top-49  hover: duration-500'>
              <h3 className='py-1 px-6 rounded-md bg-[#3db7ef] text-xl text-[#ffff] flex items-center gap-2'><FaRightLong/>Towing Services</h3>
            </div>
          </div>
          <div className='relative opacity-80 hover:opacity-100 duration-470 cursor-pointer overflow-hidden'>
            <div>
              <Image  src={services4} alt='rasm bor' className='maw-w-[390px] h-[250px] rounded-md object-cover ' />
            </div>
            <div className='absolute top-49  hover: duration-500'>
              <h3 className='py-1 px-6 rounded-md bg-[#3db7ef] text-xl text-[#ffff] flex items-center gap-2'><FaRightLong/>Maintenance Leasing</h3>
            </div>
          </div>
          <div className='relative opacity-80 hover:opacity-100 duration-470 cursor-pointer overflow-hidden'>
            <div>
              <Image  src={services5} alt='rasm bor' className='maw-w-[390px] h-[250px] rounded-md object-cover ' />
            </div>
            <div className='absolute top-49  hover: duration-500'>
              <h3 className='py-1 px-6 rounded-md bg-[#3db7ef] text-xl text-[#ffff] flex items-center gap-2'><FaRightLong/>Distribution Services</h3>
            </div>
          </div>
          <div className='relative opacity-80 hover:opacity-100 duration-470 cursor-pointer overflow-hidden'>
            <div>
              <Image  src={services6} alt='rasm bor' className='maw-w-[390px] h-[250px] rounded-md object-cover ' />
            </div>
            <div className='absolute top-49  hover: duration-500'>
              <h3 className='py-1 px-6 rounded-md bg-[#3db7ef] text-xl text-[#ffff] flex items-center gap-2'><FaRightLong/>Storage</h3>
            </div>
          </div>
        </div>
      </main>

      <main id='why' className='why us pt-25 bg-[#172646] py-25 px-4'>
        <div className='container mx-auto'>
        <h2 className='text-4xl text-[#ffff] text-center'>WHY CHOOSE US</h2>
        <hr  className='bg-[#3db7ef] border-none w-20 h-[3px] my-8 mx-auto '/>
        <div className='flex flex-col items-center md:grid md:grid-cols-2 xl:grid-cols-3  justify-around gap-8 pt-4'>
          <div className='sm:flex items-center gap-6 text-center sm:text-start '>
            <Image src={logo} alt='rasm' className='w-[80px] h-[80px] mx-auto sm:mx-0'/>
            <span>
              <h3 className='text-[#ffff] text-[22px] font-bold pb-2'>Best Service</h3>
              <p className='w-[270px] text-[#ffff] '>Our mission is to attract and retain customers by providing Best in Class transportation solutions and fostering a profitable, disciplined culture of safety, service, and trust</p>
            </span>
          </div>
          <div className='sm:flex items-center gap-6 text-center sm:text-start'>
            <Image src={logo} alt='rasm' className='w-[80px] h-[80px] mx-auto sm:mx-0'/>
            <span>
              <h3 className='text-[#ffff] text-[22px] font-bold pb-2'>Reputation</h3>
              <p className='w-[270px] text-[#ffff]' >We have established a strong presence in the transportation industry. Our award-winning services earn a reputation for quality and excellence that few can rival.</p>
            </span>
          </div>
          <div className='sm:flex items-center gap-6 text-center sm:text-start'>
            <Image src={logo} alt='rasm' className='w-[80px] h-[80px] mx-auto sm:mx-0'/>
            <span>
              <h3 className='text-[#ffff] text-[22px] font-bold pb-2'>Safety & Security</h3>
              <p className='w-[270px] text-[#ffff]'>Safety for our employees, customers and motoring public will always remain our primary focus in all the policies, procedures and programs that govern our business.</p>
            </span>
          </div>
        </div>
        </div>
      </main>

      <main id='news' className='news py-20 flex justify-center flex-col items-center '>
        <h2 className='text-gray-900 text-[36px] font-bold'>LATEST NEWS</h2>
        <hr  className='bg-[#3db7ef] border-none w-20 h-[3px] my-4 '/>
        <div className="flex flex-col justify-around items-center md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 py-14">
          {newsData.map((item, index) => (
          <Card key={index} {...item} />
          ))}
        </div>
      </main>

      <main>
        <h2 className='text-4xl text-gray-800 text-center font-[600]'>Our Partners</h2>
        <hr  className='bg-[#3db7ef] border-none w-20 h-[3px] my-8 mx-auto '/>
        <div>
          <Marquee >
            <div className='flex items-center justify-between gap-50 py-16'>
              <Image src={partrners1} alt='partners logo' className='w-[180px] h-[70px]'/>
              <Image src={partrners2} alt='partners logo' className='w-[150px] h-[80px]'/>
              <Image src={partrners3} alt='partners logo' className='w-[180px] h-[60px]'/>
              <Image src={partrners4} alt='partners logo' className='w-[180px] h-[80px]'/>
            </div>
          </Marquee>
        </div>
      </main>

      <main id='contact' className='contact pt-25 bg-[#172646] py-10'>
      <div className='container mx-auto px-6'>
        <h2 className='text-4xl text-white text-center pb-12'>Contact Form</h2>
         <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 items-center '>
          <div className='w-full max-w-[500px] mx-auto lg:mx-0'>
            <form className='w-full'>
              <h3 className='text-[#fff] text-lg mb-2'>Select your role:</h3>
              <div className='flex gap-4 mb-4'>
                <label className='flex items-center text-white text-lg gap-1 cursor-pointer'>
                  <input type="radio" name="role"/>Owner
                </label>
                <label className='flex items-center text-white text-lg gap-1 cursor-pointer '>
                  <input type="radio" name="role" />Company
                </label>
              </div>
              <input type="text" placeholder='Your name' className='block border p-2 rounded-md w-full bg-white text-gray-700 outline-none mb-2' />
              <input type="text" placeholder='Your last name' className='block border p-2 rounded-md w-full bg-white text-gray-700 outline-none mb-2' />
              <input type="tel" placeholder='Your number' className='block border p-2 rounded-md w-full bg-white text-gray-700 outline-none mb-2' />
              <input type="email" placeholder='Your email' className='block border p-2 rounded-md w-full bg-white text-gray-700 outline-none mb-2' />
              <textarea rows={4} placeholder="Your message..." className='block border p-2 rounded-md w-full bg-white text-gray-700 outline-none mb-4'></textarea>
              <button type='submit' className='w-full border-none cursor-pointer p-3 rounded-md bg-[#3db7ef] font-semibold text-white hover:bg-[#00a7ef] active:scale-95 duration-300'>Send message</button>
            </form>
          </div>
          <div className='w-full max-w-[500px] mx-auto lg:mx-0'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d223705.74137618634!2d-86.65153681179694!3d35.80361667187361!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886389625c70c971%3A0xdd8ee054cb8149b0!2s8331%20Horton%20Hwy%2C%20College%20Grove%2C%20TN%2037046!5e0!3m2!1sen!2sus!4v1751861139600!5m2!1sen!2sus" width="100%" height="400" style={{ border: 0 }} allowFullScreen="" loading="lazy" className='rounded-xl w-full'></iframe>
          </div>
         </div>
        </div>
      </main>

      {showModal && (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/50'>
          <div className='w-[500px] h-[480px] bg-white/100 p-6 rounded-xl relative'>
            <form className='w-full'>
              <div className='flex justify-between items-center px-4'>
                <h3 className='text-gray-800 text-lg mb-2 font-[600]'>Select your role:</h3>
                <p className='text-gray-800 cursor-pointer font-[800] text-2xl' onClick={()=> setShowModal(false)}><IoClose/></p>
              </div>
              <div className='flex gap-4 mb-4'>
                <label className='flex items-center text-gray-800 gap-1 cursor-pointer'>
                  <input type="radio" name="role"/>Owner
                </label>
                <label className='flex items-center text-gray-800 gap-1 cursor-pointer '>
                  <input type="radio" name="role" />Company
                </label>
              </div>
              <input type="text" placeholder='Your name' className='block border p-2 rounded-md w-full bg-white text-gray-700 outline-none mb-2' />
              <input type="text" placeholder='Your last name' className='block border p-2 rounded-md w-full bg-white text-gray-700 outline-none mb-2' />
              <input type="tel" placeholder='Your number' className='block border p-2 rounded-md w-full bg-white text-gray-700 outline-none mb-2' />
              <input type="email" placeholder='Your email' className='block border p-2 rounded-md w-full bg-white text-gray-700 outline-none mb-2' />
              <textarea rows={3} placeholder="Your message..." className='block border p-2 rounded-md w-full bg-white text-gray-700 outline-none mb-4'></textarea>
              <button type='submit' className='w-full border-none cursor-pointer p-3 rounded-md bg-[#3db7ef] font-semibold text-white hover:bg-[#00a7ef] active:scale-95 duration-300'>Send message</button>
            </form>
          </div>
        </div>
      )}
    </section>
  )
}

export default HomePage