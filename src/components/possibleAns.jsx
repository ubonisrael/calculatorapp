import React, { useEffect, useRef } from 'react'
import { useGameContext } from '../context'
import { decode } from '../lib/decode'

export const PossibleAns = ({ans}) => {
  const {handleAnswerClick, userAnswers, index} = useGameContext()
  const ref = useRef()

  useEffect(() => {
    
    if ((userAnswers[index] !== ref.current.innerHTML) && ref.current.classList.contains('selected')) {
      ref.current.classList.remove('selected')
    }

  }, [userAnswers[index]])
  
  return (
    <div ref={ref} className='possible_ans' onClick={(e) => {
      ref.current.classList.toggle('selected')
      handleAnswerClick(e, index)
    }}>{decode(ans)}</div>
  )
}
