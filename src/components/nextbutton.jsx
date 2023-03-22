import React from 'react'
import { useGameContext } from '../context'

export const Nextbutton = () => {
    const {handleNext, userAnswers, index} = useGameContext()
  return (
    <button className='next_btn' onClick={handleNext} disabled={userAnswers[index] ? false : true}>Next</button>
  )
}
