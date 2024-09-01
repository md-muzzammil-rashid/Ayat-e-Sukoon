'use client';

import { images } from '@/constants/images'
import React from 'react'
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className='relative w-full h-full'>
        <Image src={images.kaaba1} alt='home' className='w-full h-[90%] object-cover ' />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/0"></div>
        <h2 className='text-white absolute top-[20%] translate-y-1/2 leading-[52px] shadow shadow-black left-12 poppins-black text-5xl'>
            Find<br/> Comfort <br/> in the words <br/> of Quran
        </h2>
    </section>
  )
}

export default HeroSection