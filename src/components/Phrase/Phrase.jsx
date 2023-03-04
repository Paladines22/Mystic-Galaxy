import React from 'react'
import './Phrase.css'

const PhraseCard = ({data}) => {
  const myData = data.phrase
  return (
    <div className='phrase_card'>
      <div>
        <h2 className='phrase'>{myData}</h2>
      </div>
    </div>
  )
}

export default PhraseCard;