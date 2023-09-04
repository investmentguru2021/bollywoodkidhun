import React from 'react'
import PerformanceLink from './PerformanceLink';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './videoperformances.css';

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
 
const VideoPerformances = () => {
  return (
    <div className='gpt3__videoperformances' id="performances">
        <h1 className="gradient__text">Our Performances</h1>
        <div className='gpt3__videoperformances-content'>
        <Carousel
                swipeable={false}
                draggable={false}
                showDots={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                >
                  
                  <PerformanceLink videoURL={'https://www.youtube.com/embed/qSJT2zzINZ0'}/>
                  <PerformanceLink videoURL={'https://www.youtube.com/embed/iR6Xn3c54Zg'}/>
                  <PerformanceLink videoURL={'https://www.youtube.com/embed/z9Zg9PjGFFQ'}/>
                  <PerformanceLink videoURL={'https://www.youtube.com/embed/qCQf3UCHB4s'}/>
                  <PerformanceLink videoURL={'https://www.youtube.com/embed/cWXOvjCDmqo'}/>
                    <PerformanceLink videoURL={'https://www.youtube.com/embed/vPm71kS9aqc'}/>
                    <PerformanceLink videoURL={'https://www.youtube.com/embed/bgx7pt771lc'}/>
                    <PerformanceLink videoURL={'https://www.youtube.com/embed/iLWHO4iZP4Q'}/>
                    <PerformanceLink videoURL={'https://www.youtube.com/embed/NUma_duBr3Q'}/>
                    <PerformanceLink videoURL={'https://www.youtube.com/embed/q9X44ycjTuM'}/>
                    <PerformanceLink videoURL={'https://www.youtube.com/embed/uZPx7eIR6EQ'}/>
                    <PerformanceLink videoURL={'https://www.youtube.com/embed/2XnvHKNkb5s'}/>
                    <PerformanceLink videoURL={'https://www.youtube.com/embed/mdo_uSaicwA'}/>
                    <PerformanceLink videoURL={'https://www.youtube.com/embed/h4OEvTM1JLE'}/>
                    <PerformanceLink videoURL={'https://www.youtube.com/embed/F7KblKYTA28'}/>
                    <PerformanceLink videoURL={'https://www.youtube.com/embed/bW3ROzbiZj0'}/>
                    <PerformanceLink videoURL={'https://www.youtube.com/embed/e_H1SKiRtqo'}/>
                    <PerformanceLink videoURL={'https://www.youtube.com/embed/Sd-gU6z1F5A'}/>
              </Carousel>
        </div>
    </div>
  )
}

export default VideoPerformances;


