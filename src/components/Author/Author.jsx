import React from 'react'
import "./Author.css"

const Author = ({data}) => {
  const authorData = data.author
  return (
    <div>
      <div className='author_contain'>
        <h3 className='author_title'>{authorData}</h3>
      </div>
    </div>
  )
}

export default Author