import Image from 'next/image'
import Router from 'next/router'
import React from 'react'
import { useRouter } from 'next/navigation'

const EmotionCard = ({emotion, emoji, message}:{emotion:string, emoji:any, message:string}) => {
    const router = useRouter()
  return (
    <div onClick={()=>router.push(`/${emotion}`, {scroll:true})} className='justify-center relative box-decoration-slice items-center custom-border flex flex-col m-12  bg-white/5   py-6 gap-3 rounded-3xl '>
        <Image src={emoji} className='w-24 aspect-square h-24' />
        <h2 className='text-2xl poppins-black'>
            {emotion}
        </h2>
        <h4 className='text-center poppins-regular mx-4 '>
            {message}
        </h4>
        <div className='absolute w-12 blur-[40px] h-12 -top-5 -left-1 yellow-orange rounded-full'>

        </div>
        <div className='absolute w-24 blur-[50px] h-12  -right-1 bottom-1 green-yellow rounded-full'>

        </div>
    </div>
  )
}

export default EmotionCard