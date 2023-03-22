import React, { useState } from 'react'
import { decode } from '../lib/decode';
import { Nextbutton } from './nextbutton';
import { PossibleAns } from './possibleAns'

export const Gamecard = ({item, questionNumber, length}) => {
  
  return (
    <div className='gamecard__container'>
        <p className='gamecard__question-index'>{`${questionNumber} / ${length}`}</p>
        <h2 className='gamecard__question'>{decode(item.question)}</h2>
        <div className='gamecard__answers-container'>
        {item.possibleAnswers.map((ans,i) => <PossibleAns key={ans+i} ans={ans} />)}
        </div>
        <Nextbutton />
    </div>
  )
}
