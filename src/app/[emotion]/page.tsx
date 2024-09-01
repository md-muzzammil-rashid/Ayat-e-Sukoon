'use client'
import getRandomEntries from '@/utils/getRandomVerses'
import { useParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import AllVerses from '@/utils/verses.json'
import VerseCard from '@/components/VerseCard'
import respectiveEmoji from '@/utils/respectiveEmoji'
import { FaArrowLeft, FaBackspace, FaBackward } from 'react-icons/fa'

interface Verse {
    Verse: string,
    Text: string,
    Surah: string
}

const Page = () => {
    const [verses, setVerses] = useState<Verse[]>([])
    const [modalOpen, setModalOpen] = useState(false)
    const [selectedVerse, setSelectedVerse] = useState<Verse>()
    const [closing, setClosing] = useState(false)
    const { emotion } = useParams()
    const router = useRouter()

    const handleClosing = () => {
        setClosing(true)
        setTimeout(() => {
            setModalOpen(false)
            setClosing(false)
        }, 500);
    }
    useEffect(() => {
        setVerses(getRandomEntries(AllVerses[emotion], 15))

    }, [emotion])

    return (
        <div>
            <div className='flex items-center justify-between px-5 py-4 '>
                <div onClick={()=>router.back()}><FaArrowLeft/></div>
                <h2 className='poppins-black text-2xl'> Comfort in {emotion} </h2>
                <h2 className='poppins-black text-2xl'> {respectiveEmoji[emotion]}</h2>
            </div>
            <h2 className='bg-clip-text p-6 text-transparent poppins-black text-3xl
                bg-gradient-to-r from-indigo-400 to-cyan-400
             '>Select Any One</h2>
            <div className={` ${modalOpen? `unfold  ${closing?"out":""} ` :""}  modal-container`}>
                <div className='modal-background'>
                    <div className='modal relative py-12 roboto-bold aspect-square rounded-3xl m-6 green-bg justify-center items-center flex flex-col '>
                        <div onClick={handleClosing} className='absolute top-3 right-5 text-3xl hover:text-[#ff0000]'>
                            &times;
                        </div>
                        <h2 className='text-center m-6 text-xl'> &quot; {selectedVerse?.Text} &quot; </h2>
                        <h2 className='text-center'>{selectedVerse?.Surah}</h2>
                        <h2 className='text-center'>{selectedVerse?.Verse}</h2>
                    </div>
                </div>
            </div>
            <div className='flex flex-col  '>

                {
                    [0,1,2,3,4].map(e=>
                        <div key={e} className='flex justify-evenly'>
{
                        verses.slice(e*3, e*3+3 ).map((verse, index) => (
                            <div key={verse.Text} onClick={()=>{setSelectedVerse(verse), setModalOpen(!modalOpen); 
                            }} className='justify-center items-center flex flex-col'>
                        <VerseCard  Verse={verse.Verse} Surah={verse.Surah} Text={verse.Text}/>
                        </div>
                    )) || <p>loading...</p>  // show loading state when verses are not fetched yet.  || is a short-circuit operator, it returns the first truthy value, if any, otherwise it returns the second operand.
                    }
                    </div>
                )
                }
            </div>
        </div>
    )
}

export default Page