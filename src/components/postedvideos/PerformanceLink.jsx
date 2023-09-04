import React from 'react'

const PerformanceLink = ({videoURL}) => {
  return (
    <div class="gpt3-videorecognition">
    <div class="gpt3-videorecognition-content">
        <a href="#portfolioModal1" class="portfolio-link" data-toggle="modal">
            <iframe width="500" height="280" src={videoURL} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </a>
    </div>
</div>
  )
}

export default PerformanceLink
