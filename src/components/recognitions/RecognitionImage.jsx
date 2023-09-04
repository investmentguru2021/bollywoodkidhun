import React from 'react'
import './recognitionimage.css';

const RecognitionImage = ({imgUrl}) => {
  return (
      <div className='gpt3__recognitionImage'>
      <div className="gpt3__recognitionImage-image">
          <img src={imgUrl} />
        </div>
    </div>
  )
}

export default RecognitionImage
