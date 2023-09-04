import React from 'react';
import { HonPrimeMinisterCanada, CouncillorMarkham, HonPrimeMinisterCanadaAug2022} from './imports';
import RecognitionImage from './RecognitionImage';
import VideoRecognition from './VideoRecognition';
import './recognitions.css';

const  recognition1 = "https://www.youtube.com/embed/kC3SHzLUcys";
const recognition2 = "https://www.youtube.com/embed/HTVffcTeVsU";

const Recognitions = () => {
  return (
  
    <div className='gpt3__recognitions' id="recognitions">
        <h1 className="gradient__text">Recognitions</h1>
      <div className='gpt3__recognitions-container'>

            <div className="gpt3__recognitionImage-image">
                <img src={HonPrimeMinisterCanadaAug2022} />
              </div>
                <div class="gpt3-videorecognition-content">
                  <a href="#portfolioModal1" class="portfolio-link" data-toggle="modal">
                    <iframe width="500" height="280" src={recognition1} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </a>
              </div>

              <div class="gpt3-videorecognition-content">
                  <a href="#portfolioModal1" class="portfolio-link" data-toggle="modal">
                    <iframe width="500" height="280" src={recognition2} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </a>
              </div>

              <div className="gpt3__recognitionImage-image">
                <img src={HonPrimeMinisterCanada} />
              </div>

              <div className="gpt3__recognitionImage-image">
                <img src={CouncillorMarkham} />
              </div>
      </div>
    </div>
  )
}

export default Recognitions
