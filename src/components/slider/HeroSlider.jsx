"use client";
import React from 'react'
import { useState } from 'react';

const HeroSlider = () => {
    const slides = [
        {
          title: "Unlimited Delivery",
          desc: "We help people save time, make their life better, exercising communications, both in business and private life."
        },
        {
          title: "A partnership based on trust.",
          desc: "We strive to ensure that our services have become a benchmark of quality in the field of the delivery"
        },
        {
          title: "Comfortable Payment System.",
          desc: "Payment for services is made by credit or advanced system. A form of payment is in the discretion of the customer."
        }
      ];
      const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div className="h-screen bg-cover bg-center relative flex items-center justify-center text-center text-white" style={{ backgroundImage: `url("/hero.jpg")` }}>
      <div className="absolute inset-0 bg-black/30 bg-opacity-50"></div>
      <div className="relative z-10 px-4">
        <h1 className="text-[54px] leading-[70px] font-bold mb-8">{slides[currentIndex].title}</h1>
        <p className="text-xl max-w-2xl mx-auto">{slides[currentIndex].desc}</p>
        <div className="flex justify-center mt-8 space-x-4">
          {slides.map((_, index) => (
            <button key={index} onClick={() => setCurrentIndex(index)} className={`w-4 h-4 rounded-full cursor-pointer ${currentIndex === index ? "bg-cyan-400" : "bg-white"}`}></button>
          ))}
        </div>
      </div>
    </div>
)
}

export default HeroSlider