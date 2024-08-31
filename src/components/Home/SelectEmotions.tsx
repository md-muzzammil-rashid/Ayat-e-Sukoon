'use client'

import emotions from '@/constants/emotions'
import React from 'react'
import EmotionCard from './EmotionCard'

const SelectEmotions = () => {
  return (
    <section>
        <h2 className='poppins-bold text-3xl py-12'>
        Select Your Emotion to Receive a Relevant Verse
        </h2>

        <div>
            {
                emotions.map(emotion=>
                    <EmotionCard emoji={emotion.emoji} emotion={emotion.emotion} message={emotion.message} key={emotion.emotion}/>
                )
            }
        </div>
    </section>
  )
}

export default SelectEmotions