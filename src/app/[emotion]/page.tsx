'use client'
import getRandomEntries from '@/utils/getRandomVerses'
import { useParams } from 'next/navigation'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import AllVerses from '@/utils/verses.json'
import VerseCard from '@/components/VerseCard'
import Image from 'next/image'
// import bg from '@/assets/images/modalBackground1.png'
import bg from '@/assets/images/modalBackground2.jpeg'
// import bg from '@/assets/images/modalBackground.webp'

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

    const handleClosing = () => {
        setClosing(true)
        setTimeout(() => {
            setModalOpen(false)
            setClosing(false)
        }, 500);
    }
    useEffect(() => {
        console.log(AllVerses?.Anxious);
        setVerses(getRandomEntries(AllVerses[emotion], 15))
        console.log(verses);

    }, [])

    return (
        <div>
            <h2>emotion : {emotion}</h2>
            <div className={` ${modalOpen? `unfold  ${closing?"out":""} ` :""}  modal-container`}>
                <div className='modal-background'>
                    <div className='modal relative py-12 roboto-bold aspect-square rounded-3xl m-6 green-bg justify-center items-center flex flex-col '>
                        <div onClick={handleClosing} className='absolute top-3 right-5 text-3xl hover:text-[#ff0000]'>
                            &times;
                        </div>
                        {/* <Image src={bg} className='absolute -z-10 top-1/2 -translate-y-1/2' /> */}
                        <h2 className='text-center m-6 text-xl'>"{selectedVerse?.Text}"</h2>
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
                            <div key={verse.Text} onClick={()=>{setSelectedVerse(verse), setModalOpen(!modalOpen); console.log("modal is open");
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