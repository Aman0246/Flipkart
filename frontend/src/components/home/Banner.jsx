import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import { bannerData } from '../../Constants/data';
import styled from '@emotion/styled';


const Imagewrapper=styled("img")({
    width:"100%",
    height:'280px',
    '@media (max-width:900px)':{
      objectFit:"cover",
      height:"180px"
    },

    
})

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
export const Banner=()=>{
    
    return(
        
        <Carousel responsive={responsive}
          dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container"
        swipeable={false}
        draggable={false}
        transitionDuration={500}
        autoPlay={true}
        autoPlaySpeed={1000}
        infinite={true}
        showDots={true}>
                       {
                         bannerData.map(e=>(
                            <Imagewrapper key={e.id} src={e.url} alt="" srcSet="" />
                         ))
                       }
        </Carousel>
        
        
        
  )
}